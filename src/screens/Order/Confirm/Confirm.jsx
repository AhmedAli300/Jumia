import React from "react";
import { useState } from "react";
import "./Confirm.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
const Confirm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setMessage(error.message);
    } else {
      // ابعتي paymentMethod.id للباك إند
      setMessage("✅ تم الدفع بنجاح");
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
