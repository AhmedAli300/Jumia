import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="container-fluid main">
                <div className="row">
                    <div className="top-bar">
                        <img src="/imgs02.png" className="img-fluid" alt="offer" />
                    </div>

                    <div className="info-bar">
                        <div className="icon">
                            <img src="/imgs07.png" alt="" width="15px" height="15px" />
                            <a href="#"> بيع علي جوميا</a>
                        </div>
                        <div className="cent">
                            <img
                                src="https://my.jumia.com.eg/pictures/myjumia/myjumia-bottom-logo.png"
                                alt=""
                                width="60px"
                            />
                            <p className="pay">
                                PAY <i className="bi bi-shield-shaded"></i>
                            </p>
                        </div>
                        <div className="lang">
                            <p className="fpara" style={{ opacity: 0.3 }}>
                                <img src="/imgs1 (1).svg" alt="enlang" width="20px" height="20px" /> English
                            </p>
                            <p >
                                <img src="/imgs1 (2).svg" alt="enlang" width="20px" height="20px" /> عربي
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="header navbar navbar-expand-lg navbar-light" style={{ paddingRight: '120px' }}>
                <div className="container">
                    <div className="responsve" style={{ marginLeft: '80px' }}>
                        <span className="text-dark fs-4">☰</span>
                        <img
                            src="https://my.jumia.com.eg/pictures/myjumia/myjumia-bottom-logo.png"
                            alt=""
                            width="130px"
                            style={{ paddingRight: '20px' }}
                        />
                    </div>

                    <form className="d-flex search-bar mx-auto align-items-center" style={{ width: '100%', maxWidth: '550px' }}>
                        <i className="bi bi-search search-icon ssicon" ></i>
                        <input
                            className="form-control px-5"
                            type="search"
                            placeholder="البحث عن منتجات، العلامات التجارية والأقسام"
                            aria-label="Search"
                            style={{ border: '1px solid #ccc', padding: '10px 15px' }}
                        />
                        <button
                            className="btn btn-search ms-2 changecolor"
                            type="submit"
                            style={{
                                backgroundColor: '#fe9a24',
                                color: 'white',
                                fontWeight: 'bold',
                                marginRight: '10px',
                                padding: '10px 15px',
                            }}
                        >
                            البحث
                        </button>
                    </form>

                    <div style={{ paddingLeft: '120px' }}>
                        <div className="d-flex align-items-center">
                            <div className="dropdown mx-2 hov">
                                <a
                                    href="#"
                                    className="text-dark dropicon text-decoration-none hov "
                                    id="loginDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-person fs-5 mx-1 lefticon"></i>
                                    <span className="btn-log">تسجيل الدخول</span>
                                    <i className="bi bi-chevron-down btn-log" style={{ fontSize: '11px', marginRight: '5px', fontWeight: 'bold' }}></i>
                                </a>
                                <ul className="dropdown-menu custom-dropdown text-end" aria-labelledby="loginDropdown">
                                    <li >
                                        <a className="dropdown-item " >
                                            <button className="chat-button" onClick={() => navigate('/login')}> تسجيل الدخول </button>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" >
                                            <i className="bi bi-person fs-5 mx-1"></i> الحساب
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" >
                                            <i className="bi bi-cassette-fill mx-1"></i> الطلبات
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item">
                                            <i className="bi bi-heart mx-1"></i> المنتجات المحفوظة
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="dropdown mx-2 hov move">
                                <a
                                    href="#"
                                    className="text-dark dropicon text-decoration-none hov"
                                    id="helpDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-question-circle fs-5 mx-1"></i> المساعدة

                                    <i className="bi bi-chevron-down" style={{ fontSize: '11px', marginRight: '5px', fontWeight: 'bold' }}></i>
                                </a>
                                <ul className="dropdown-menu custom-dropdown text-end">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            مركز المساعدة
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            المساعدة في طلبي
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            إلغاء طلبك
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            الإرجاع والاسترداد
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            طرق الدفع
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <button className="chat-button">
                                            <i className="bi bi-chat-left-dots-fill mx-2"></i> تحدث معنا
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <a className="text-dark text-decoration-none hov" onClick={() => navigate('/cart')}>
                                <i className="bi bi-cart fs-5 mx-1"></i>
                                <span className="btn-log">سلة التسوق </span>

                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};


export default Navbar;