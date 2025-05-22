import React from "react";
const MyOrders = () => {
  const [orders, setOrders] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/orders/myOrders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setOrders(data.orders || []);
      } catch (err) {
        console.error("Error fetching orders", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <p>جارٍ تحميل الطلبات...</p>;

  if (orders.length === 0) return <p>لا توجد طلبات حالياً.</p>;

  return (
    <div>
      <h4 className="fw-bold border-bottom pb-2 mb-3">الطلبات</h4>
      {orders.map((order) => (
        <div key={order._id} className="border p-3 rounded mb-3">
          <p><strong>رقم الطلب:</strong> {order._id}</p>
          <p><strong>الحالة:</strong> {order.status}</p>
          <p><strong>المجموع:</strong> {order.totalPrice?.toFixed(2)} جنيه</p>
          <p><strong>تاريخ:</strong> {new Date(order.createdAt).toLocaleString("ar-EG")}</p>
        </div>
      ))}
    </div>
  );
};


export default MyOrders;
