import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";
import "./PaymentMethod.css";
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
import Modal from "react-bootstrap/Modal";
import { IoMdWallet } from "react-icons/io";

function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          الدفع عند الاستلام (بطاقة بنكية - محفظة ذكية - كاش)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>يتم قبول الدفع بالجنيه المصري فقط</li>
          <li>
            يرجى توفير المبلغ المحدد فقط عند الدفع لاحتمالية عدم توافر فئات
            نقدية صغيرة مع مندوب التوصيل.
          </li>
          <li>يجب دفع ثمن المنتج قبل فتح الشحنة.</li>
          <li>
            فى حالة تم إرجاع المنتج طرق استرداد المبلغ المتاحة هي قسيمة استرداد،
            تحويل بريدى، تحويل بنكى.
          </li>
        </ul>
        <hr />
        <div className="d-flex justify-content-end align-items-center">
          <span className="me-4">تقبل : </span>
          <img
            className="mb-1"
            src="https://eg.jumia.is/cms/Hany_Logos/cash-colour33.png"
            alt=""
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          الدفع بالبطاقة{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          سيتم توجيهك إلى صفحة الدفع جوميا باى الخاصة بنا لإكمال عملية الشراء.
          تأكد من صحة تفاصيل الدفع الخاصة بك وأن لديك الأموال اللازمة.
        </p>
        <p>
          ادفع من خلال جوميا باى عن طريق بطاقات الائتمان والخصم والبطاقات
          المدفوعة مسبقًا أو بطاقات الائتمان الافتراضية
        </p>{" "}
        <ul>
          <li>
            يُرجى العلم أننا نقبل البطاقات الائتمانية أو بطاقات الخصم المحلية أو
            مسبقة الدفع أو البطاقات الأفتراضية من ماستركارد و فيزا
          </li>
          <li>قد لا تكون طريقة الدفع متاحة بناءً على البنك الذي تتعامل معه</li>
          <li>
            يُرجى التأكد من تفعيل البنك التابع لك لاستخدام بطاقتك الائتمانية أو
            بطاقة الخصم أو البطاقة مسبقة الدفع في المعاملات عبر الانترنت
          </li>
          <li>
            طريقة الدفع من خلال جوميا باى غير متاحه على بعض العروض و المنتجات
          </li>
          <li>
            لضمان أمان معاملتك، نقترح عليك الأتصال ببنكك لتفعيل خدمة التوثيق
            بالرقم السري المتغير (OTP)
          </li>
        </ul>
        <hr />
        <div className="flex justify-between items-center mb-3">
          <div
            className=""
            style={{
              backgroundColor: "rgb(235, 233, 233)",
              width: "fit-content",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            <IoMdWallet color="blue" className="m-2" />
            <span style={{ color: "blue", fontWeight: "bold" }}>
              رصيد حساب جوميا: 0.00 جنيه
            </span>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <span className="me-4">تقبل : </span>
          <img
            className="mb-1"
            src="https://eg.jumia.is/cms/Hany_Logos/CardsEG-1-mastercard-1left.jpg"
            alt=""
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const PaymentForm = () => {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  // const stripe = useStripe();
  // const elements = useElements();
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const shippingPrice = 20;
  const [paymentMethod, setPaymentMethod] = useState("card");

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
    // paymentMethod,
    totalPrice,
    // shippingMethod,
    // orderItems,
  } = order;

  const handleSubmit = () => {
    // هنا يمكنك إضافة منطق حفظ الطلب أو أي إجراء آخر تريده
    console.log("تم حفظ الطلب");
    navigate("/confirm", {
      state: { order, cart, paymentMethod },
    });
  };

  const firstImageUrl = cart?.items?.[0]?.product?.images?.[0]?.secure_url;
  console.log("First image URL:", firstImageUrl);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setMessage("");

  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:3000/api/v1/payment/create",
  //       {
  //         orderId: "YOUR_ORDER_ID",
  //         paymentMethod: "CreditCard",
  //         totalPrice: 2000,
  //       },
  //       orderService.authHeader()
  //     );

  //     const result = await stripe.confirmCardPayment(data.clientSecret, {
  //       payment_method: {
  //         card: elements.getElement(CardElement),
  //       },
  //     });

  //     if (result.error) {
  //       setMessage(result.error.message);
  //     } else if (result.paymentIntent.status === "succeeded") {
  //       await axios.post(
  //         "http://localhost:3000/api/v1/payment/confirm",
  //         { orderId: "YOUR_ORDER_ID" },
  //         {
  //           headers: {
  //             Authorization: `Bearer YOUR_USER_TOKEN`,
  //           },
  //         }
  //       );
  //       setMessage("✅ تم الدفع بنجاح");
  //     }
  //   } catch (error) {
  //     setMessage("❌ حدث خطأ أثناء المعالجة");
  //   }

  //   setLoading(false);
  // };

  return (
    <div className="order">
      {/* Header */}
      <div
        className="title"
        style={{ height: "90px", backgroundColor: "white", width: "100%" }}
      >
        <div style={{ fontSize: "80%" }}>اختيار طريقة الدفع</div>
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
              height: "10%",
              marginRight: "10%",
            }}
          >
            <div>
              <h6 style={{ margin: "15px" }} className="pt-3">
                2.تفاصيل التوصيل{" "}
              </h6>
              <hr />
              <div className="d-flex flex-row justify-content-between  gap-2">
                <div className="d-flex flex-column me-2 mb-2">
                  <span style={{ fontSize: "18px" }}>توصيل للمنزل</span>
                  <span>
                    يتم التوصيل يوم <strong>19 مايو</strong>
                  </span>
                </div>
                <CiDeliveryTruck size={"3%"} color="orange" className="ms-2" />
              </div>
            </div>
          </div>

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

            {/* Cash on Delivery Section */}
            <div className="border-b pb-4">
              <h3 className="font-bold text-gray-800 m-3">الدفع عند التسليم</h3>
              <div>
                <label className="flex items-center cursor-pointer">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={() => setPaymentMethod("cash")}
                        className="m-3 h-5 w-5 text-orange-500"
                      />
                      <span>
                        الدفع عند الاستلام (بطاقة بنكية - محفظة ذكية - كاش)
                      </span>
                    </div>
                    <img src="https://eg.jumia.is/cms/Cash.png" alt="" />
                  </div>
                </label>
              </div>

              {paymentMethod === "cash" && (
                <div className="border rounded p-2 text-sm text-gray-700 m-3">
                  <div>- يتم قبول الدفع بالجنيه المصري فقط</div>
                  <div>
                    - يرجى توفير المبلغ المحدد فقط عند الدفع لتفادي عدم توفر
                    فئات نقدية صغيرة مع مندوب التوصيل...
                  </div>
                  <div
                    className="mt-1"
                    style={{ cursor: "pointer", color: "blue" }}
                  >
                    <a onClick={() => setModalShow1(true)}>تفاصيل</a>
                    <MyVerticallyCenteredModal1
                      show={modalShow1}
                      onHide={() => setModalShow1(false)}
                    />
                  </div>
                  <hr />
                  <div className="d-flex justify-content-end align-items-center">
                    <span className="mx-1">تقبل</span>
                    <img
                      className="mb-1"
                      src="https://eg.jumia.is/cms/Hany_Logos/cash-colour33.png"
                      alt=""
                    />
                  </div>
                </div>
              )}
            </div>
            <hr />
            {/* Card Payment Section */}
            <div className="p-4 rounded">
              <h3 className="font-bold text-gray-800 m-3">الدفع بالبطاقة</h3>
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"></div>
                <div className="flex-1 mx-2"></div>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="m-3 h-5 w-5 text-orange-500"
                  />
                  <span className="mr-2 text-sm text-gray-700 ">
                    الدفع بالبطاقة
                  </span>
                </label>
              </div>

              {paymentMethod === "card" && (
                <div className="border rounded-md p-4 text-sm text-gray-700">
                  <div className="flex justify-between items-center mb-3">
                    <div
                      className=""
                      style={{
                        backgroundColor: "rgb(235, 233, 233)",
                        width: "fit-content",
                        padding: "5px",
                        borderRadius: "5px",
                      }}
                    >
                      <IoMdWallet color="blue" className="m-2" />
                      <span style={{ color: "blue", fontWeight: "bold" }}>
                        رصيد حساب جوميا: 0.00 جنيه
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    سيتم توجيهك إلى صفحة الدفع جوميا باي لإكمال عملية الشراء.
                    تأكد من صحة تفاصيل الدفع الخاصة بك وأن لديك الأموال الكافية
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    إدفع من خلال جوميا باي عن طريق بطاقات الائتمان والخصم
                    والبطاقات المدفوعة مسبقًا وبطاقات الائتمان الافتراضية...
                  </p>
                  <div
                    className="mt-1"
                    style={{ cursor: "pointer", color: "blue" }}
                  >
                    <a onClick={() => setModalShow2(true)}>تفاصيل</a>
                    <MyVerticallyCenteredModal2
                      show={modalShow2}
                      onHide={() => setModalShow2(false)}
                    />
                  </div>
                  <hr />
                  <div className="d-flex justify-content-end align-items-center">
                    <span className="me-4">تقبل : </span>
                    <img
                      className="mb-1"
                      src="https://eg.jumia.is/cms/Hany_Logos/CardsEG-1-mastercard-1left.jpg"
                      alt=""
                    />
                  </div>
                </div>
              )}
            </div>
            <hr />
            <div className="d-flex flex-row justify-content-end align-items-center m-2">
              <Button
                variant="contained"
                style={{ backgroundColor: "orange" }}
                onClick={handleSubmit}
                className="m-2"
              >
                تأكيد تفاصيل الطلب
              </Button>
            </div>
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
      {/*<div className="payment-container">
        <div className="payment-box">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h2 className="payment-title"> البطاقة البنكية</h2>
            <div className="payment-icons d-flex justify-content-center align-items-center mb-3">
              <img
                src="https://content-pay.jumia.com.eg/image/creditCard/creditCard/Visa-entry-left.png"
                alt="Visa"
                className="payment-icon"
              />
              <img
                src="https://content-pay.jumia.com.eg/image/creditCard/creditCard/Meeza-entry-left.png"
                alt="Meeza"
                className="payment-icon"
              />
              <img
                src="https://content-pay.jumia.com.eg/image/creditCard/creditCard/Mastercard-entry-left.png"
                alt="Mastercard"
                className="payment-icon"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="card-element">
              <CardElement />
            </div>
            <button
              className="bttn"
              type="submit"
              disabled={!stripe || loading}
            >
              {loading ? "جارٍ المعالجة..." : "ادفع الآن"}
            </button>
            {message && (
              <div
                className={`message ${
                  message.includes("✅") ? "success" : "error"
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </div>*/}
    </div>
  );
};

export default PaymentForm;
