import { createBrowserRouter } from 'react-router-dom';
import Home from '../screens/Home/Home';
import Products from "../screens/products/Products";
import Details from '../screens/Details/Details';
import NotFound from '../screens/Not_Found/NotFound';
import Wishlist from '../screens/Wishlist/Wishlist';
import Login from '../screens/Login/Login';
import Layout from '../comoonents/Layout/Layout';
import About from '../screens/About/About'
import Cart from '../screens/Cart/CartItem';
import EmptyCart from '../screens/Cart/emptyCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from '../Comoonents/Product details/ProductDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <NotFound />
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <NotFound />
      },
      {
        path: 'details/:id',
        element: <ProductDetails />,
        errorElement: <NotFound />
      },
      {
        path: 'about',
        element: < About />,
        errorElement: <NotFound />

      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <NotFound />
      },
      {
        path: 'emptycart',
        element: <EmptyCart />,
        errorElement: <NotFound />
      },

      {
        path: 'login',
        element: <Login />
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
    ]
  },


  {
    path: 'Wishlist',
    element: <Wishlist />
  },

  {
    path: '*',
    element: <NotFound />
  }


]);

export default router;
