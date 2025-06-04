import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home/Home";

import Details from "../screens/Details/Details";
import NotFound from "../screens/Not_Found/NotFound";
import Wishlist from "../screens/Wishlist/Wishlist";
import Login from "../screens/Login/Login";
import Layout from "../comoonents/Layout/Layout";
import About from "../screens/About/About";
import Cart from "../screens/Cart/CartItem";
import EmptyCart from "../screens/Cart/emptyCart";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "../Comoonents/Product details/ProductDetails";


import Login2 from "../screens/Login/Login2";
import Login3 from "../screens/Login/Login3";
import Login4 from "../screens/Login/Login4";
import Login5 from "../screens/Login/Login5";
import Login6 from "../screens/Login/Login6";

import SignUp from '../screens/SignUp/SignUp';
import Sign2 from '../screens/SignUp/Sign2';
import Sign1 from '../screens/SignUp/Sign1'
import Sign3 from '../screens/SignUp/Sign3';
import Sign4 from '../screens/SignUp/Sign4'

import Products from "../screens/Products/Product";
import SelectDeliveryAddress from "../screens/Order/SelectDeliveryAddress/SelectDeliveryAddress";
import DelivertMethod from "../screens/Order/DelivertMethod/DelivertMethod";
import { PaymentElement } from "@stripe/react-stripe-js";
import PaymentForm from "../screens/Order/PaymentMethod/PaymentMethod";
import ConfirmOrder from "../screens/Order/ConfirmOrder/ConfirmOrder";
import Confirm from "../screens/Order/Confirm/Confirm";
import Payment from "../screens/Order/Payment/Payment";

import UserSetting from "../screens/UserSetting/UserSetting";
import OrderDone from "../screens/Order/OrderDone/OrderDone";
import Form from '../screens/userSetting/FormSetting'

import Acount from '../screens/userSetting/acount'

import MyOrders from "../screens/userSetting/MyOrders";

// import Products from '../screens/Products/Product';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <NotFound />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
        errorElement: <NotFound />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <NotFound />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <NotFound />,
      },
      {
        path: "emptycart",
        element: <EmptyCart />,
        errorElement: <NotFound />,
      },
      {
        path: "order",
        element: <SelectDeliveryAddress />,
        errorElement: <NotFound />,
      },
      {
        path: "delivery",
        element: <DelivertMethod />,
        errorElement: <NotFound />,
      },
      {
        path: "payment",
        element: <PaymentForm />,
        errorElement: <NotFound />,
      },
      {
        path: "confirm",
        element: <ConfirmOrder />,
        errorElement: <NotFound />,
      },
      {
        path: 'confirmorder',
        element: <Confirm />
      },
      {
        path: 'payment2',
        element: <Payment />,
        errorElement: <NotFound />,
      },
      {
        path: 'orderdone',
        element: <OrderDone />,
        errorElement: <NotFound />,
      },
      {
        path: 'myorders',
        element: <MyOrders />,
        errorElement: <NotFound />,
      }

      // {
      //   path: 'favourte',
      //   element: ,
      //   children: [{
      //     index: true,
      //     element: <Faviroute />
      //   }
      //   ]
      // },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "login2",
    element: <Login2 />,
  },
  {
    path: "login3",
    element: <Login3 />,
  },
  {
    path: "login4",
    element: <Login4 />,
  },
  {
    path: "login5",
    element: <Login5 />,
  },
  {
    path: "login6",
    element: <Login6 />,
  },
  {
    path: 'sign',
    element: <SignUp />
  },
  {
    path: 'sign1',
    element: <Sign1 />

  },
  {
    path: 'sign2',
    element: <Sign2 />
  },
  {
    path: 'sign3',
    element: <Sign3 />
  },
  {
    path: 'sign4',
    element: <Sign4 />
  },
  {
    path: 'user',
    element: <UserSetting />
  },

  {
    path: "Wishlist",
    element: <Wishlist />,
  },
  {
    path: 'form',
    element: <Form />
  },
  {
    path: 'acount',
    element: <Acount />
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
