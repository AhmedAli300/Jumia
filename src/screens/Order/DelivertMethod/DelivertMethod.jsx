import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";
import { SiSpringsecurity } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { BsTicketPerforated } from "react-icons/bs";
import Button from "@mui/material/Button";
import "./DelivertMethod.css";
import { CiDeliveryTruck } from "react-icons/ci";
const DeliveryMethod = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const shippingPrice = 20;

  const cartSize = useSelector((state) => state.cart.size);
  const cart = useSelector((state) => state.cart.cart);

  // جلب الطلب من state أو من localStorage
  useEffect(() => {
    const stateOrder = location.state?.order;
    const storedOrder = localStorage.getItem("latestOrder");

    if (stateOrder) {
      setOrder(stateOrder);
    } else if (storedOrder) {
      try {
        setOrder(JSON.parse(storedOrder));
      } catch (error) {
        console.error("فشل في قراءة الطلب من localStorage", error);
        navigate("/cart");
      }
    } else {
      navigate("/cart");
    }
  }, [location.state, navigate]);

  if (!order) return <p>جارٍ التوجيه...</p>;

  const {
    shippingAddress,
    paymentMethod,
    totalPrice,
    shippingMethod,
    orderItems,
  } = order;

  return (
    <div className="order">
      {/* Header */}
      <div
        className="title"
        style={{ height: "90px", backgroundColor: "white", width: "100%" }}
      >
        <div style={{ fontSize: "80%" }}>اختيار طريقة التوصيل</div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <MdOutlinePermPhoneMsg color="gray" size={"25px"} />
            <div
              style={{
                fontSize: "15px",
                marginRight: "10px",
                color: "gray",
                direction: "rtl",
              }}
            >
              <div>تحتاج مساعدة ؟</div>
              <div>
                <a style={{ color: "blue" }} href="#">
                  اتصل بنا
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <RiArrowGoBackLine color="gray" size={"25px"} />
            <div
              style={{
                fontSize: "15px",
                marginRight: "10px",
                color: "gray",
                direction: "rtl",
              }}
            >
              <div>عملية إرجاع</div>
              <div>سهلة</div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <SiSpringsecurity color="gray" size={"25px"} />
            <div
              style={{
                fontSize: "13px",
                marginRight: "10px",
                color: "gray",
                direction: "rtl",
              }}
            >
              <div>مدفوعات</div>
              <div>آمنة</div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Content */}
      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <div
          className="mx-3 rounded"
          style={{ backgroundColor: "white", width: "60%", height: "10%" }}
        >
          <div>
            <h6 style={{ margin: "15px" }}>1.عنوان العميل</h6>
            <hr />

            <h5 className="me-2">{shippingAddress.fullName}</h5>
            <div className="d-flex flex-row justify-content-start align-items-center gap-2">
              <p className="me-2">
                {shippingAddress.city}, {shippingAddress.region},
                {shippingAddress.address}
              </p>
              <p>|+20 {shippingAddress.phone}|</p>
              <p>
                {shippingAddress.city}-{shippingAddress.region}
              </p>
            </div>

            {/* <div>
            <h2>مراجعة الطلب</h2>
            <p>
              <strong>الاسم:</strong> {shippingAddress.fullName}
            </p>
            <p>
              <strong>رقم الهاتف:</strong> {shippingAddress.phone}
            </p>
            <p>
              <strong>العنوان:</strong> {shippingAddress.address},{" "}
              {shippingAddress.city}, {shippingAddress.region}
            </p>
            <p>
              <strong>طريقة الشحن:</strong> {shippingMethod}
            </p>
            <p>
              <strong>طريقة الدفع:</strong> {paymentMethod}
            </p>
            <h3>المنتجات</h3>
            <ul>
              {orderItems.map((item) => (
                <li key={item._id}>
                  منتج: {item.product} | الكمية: {item.quantity} | السعر:{" "}
                  {item.price} جنيه
                </li>
              ))}
            </ul>
            <h3>الإجمالي: {totalPrice} جنيه</h3>
          </div> */}
          </div>
        </div>

        {/* Order Summary */}
        <div
          className="rounded"
          style={{ backgroundColor: "white", width: "20%", direction: "rtl" }}
        >
          <h6 style={{ margin: "6px" }}>ملخص الطلبية</h6>
          <hr className="m-0" />
          <div
            className="mx-2"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>عدد المنتجات({cartSize})</p>
            <p>({cart?.cartTotal?.toFixed(2)} جنيه)</p>
          </div>
          <div
            className="mx-2"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>التوصيل</p>
            <p>{shippingPrice.toFixed(2)} جنيه</p>
          </div>
          <hr className="m-0" />
          <div
            className="mx-2"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>الاجمالي</p>
            <p>({totalPrice.toFixed(2)} جنيه)</p>
          </div>
          <hr className="m-0" />
          <p className="m-1" style={{ fontSize: "13px" }}>
            <BsTicketPerforated className="m-1" />
            ستتمكن من إضافة قسيمة الشراء عند اختيار طريقة الدفع الخاصة بك.
          </p>
          <Button
            variant="contained"
            disabled
            style={{
              width: "90%",
              margin: "5%",
              color: "white",
              backgroundColor: "gray",
              padding: "4%",
            }}
          >
            تأكيد الطلبية
          </Button>
        </div>
      </div>

      {/* Delivery & Payment Sections */}
      <div
        className="rounded"
        style={{ backgroundColor: "white", width: "60%", marginRight: "10%" }}
      >
        <h6 style={{ margin: "15px" }} className="pt-3">
          2.طريقة التوصيل
        </h6>
        <hr />
        <div className="d-flex flex-row justify-content-between  gap-2">
          <div style={{ margin: "2%" }}>
            <p>توصيل للمنزل</p>
            <span>
              يتم التوصيل يوم <strong>19 مايو</strong>
            </span>
          </div>
          <CiDeliveryTruck size={"3%"} color="orange" className="ms-2" />
        </div>
        <div style={{ border: "1px solid lightgray", margin: "2%" }}>
          <div
            className="d-flex flex-row justify-content-between align-items-center"
            style={{ padding: "2%" }}
          >
            <div className="d-flex flex-column">
              <span
                style={{
                  backgroundColor: "rgb(236, 236, 236)",
                  width: "fit-content",
                  padding: "2%",
                  color: "green",
                  borderRadius: "5px",
                }}
              >
                تقدر توفر 20.00 جنيه
              </span>
              <span>إختار محطة الاستلام واحصل على مصاريف شحن مجانية</span>
              <span>يتم التوصيل يوم ١٩ مايو</span>
            </div>
          </div>
        </div>
        <p style={{ margin: "2%" }}>طَرد 1/1</p>
        <div style={{ border: "1px solid lightgray", margin: "2%" }}>
          <div
            className="d-flex flex-row justify-content-between align-items-center"
            style={{ padding: "2%" }}
          >
            <div>
              <p>توصيل عادي</p>
              <span>التوصيل في 3-5 أيام</span>
            </div>
            <div>
              <p>10 جنيه</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="rounded"
        style={{ backgroundColor: "white", width: "60%", marginRight: "10%" }}
      >
        <h6 style={{ margin: "15px", color: "gray", padding: "1.5%" }}>
          3.طريقة الدفع
        </h6>
      </div>

      <a href="/products" style={{ marginRight: "10%" }}>
        <IoIosArrowForward />
        العودة الى المشتريات
      </a>
    </div>
  );
};

export default DeliveryMethod;
