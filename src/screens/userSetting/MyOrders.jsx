import React from "react";
import { useLocation } from "react-router-dom";

const MyOrders = () => {
  const location = useLocation();
  const orders = location.state?.orders || [];

  if (orders.length === 0) return <p>لا توجد طلبات حالياً.</p>;

  return (
    <div>
      <h4 className="fw-bold border-bottom pb-2 mb-3">الطلبات</h4>
      {orders.map((order) => (
        <div key={order._id} className="border p-3 rounded mb-3">
          <p><strong>رقم الطلب:</strong> {order.orderNumber || order._id}</p>
          <p><strong>الحالة:</strong> {order.orderStatus}</p>
          <p><strong>المجموع:</strong> {order.totalPrice?.toFixed(2)} جنيه</p>
          <p>
            <strong>تاريخ:</strong>{" "}
            {new Date(order.createdAt).toLocaleString("ar-EG")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
