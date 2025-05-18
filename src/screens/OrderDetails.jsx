// src/pages/OrderDetails.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import orderService from '../services/orderService';
import { Typography, Divider, List, ListItem, ListItemText, CircularProgress } from '@mui/material';

export default function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await orderService.getOrderById(id);
        setOrder(res.data.data.order);
      } catch (err) {
        console.error('خطأ في تحميل الطلب:', err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) return <CircularProgress style={{ marginTop: '40px' }} />;

  if (!order) return <Typography>لم يتم العثور على الطلب.</Typography>;

  return (
    <div style={{ padding: '30px', direction: 'rtl' }}>
      <Typography variant="h5" gutterBottom>
        تفاصيل الطلب رقم: {order._id}
      </Typography>
      <Divider style={{ margin: '10px 0' }} />

      <Typography variant="h6">عنوان الشحن</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={order.shippingAddress.fullName}
            secondary={`${order.shippingAddress.phone} - ${order.shippingAddress.address}, ${order.shippingAddress.city}, ${order.shippingAddress.region}`}
          />
        </ListItem>
      </List>

      <Typography variant="h6" style={{ marginTop: '20px' }}>
        المنتجات:
      </Typography>
      <List>
        {order.orderItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={item.product?.name || 'منتج غير معروف'}
              secondary={`الكمية: ${item.quantity} - السعر: ${item.price} جنيه`}
            />
          </ListItem>
        ))}
      </List>

      <Divider style={{ margin: '20px 0' }} />

      <Typography>طريقة الدفع: {order.paymentMethod}</Typography>
      <Typography>طريقة التوصيل: {order.shippingMethod}</Typography>
      <Typography>سعر التوصيل: {order.shippingPrice} جنيه</Typography>
      <Typography>الإجمالي الكلي: {order.totalPrice} جنيه</Typography>
      <Typography>حالة الطلب: {order.orderStatus}</Typography>
    </div>
  );
}
