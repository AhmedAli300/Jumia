// import ProductDetails from "./Comoonents/Product details/ProductDetails"

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import router from './routes/routes';
import { ToastContainer } from 'react-toastify';
function App() {


  return (
    <>
      <div>
        <ToastContainer position="top-right" autoClose={2000} />
        {/* <ToastContainer /> */}
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>

      </div>
    </>
  )
}

export default App
