import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const EmptyCart = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <>
            {/* {product.length === 0 && ( */}
            <div className="text-center bg-white d-block cnt b-4 p-5 m2-4 empty-cart" >
                <img
                    src="https://www.jumia.com.eg/assets_he/images/cart.668e6453.svg"
                    alt="السلة فارغة"
                    className="empty-cart-image"
                />
                <p className="mt-3 b " style={{ fontSize: "18px" }}>عربة التسوق فارغة</p>
                <span className="f-1 d-block my-3 tttt" style={{ fontSize: "16px" }}>
                    تصفح الفئات واكتشف أفضل عروضنا!
                </span>
                <button onClick={handleClick}
                    className="main-btn d-flex mt-3 m-auto text-center"
                    style={{ backgroundColor: ' #f68b1e', padding: '10px 20px', border: 'none', color: 'white' }}
                >
                    بدء التسوق
                </button>

            </div>
            {/* )} */}
        </>
    );
};

export default EmptyCart;
