import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./usersetting.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/Slice/authSlice";
import { useNavigate } from "react-router-dom";

const UserSetting = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div dir="rtl" style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <div className="container py-4 ">
        <div className="row gx-4 m-4">
          <div className="col-md-3 bg-white py-3 shadow-sm">
            <ul className="list-unstyled small p-0 mt-0 ">
              {[
                { icon: "bi-person", label: "حسابي على جوميا", active: true },
                { icon: "bi-bag", label: "الطلبات" },
                { icon: "bi-envelope-open", label: "صندوق الرسائل الواردة" },
                { icon: "bi-star", label: "التقييمات والتعليقات" },
                { icon: "bi-ticket", label: "قسائم الشراء" },
                { icon: "bi-heart", label: "المفضلة" },
                { icon: "bi-shop", label: "البائعون الذين تتابعهم" },
                { icon: "bi-eye", label: "المنتجات التي تمت مشاهدتها مؤخرا" },
                { label: "إدارة الحساب" },
                { label: "جهات الاتصال" },
                { label: "تفضيلات النشرة الإخبارية" },
                { label: "غلق الحساب" },
                {
                  icon: "bi-box-arrow-right",
                  label: "تسجيل الخروج",
                  isLogout: true,
                },
              ].map(({ icon, label, active, isLogout }, idx) => {
                const isSectionBorder =
                  label === "إدارة الحساب" || label === "تسجيل الخروج";
                return (
                  <li
                    key={idx}
                    className={`
          sidebar-item
          d-flex 
          align-items-center 
          ${isLogout ? "justify-content-center" : ""}
          mt-2
          py-2 
          px-2 
          ${isSectionBorder ? "border-top" : ""}
        `}
                    style={{
                      cursor: "pointer",
                      transition: "background-color .2s",
                      fontSize: "17px",
                      color: isLogout ? "#f8982d" : "#000",
                      backgroundColor: active ? "#d4d4d6" : "transparent",
                    }}
                    onClick={async () => {
                      if (label === "تسجيل الخروج") {
                        dispatch(logout());
                        navigate("/");
                      } else if (label === "إدارة الحساب") {
                        navigate("/acount");
                      } else if (label === "الطلبات") {
                        try {
                          const res = await fetch(
                            "http://localhost:3000/api/v1/orders/my-orders",
                            {
                              headers: {
                                Authorization: `Bearer ${localStorage.getItem(
                                  "token"
                                )}`,
                              },
                            }
                          );

                          if (!res.ok)
                            throw new Error("فشل في الاتصال بالخادم");

                          const data = await res.json();
                          const orders = data.data.orders || [];

                          navigate("/myorders", { state: { orders } });
                        } catch (err) {
                          console.error("فشل في جلب الطلبات", err);
                          alert("حصل خطأ أثناء تحميل الطلبات.");
                        }
                      }
                    }}
                    onMouseEnter={(e) => {
                      if (!active)
                        e.currentTarget.style.backgroundColor = "#d4d4d6";
                    }}
                    onMouseLeave={(e) => {
                      if (!active)
                        e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    {!isLogout && icon && (
                      <i
                        className={`bi ${icon} me-0 gap-2 mx-2`}
                        style={{ fontSize: "17px", color: "#000" }}
                      />
                    )}
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-md-9">
            <div className="shadow bg-white rounded p-4 h-100">
              <div className="row g-4 ">
                <h4 className="fw-bold mb-0 text-dark border-bottom py-2 ">
                  نظرة عامة حول الحساب
                </h4>

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="fw-bold border-bottom pb-3 mb-3">
                      تفاصيل الحساب
                    </h6>
                    <p className="mb-1">
                      {user?.name || "اسم المستخدم غير متوفر"}
                    </p>
                    <p className="mb-5 text-muted">
                      {user?.email || "البريد الإلكتروني غير متوفر"}
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="fw-bold border-bottom pb-2 mb-3">
                      جهات الاتصال
                      <svg
                        viewBox="0 0 24 24"
                        onClick={() => {
                          navigate("/form");
                        }}
                        width="24"
                        height="24"
                        fill="#f8982d"
                        className="pen"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.41L18.37 3.29a1.003 1.003 0 0 0-1.41 0L15.13 5.12l3.75 3.75 1.83-1.83z" />
                      </svg>
                    </h6>
                    <p className="mb-1">
                      <strong>العنوان الافتراضي للشحن:</strong>
                    </p>
                    <p className="mb-0 text-muted">
                      {user?.name || "اسم المستخدم غير متوفر"}
                    </p>
                    <p className="mb-0 text-muted">
                      {user?.address?.city || "غير متوفر"}
                    </p>
                    <p className="mb-0 text-muted">
                      {user?.address?.governorate || "غير متوفر"}
                    </p>
                    <p className="mb-0 text-muted">
                      {user?.address?.street || "غير متوفر"}
                    </p>
                    <p className="mb-0 text-muted">
                      2{user?.mobilePhone || " غير متوفر"}+
                    </p>
                  </div>
                </div>

                <div className="col-md-6 ">
                  <div className="border rounded p-3 h-100 ">
                    <h6 className="fw-bold border-bottom pb-2 mb-3">
                      رصيد حساب جوميا
                    </h6>
                    <p className="mb-5 svgg">
                      <svg
                        className="mmsvg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="20"
                        height="20"
                        fill="#264996"
                      >
                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                      رصيد حساب جوميا: <strong>0.00 جنيه</strong>
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="fw-bold border-bottom pb-2 mb-3">
                      تفضيلات النشرة الإخبارية
                    </h6>
                    <p className="mb-3">
                      قم بإدارة اتصالات بريدك الإلكتروني للبقاء على اطلاع بآخر
                      الأخبار والعروض.
                    </p>
                    <a
                      href="#"
                      className="textWarn text-decoration-none mb-5 fw-bold"
                    >
                      تعديل تفضيلات النشرة الإخبارية
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
