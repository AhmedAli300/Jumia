import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <section className="header-lg bg-white d-none d-md-flex align-items-center">
            <div className="d-flex col-12 align-items-center gap-3 p-2">
                <div className="d-flex col-2 align-items-center gap-2">
                    <i className="fa-solid fa-bars fs-4"></i>
                    <Link to="/public/home">
                        <img src="/assets/images/JumiaLogo.png" alt="Jumia Logo" height="30" />
                    </Link>
                </div>

                <div className="col-5 d-flex align-items-center gap-2">
                    <input className="form-control" type="text" placeholder="البحث عن منتجات" />
                    <button className="btn btn-dark" >بحث</button>
                </div>

                <div className="col-5 d-flex align-items-center justify-content-around">
                    <div className="d-flex align-items-center gap-2">

                        <i className="bi-person"></i>
                        <span>تسجيل الدخول</span>
                    </div>

                    <div>
                        <i className="bi bi-question-circle fs-4"></i> <span>المساعدة</span>
                    </div>

                    <Link to="/public/cart" className="d-flex align-items-center gap-1">
                        <i className="bi bi-cart fs-4 position-relative"></i>
                        <span>سلة التسوق</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
