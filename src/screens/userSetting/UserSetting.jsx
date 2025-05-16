import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './userSeeting.css'
const UserSetting = () => {
  return (
    <div dir="rtl" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
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
      { icon: "bi-box-arrow-right", label: "تسجيل الخروج", logout: true },
    ].map(({ icon, label, active, logout }, idx) => {
      const isSectionBorder = label === "إدارة الحساب" || label === "تسجيل الخروج";
      return (
        <li
          key={idx}
          className={`
            sidebar-item
            d-flex 
            align-items-center 
            ${logout ? "justify-content-center" : ""}
            mt-2
            py-2 
            px-2 
            ${isSectionBorder ? "border-top" : ""}
          `}
          style={{
            cursor: "pointer",
            transition: "background-color .2s",
            fontSize: "17px",
            color: logout ? "#f8982d" : "#000",
            backgroundColor: active ? "#d4d4d6" : "transparent",
          }}
          onMouseEnter={e => {
            if (!active) e.currentTarget.style.backgroundColor = "#d4d4d6";
          }}
          onMouseLeave={e => {
            if (!active) e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          {!logout && icon && (
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

            <div className="shadow bg-white rounded p-4">
              <div className="row g-4">
              
                            <h5 className="fw-bold mb-4 text-dark">نظرة عامة حول الحساب</h5>

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="fw-bold border-bottom pb-2 mb-3">تفاصيل الحساب</h6>
                    <p className="mb-1">aliaa ambarak</p>
                    <p className="mb-0">alyamobarak71@gmail.com</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="fw-bold border-bottom pb-2 mb-3">جهات الاتصال</h6>
                    <p className="mb-1"><strong>العنوان الافتراضي للشحن:</strong></p>
                    <p className="mb-1">لا يوجد عنوان إفتراضي للشحن</p>
                    <a href="#" className="text-warning text-decoration-none">إضافة عنوان إفتراضي</a>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="fw-bold border-bottom pb-2 mb-3">رصيد حساب جوميا</h6>
                    <p className="mb-0">رصيد حساب جوميا: <strong>0.00 جنيه</strong></p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h6 className="fw-bold border-bottom pb-2 mb-3">تفضيلات النشرة الإخبارية</h6>
                    <p className="mb-1">قم بإدارة اتصالات بريدك الإلكتروني للبقاء على اطلاع بآخر الأخبار والعروض.</p>
                    <a href="#" className="text-warning text-decoration-none">تعديل تفضيلات النشرة الإخبارية</a>
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
