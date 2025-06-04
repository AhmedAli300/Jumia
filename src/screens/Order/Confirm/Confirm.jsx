import React, { useState } from "react";
import "./Confirm.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUserCart } from "../../../store/Slice/cartSlice";
const Confirm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const location = useLocation();
  const order = location.state?.order;
  const dispatch = useDispatch();

  useEffect(() => {
    if (order) {
      console.log("Order ID:", order._id);
      console.log("Total Price:", order.totalPrice);
      // ممكن تستخدميه مثلاً لعرض رقم الطلب، أو لإرساله في API
    }
  }, [order]);

  const navigate = useNavigate();

  const orderId = order?._id;
  const totalPrice = order?.totalPrice;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    if (!orderId || !totalPrice) {
      setMessage("⚠️ معلومات الطلب ناقصة");
      return;
    }

    if (!stripe || !elements) {
      setMessage("Stripe غير جاهز حالياً. برجاء المحاولة لاحقًا.");
      return;
    }
    setLoading(true);
    setMessage("");

    try {
      const createRes = await axios.post(
        "http://127.0.0.1:3000/api/v1/payments/create",
        {
          orderId,
          paymentMethod: "CreditCard",
          totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const clientSecret = createRes.data.clientSecret;

      const cardElement = elements.getElement(CardElement);
      const confirmRes = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (confirmRes.error) {
        setMessage(confirmRes.error.message);
        setLoading(false);
        return;
      }

      if (confirmRes.paymentIntent.status === "succeeded") {
        await axios.post(
          "http://127.0.0.1:3000/api/v1/payments/confirm",
          { orderId },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        dispatch(clearUserCart());

        setMessage("✅ تم الدفع بنجاح");
        navigate("/orderdone", { state: { order } });
      } else {
        setMessage(
          `❌ فشل الدفع: ${confirmRes.paymentIntent?.status || "unknown"}`
        );
      }
    } catch (err) {
      setMessage(`❌ خطأ: ${err.response?.data?.message || err.message}`);
    }

    setLoading(false);
  };

  return (
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
        <button className="bttn" type="submit" disabled={!stripe || loading}>
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
  );
};

export default Confirm;
