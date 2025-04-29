import './cart.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, addItem, updateItem, removeItem, clearUserCart } from '../../store/Slice/cartSlice';
import CartEmpty from './emptyCart';
const CartItem = () => {
    const dispatch = useDispatch();
    const { cart, loading } = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (!cart?.items?.length) return <CartEmpty />;

    const totalAmount = cart.items.reduce((total, item) => total + (item.quantity), 0);

    return (
        <div className="container p-5">
            <div className="row g-4">

                <div className="col-lg-9">
                    <div className="cart-box p-3">
                        <h5 className="fw-bold mb-4">سلة التسوق</h5>
                        <div className="border-bottom" />

                        {cart.items.map((item) => (
                            <div key={item._id} className='mb-3 pb-3 border-bottom'>
                                <div className="cart-product d-flex align-items-center">
                                    <img
                                        src={item.productId.imageCover}
                                        alt={item.productId.title}
                                        className="product-img me-3"
                                    />
                                    <div className="flex-grow-1">
                                        <h6 className='titscreen'>{item.productId.title}</h6>
                                        {item.productId.stock && (
                                            <p className="small text-danger">باقي {item.productId.stock} وحدات</p>
                                        )}
                                        <img
                                            className="small text-muted"
                                            src='jumia-express.png'
                                            width="84px"
                                            alt="Jumia Express"
                                        />
                                    </div>
                                    <div className="text-end mx-3 small-sm">
                                        <h6>{item.priceAfterDiscount.toFixed(2)} جنيه</h6>
                                        {item.productId.price && item.productId.price !== item.priceAfterDiscount && (
                                            <small className="text-decoration-line-through text-muted">
                                                {item.productId.price.toFixed(2)} جنيه
                                            </small>
                                        )}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center px-3">
                                    <p
                                        className="remove-btn ms-2"
                                        style={{ color: "#f68b1e", cursor: "pointer" }}
                                        onClick={() => dispatch(removeItem(item._id))}
                                    >
                                        <i className="bi bi-trash f-15"></i> إزالة
                                    </p>

                                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2">
                                        <button
                                            className="btn btn-sm px-2 text-light fs-5 mx-3"
                                            style={{ backgroundColor: "#f68b1e" }}
                                            onClick={() => dispatch(updateItem({ itemId: item._id, quantity: item.quantity + 1 }))}
                                        >
                                            <i className="bi bi-plus-lg"></i>
                                        </button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button
                                            className="btn btn-sm px-2 text-light fs-5 mx-3"
                                            style={{ backgroundColor: "#f68b1e" }}
                                            onClick={() => {
                                                if (item.quantity > 1) {
                                                    dispatch(updateItem({ itemId: item._id, quantity: item.quantity - 1 }));
                                                } else {
                                                    dispatch(removeItem(item._id));
                                                }
                                            }}
                                        >
                                            <i className="bi bi-dash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="cart-side p-3">
                        <h6 style={{ fontSize: "14px" }}>ملخص سلة التسوق</h6>
                        <hr className="text-muted" />
                        <p style={{ fontSize: "14px" }}>عدد المنتجات ({cart.items.length})</p>
                        <hr className="text-muted" />
                        <div className="d-flex justify-space-between">
                            <h6 className="ms-5">الإجمالي</h6>
                            <h6 className="fw-bold fs-5">{totalAmount.toFixed(2)} جنيه</h6>
                        </div>

                        <hr className="text-muted" />
                        <div className="d-flex align-items-center mx-2 mx-lg-0 gap-2 und-line">
                            <i className="bi bi-check2-circle p-2 fs-3" style={{ color: "#4d861c" }}></i>
                            <span className="d-flex d-lg-block align-items-center gap-2">
                                <p className="f-10" style={{ fontSize: "10px" }}>
                                    منتجات جوميا اكسبريس مؤهلة للشحن المجاني
                                </p>
                                <img
                                    className="express-img"
                                    src="jumia-express.png"
                                    alt="Jumia Express"
                                    width="85px"
                                />
                            </span>
                        </div>
                        <hr className="text-muted" />
                        <button
                            className="btn w-100 text-light mt-3"
                            style={{ backgroundColor: "#f68b1e", borderRadius: "none", padding: "10px" }}
                        >
                            الإجمالي ({totalAmount.toFixed(2)} جنيه)
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartItem;
