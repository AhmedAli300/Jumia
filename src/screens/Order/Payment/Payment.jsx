import Confirm from "../Confirm/Confirm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./Payment.css";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const stripePromise = loadStripe(
  "pk_test_51Qv3slLmXnIE3kFCGyB1k9A8MzfYvQfMBsCzE6bExrBiOBuARluFIOtKYbXgiHpcmibaoqWbKRD5iyzQdNZYZxx200lvUFnyGa"
);

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const paymentMethod = location.state?.paymentMethod || "card"; // الافتراضي كرت
  const shippingPrice = 20;
  // const [paymentMethod, setPaymentMethod] = useState("card");
  const [modalShow1, setModalShow1] = React.useState(false);

//   const cartSize = useSelector((state) => state.cart.size);
  const cart = useSelector((state) => state.cart.cart);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            تفاصيل الطلب{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>محتوى السلة</h5>
            <div className="d-flex justify-content-start align-items-center">
              <ul className="list-unstyled">
                {cart.items.map((item) => (
                  <li key={item._id}>
                    <div className="d-flex flex-column">
                      <span>{item.product.name}</span>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>الكمية:({item.quantity})</span>
                        <span>السعر: {item.product.price}جنيه</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <h5>مصاريف الشحن</h5>
            <h5>{shippingPrice.toFixed(2)} جنيه</h5>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <h5>اجمالي الطلب</h5>
            <h5>{totalPrice.toFixed(2)} جنيه</h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
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
    // shippingAddress,
    // paymentMethod,
    totalPrice,
    // shippingMethod,
    // orderItems,
  } = order;
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-column">
        <div className="d-flex justify-content-between align-items-between mb-2">
          <h6>ملخص الطلب</h6>
          <h6>
            <a
              className="cursor-pointer"
              onClick={() => {
                setModalShow1(true);
              }}
            >
              التفاصيل
            </a>
            <MyVerticallyCenteredModal
              show={modalShow1}
              onHide={() => setModalShow1(false)}
            />
          </h6>
        </div>
        <div
          className="d-flex justify-content-between align-items-center mb-3 rounded-3 shadow p-2"
          style={{ height: "10vh", width: "26vw", backgroundColor: "white" }}
        >
          <h5>الاجمالي</h5>
          <h5>{totalPrice.toFixed(2)}</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Elements stripe={stripePromise}>
          <Confirm paymentMethod={paymentMethod} />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
