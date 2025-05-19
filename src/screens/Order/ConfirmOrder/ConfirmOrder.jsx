import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";
// import orderService from "../../../services/orderService";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { BsTicketPerforated } from "react-icons/bs";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { SiSpringsecurity } from "react-icons/si";
import { CiDeliveryTruck } from "react-icons/ci";
import "./ConfirmOrder.css";
import { GoChevronLeft } from "react-icons/go";
export const PaymentForm = () => {
  const location = useLocation();
  const [order, setOrder] = useState(null);
  const shippingPrice = 20;
  const { paymentMethod } = location.state || {};
  const navigate = useNavigate();
  console.log("طريقة الدفع:", paymentMethod);
  const cartSize = useSelector((state) => state.cart.size);
  const cart = useSelector((state) => state.cart.cart);
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
    totalPrice,
  } = order;
  const handleConfirm = () => {
    if (paymentMethod === "cash") {
      navigate("/orderdone", {
        state: { order, cart, paymentMethod },
      });
    } else if (paymentMethod === "card") {
      navigate("/payment2", {
        state: { order, cart, paymentMethod },
      });
    }
  };
  return (
    <div className="order">
      {/* Header */}
      <div
        className="title"
        style={{ height: "90px", backgroundColor: "white", width: "100%" }}
      >
        <div style={{ fontSize: "80%" }}>إجراء الطلبية</div>
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

      <div className="d-flex flex-row justify-content-between align-items-start">
        <div
          className="rounded mx-2"
          style={{
            backgroundColor: "rgb(235, 233, 233)",
            width: "60%",
          }}
        >
          {/* Order Content */}
          <div
            className="rounded"
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "10%",
              marginRight: "10%",
            }}
          >
            <div>
              <h6 style={{ margin: "15px" }} className="pt-3">
                1.عنوان العميل
              </h6>
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
            </div>
          </div>

          {/* Delivery & Payment Sections */}
          <div
            className="rounded"
            style={{
              backgroundColor: "white",
              width: "100%",
              marginRight: "10%",
            }}
          >
            <h6 style={{ margin: "15px" }} className="pt-3">
              2.طريقة التوصيل
            </h6>
            <hr />
            <div className="d-flex flex-row justify-content-between  gap-2">
              <div className="d-flex flex-column me-2">
                <span>توصيل للمنزل</span>
                <span>
                  يتم التوصيل يوم <strong>19 مايو</strong>
                </span>
              </div>
              <CiDeliveryTruck size={"3%"} color="orange" className="ms-2" />
            </div>

            <div style={{ border: "1px solid lightgray" }} className="m-2">
              <div className="d-flex flex-row justify-content-between align-items-center p-2">
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
                <div>
                  <p>
                    تغيير <GoChevronLeft />
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-between align-items-center m-2">
              <p className="m-2">طَرد 1/1</p>
              <p className="m-2">بواسطة جوميا</p>
            </div>

            <div style={{ border: "1px solid lightgray" }} className="m-2 p-2">
              <div className="d-flex flex-column">
                <div className="d-flex flex-column">
                  <span>
                    {" "}
                    <strong>توصيل للمنزل</strong>
                  </span>
                  <span>
                    يتم التوصيل يوم <strong>20 مايو</strong>
                  </span>
                </div>
                <hr />
                <div className="d-flex justify-content-start align-items-center">
                  <ul className="list-unstyled">
                    {cart.items.map((item) => (
                      <li key={item._id}>
                        <img
                          src={item.product.images[0].secure_url}
                          alt={item.product.name}
                          style={{ width: "50px", height: "50px" }}
                        />
                        <div className="d-flex flex-column">
                          <span className="mx-2">{item.product.name}</span>
                          <span className="mx-2">الكمية:({item.quantity})</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-center align-items-center m-2">
              <Button onClick={() => navigate("/cart")} color="primary">
                تغيير سلة التسوق
              </Button>
            </div>
          </div>

          {/* Payment Section */}
          <div
            className="rounded"
            style={{
              backgroundColor: "white",
              width: "100%",
              marginRight: "10%",
            }}
          >
            <h6 style={{ margin: "15px" }} className="pt-3">
              3.طريقة الدفع
            </h6>
            <hr />
            {paymentMethod === "cash" && (
              <div className="d-flex flex-row justify-content-between align-items-center m-2">
                <p className="m-2 fs-3">الدفع عند الاستلام</p>
                <SiSpringsecurity size={"3%"} color="orange" className="ms-2" />
              </div>
            )}
            {paymentMethod === "card" && (
              <div className="d-flex flex-row justify-content-between align-items-center m-2">
                <p className="m-2 fs-3">بطاقة ائتمانية</p>
                <SiSpringsecurity size={"3%"} color="orange" className="ms-2" />
              </div>
            )}
          </div>

          <a href="/products" style={{ marginRight: "10%" }}>
            <IoIosArrowForward />
            العودة الى المشتريات
          </a>
        </div>

        {/* Order Summary */}
        <div
          className="rounded m-4"
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
            onClick={handleConfirm}
            variant="contained"
            style={{
              width: "90%",
              margin: "5%",
              color: "white",
              backgroundColor: "orange",
              padding: "4%",
            }}
          >
            تأكيد الطلبية
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
