import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../store/Slice/authSlice';

const Layout = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token) || localStorage.getItem('token');
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (token) {
      dispatch(getUserData());
      console.log('Token:', token);
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (user) {
      console.log('User data🚛:', user);
    }
  }, [user]);
   console.log("data",user?.user)
  return (
    <>
      {/* <div>مرحبا {user?.name || ''}</div> */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
