import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderDone.css";
import { MdOutlineDone } from "react-icons/md";
import { useLocation } from "react-router-dom";

const OrderDone = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const navig = useNavigate();
  const location = useLocation();
  const order = location.state?.order;
  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/v1/orders/my-orders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await res.json();
      const orders = data.data.orders || [];

      // Navigate to MyOrders page with the orders
      navigate("/myorders", { state: { orders } });
    } catch (err) {
      console.error("خطأ أثناء جلب الطلبات:", err);
      alert("حدث خطأ أثناء تحميل الطلبات.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="order d-flex justify-content-center align-items-center">
      <div
        className="d-flex flex-column justify-content-center align-items-center m-3 p-2"
        style={{
          width: "70vw",
          backgroundColor: "white",
          borderRadius: "10px",
          height: "50vh",
        }}
      >
        <div
          className="d-flex flex-column justify-content-center align-items-center border rounded-circle text-white p-3 m-4"
          style={{
            backgroundColor: "rgb(235, 233, 233)",
            width: "100px",
            height: "100px",
          }}
        >
          <MdOutlineDone size={60} color="green" />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center ">
          <p className="fs-2">شكرًا لطلبك من جوميا</p>
          <p>
            <strong>رقم الطلب</strong>
            <span className="text-success"> {order.orderNumber}</span>
          </p>
        </div>
        <button
          onClick={() => {
            navig("/");
          }}
          className="btn btn-success mt-3"
        >
          العودة للصفحة الرئيسية
        </button>
        <button
          className="btn btn-success mt-3"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? "جاري التحميل..." : "عرض طلباتي"}
        </button>
      </div>
    </div>
  );
};

export default OrderDone;
