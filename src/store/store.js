import { configureStore} from "@reduxjs/toolkit";
import cartReducer from './Slice/cartSlice';
import authReducer from '../store/Slice/authSlice';
import filterReducer from '../store/Slice/filterSlice'; 

const store = configureStore({
  reducer:{
   
    cart: cartReducer,
    auth: authReducer,
    filter: filterReducer,

  }
});

export default store;
