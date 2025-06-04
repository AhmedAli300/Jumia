import React from "react";
import { useLocation } from "react-router-dom";

const MyOrders = () => {
  const location = useLocation();
  const orders = location.state?.orders || [];

  if (orders.length === 0) return <p>لا توجد طلبات حالياً.</p>;

  return (
    <div>
      <h4 className="m-3">طلباتي</h4>
      {orders.map((order) => (
        <div key={order._id} className="border p-3 mb-3 rounded">
          <p>رقم الطلب: {order.orderNumber}</p>
          <p>الحالة: {order.orderStatus}</p>
          <p>المبلغ: {order.totalPrice?.toFixed(2)} جنيه</p>
          <p>التاريخ: {new Date(order.createdAt).toLocaleString("ar-EG")}</p>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
