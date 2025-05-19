import './cart.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, updateItem, removeItem } from '../../store/Slice/cartSlice';
import CartEmpty from './emptyCart';
import CartSide from './cartSide';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdErrorOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const CartItem = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { cart, loading } = useSelector((state) => state.cart);
    const user = useSelector((state) => state.auth.user);
    const [loadingItemId, setLoadingItemId] = useState(null);
    const cartSize = useSelector(state => state.cart.size);

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
        dispatch(fetchCart());
    }, [dispatch, user, navigate]);

    if (loading) return <div>Loading...</div>;
    if (!cart?.items?.length) return <CartEmpty />;

    const handleUpdate = async (productId, quantity, type) => {
        setLoadingItemId(productId);
        try {
            await dispatch(updateItem({ productId, quantity })).unwrap();
            toast.success(type === 'increase' ? 'تم اضافه المنتج بنجاح ' : '  تم تحديث عدد النتجات بنجاح');
        } catch (error) {
            toast.error('حدث خطأ أثناء تحديث الكمية ');
        } finally {
            setLoadingItemId(null);
        }
    };

    const handleRemove = async (productId) => {
        setLoadingItemId(productId);
        try {
            await dispatch(removeItem(productId)).unwrap();
            toast.info(' تم ازاله المنتج من سله التسوق');
        } catch (error) {
            toast.error('حدث خطأ أثناء الحذف ');
        } finally {
            setLoadingItemId(null);
        }
    };

    const getButtonStyle = (isDisabled) => ({
        backgroundColor: isDisabled ? 'gray' : '#f68b1e',
        border: 'none',
        color: 'white',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
    });

    return (
        <div className="container p-5">
            <div className="row g-4">
                <div className="col-lg-9">
                    <div className="cart-box p-3">
                        <h5 className="fw-bold mb-4">
                            سلة التسوق <span>({cartSize})</span>
                        </h5>

                        <div className="border-bottom" />

                        {cart?.items.map((item) => {
                            const isLoading = loadingItemId === item.product?._id;
                            const maxReached = item.quantity >= item.product?.stock;
                            const minReached = item.quantity <= 1;

                            return (
                                <div key={item._id} className='mb-3 pb-3 border-bottom mt-2'>
                                    <div className="cart-product d-flex align-items-center">
                                        {item.product?.images?.[0]?.secure_url && (
                                            <img
                                                src={item.product.images[0].secure_url}
                                                alt={item.product.name}
                                                className="product-img me-3"
                                            />
                                        )}

                                        <div className="flex-grow-1">
                                            <h6 className='titscreen'>{item.product?.name}</h6>
                                            {item.product?.stock && (
                                                <p className="small darkred ">
                                                    <MdErrorOutline size={14} className="-f-rd5 -mrxs mx-1" />
                                                    unit left {item.product.stock}
                                                </p>
                                            )}
                                            <img
                                                className="small text-muted"
                                                src='jumia-express.png'
                                                width="84px"
                                                alt="Jumia Express"
                                            />
                                        </div>

                                        <div className="text-end mx-3 small-sm">
                                            <h6>{item.product?.price?.toFixed(2)} جنيه</h6>
                                            {item.product?.price !== item.priceAfterDiscount && (
                                                <small className="text-decoration-line-through text-muted">
                                                    {item.product.price.toFixed(2)} جنيه
                                                </small>
                                            )}
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center px-3">
                                        <p
                                            className="remove-btn ms-2 mt-2"
                                            style={{ color: "#f68b1e", cursor: "pointer" }}
                                            onClick={() => handleRemove(item.product._id)}
                                        >
                                            <i className="bi bi-trash f-15 trs"></i> إزالة
                                        </p>

                                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2">
                                            <button
                                                className="btn btn-sm px-2 fs-5 mx-3"
                                                style={getButtonStyle(isLoading || maxReached)}
                                                disabled={isLoading || maxReached}
                                                onClick={() => handleUpdate(item.product._id, item.quantity + 1, 'increase')}
                                            >
                                                <i className="bi bi-plus-lg text-light"></i>
                                            </button>

                                            <span className="mx-2 fw-bold">
                                                {isLoading ? (
                                                    <div className="spinner-border spinner-border-sm spin" />
                                                ) : (
                                                    item.quantity
                                                )}
                                            </span>

                                            <button
                                                className="btn btn-sm px-2 fs-5 mx-3"
                                                style={getButtonStyle(isLoading || minReached)}
                                                disabled={isLoading || minReached}
                                                onClick={() => {
                                                    if (item.quantity > 1) {
                                                        handleUpdate(item.product._id, item.quantity - 1, 'decrease');
                                                    } else {
                                                        handleRemove(item.product._id);
                                                    }
                                                }}
                                            >
                                                <i className="bi bi-dash text-light"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Side Cart */}
                <CartSide cart={cart} />
            </div>
        </div>
    );
};

export default CartItem;
