import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './usersetting.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteAccount, logout } from '../../store/Slice/authSlice'; 

const AccountPage = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm('هل أنت متأكد من حذف الحساب؟ !');
    if (!confirmDelete) return;

    const result = await dispatch(deleteAccount());

    if (result.meta.requestStatus === 'fulfilled') {
      dispatch(logout());
      navigate('/'); 
    } else {
      alert('حدث خطأ أثناء حذف الحساب، برجاء المحاولة لاحقًا.');
    }
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center py-5" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div className="text-center mb-4">
        <img src="/imgs07.png" alt="logo" width="65px" />
        <h5 className="mt-3">مرحباً <strong>{user?.name || 'user not avail'}</strong></h5>
      </div>

      <div className="row justify-content-center w-100 px-3 px-md-5 mx-5">
        <div className="col-12 col-md-4 mb-4 ">
          <div className="card shadow">
            <div className="card-header cardcard d-flex align-items-center py-3 ">
              <span className="material-icons me-2 marleft fs-2" style={{ color: '#000' }}>account_circle</span>
              <span className='hs-2'>تفاصيل الملف الشخصي</span>
            </div>
            <div className="card-body py-3">
              <ul className="list-unstyled">
                <li className="mb-4">تفاصيل أساسية</li>
                <li>تغيير رقم الهاتف</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mb-4 w-25">
          <div className="card shadow" style={{ height: '100%' }}>
            <div className="card-header cardcard d-flex align-items-center py-3">
              <span className="material-icons me-2 marleft" style={{ color: '#000' }}>https</span>
              <span>إعدادات الأمان</span>
            </div>
            <div className="card-body py-3">
              <ul className="list-unstyled">
                <li className="mb-4">إدارة مفاتيح المرور</li>
                <li className="mb-4">تغيير كلمة المرور</li>
                <li className="mb-4">إعدادات التنبيهات</li>
                <li className="text-danger" onClick={handleDeleteAccount} style={{ cursor: 'pointer' }}>
                  حذف الحساب
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-5">
        <img src="https://my.jumia.com.eg/pictures/myjumia/myjumia-bottom-logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default AccountPage;
