import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "./PaymentMethod.css";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/payment/create",
        {
          orderId: "YOUR_ORDER_ID",
          paymentMethod: "CreditCard",
          totalPrice: 2000,
        },
        {
          headers: {
            Authorization: `Bearer YOUR_USER_TOKEN`,
          },
        }
      );

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setMessage(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        await axios.post(
          "http://localhost:3000/api/v1/payment/confirm",
          { orderId: "YOUR_ORDER_ID" },
          {
            headers: {
              Authorization: `Bearer YOUR_USER_TOKEN`,
            },
          }
        );
        setMessage("✅ تم الدفع بنجاح");
      }
    } catch (error) {
      setMessage("❌ حدث خطأ أثناء المعالجة");
    }

    setLoading(false);
  };

  return (
    <div className="payment-container">
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
          <button type="submit" disabled={!stripe || loading}>
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
    </div>
  );
};

export default PaymentForm;
