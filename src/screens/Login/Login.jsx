import React from 'react';
import './login.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail } from '../../store/Slice/authSlice'; 

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
  const email = data.Email;
        dispatch(setEmail(email));
        navigate('/login2');
  };

  return (
    <div className="login-container">
      <div className="log-box">
        <div className="mb-3">
          <img src="/imgs07.png" alt="logo" width="65px" />
        </div>

        <h5 className="my-3" style={{ fontWeight: 400, fontSize: '18px' }}>مرحبًا بكم في <strong>Jumia</strong></h5>
        <p className="text-muted mb-5" style={{ fontSize: '13px', fontWeight: 500 }}>
          اكتب بريدك الإلكتروني أو رقم هاتفك لتسجيل الدخول أو إنشاء حساب على Jumia
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input type="text" className="form-control my-3" placeholder="عنوان البريد الإلكتروني أو رقم الهاتف*"
              {...register('Email', {
                required: "هذا الحقل مطلوب",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "البريد الإلكتروني أو رقم الهاتف الذي تم إدخاله غير صالح"
                }
              })}
            />
            <span className="text-danger d-flex w-100 text-start px-1 eromess">{errors.Email?.message}</span>
          </div>

          <button type="submit" className="btn btnn w-100">استمرار</button>
        </form>

        <p className="text-muted mt-2 text-dark me-5" style={{ fontSize: '12px' }}>
          من خلال التسجيل فأنت توافق على <br />
        <a href="#" style={{ color: '#f8982d', fontSize: '12px' }}>الشروط والأحكام</a></p>

        <button className="btn btnn btn-facebook w-100 mt-5 d-flex align-items-center justify-content-between">
          <i className="fa-brands fa-facebook fs-5 mx-1" style={{ color: '#fff', fontSize: '20px', marginLeft: '100px' }}></i>
          تسجيل الدخول باستخدام الفيسبوك
        </button>
      </div>
      
      <div className="foo0ter mt-5" style={{ fontSize: '14px', fontWeight: 700 }}>
        لمزيد من الدعم، يمكنك زيارة مركز المساعدة أو الاتصال بفريق خدمة العملاء.
        <br />
        <div className="mt-4">
          <img src="https://my.jumia.com.eg/pictures/myjumia/myjumia-bottom-logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Login;
