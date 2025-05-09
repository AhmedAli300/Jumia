import { createBrowserRouter } from 'react-router-dom';
import Home from '../screens/Home/Home';

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

import Login2 from '../screens/Login/Login2';
import Login3 from '../screens/Login/Login3';
import Login4 from '../screens/Login/Login4';
import Login5 from '../screens/Login/Login5';
import Login6 from '../screens/Login/Login6';
import Products from '../screens/Products/Product';
// import Products from '../screens/Products/Product';


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
    path: 'login',
    element: <Login />
  },
  {
  path:'login2',
  element:<Login2/>
  },
  {
    path:"login3",
    element:<Login3/>
  },
  {
    path: 'login4',
    element: <Login4 />
  },
  {
   path:"login5",
    element:<Login5/>
  },
  {
   path:'login6',
    element:<Login6/>
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
