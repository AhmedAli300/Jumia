

import React, { useEffect } from 'react';
import './login.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../store/Slice/authSlice'; 

const Login3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const emailValue = useSelector(state => state.auth.email); 

  useEffect(() => {
    if (!emailValue) {
      console.log("Email from Redux in Login3:", emailValue);
      navigate('/login'); 
    }
  }, [emailValue, navigate]);

  const onSubmit = async () => {
    console.log("Sending email:", emailValue);
  
    try {
      const response = await dispatch(forgotPassword(emailValue)).unwrap(); 
  
      console.log("Forgot password response:", response);
  
  
      // if (responseMessage == "The password reset code has been sent to your email successfully") {
        navigate('/login4'); 
      // } 
    } catch (error) {
      console.error("Error in forgotPassword:", error);
      alert("حدث خطأ أثناء إرسال الكود. حاول لاحقًا.");
    }
  };
  
  
  
  

  return (
    <div className="login-container">
      <div className="log-box">
        <div className="mb-3">
          <img src="/imgs07.png" alt="logo" width="65px" />
        </div>

        <h5 className="my-3" style={{ fontWeight: 400, fontSize: '18px' }}>
          استعادة كلمة المرور الخاصة بك
        </h5>

        <p className="text-muted mb-5" style={{ fontSize: '13px', fontWeight: 500 }}>
          يمكنك الحصول على رابط لاستعادة كلمة المرور الخاصة بك من خلال البريد الإلكتروني الخاص بك.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5 position-relative">
            <input
              type="email"
              className="form-control my-3"
              placeholder="عنوان البريد الإلكتروني*"
              value={emailValue}
              readOnly
            />
          </div>

          <button type="submit" className="btn btnn w-100" style={{ fontSize: '16px', fontWeight: 400, marginBottom: "150px" }}>
            استعاده كلمه المرور عن طريق البريد الالكتروني
          </button>
        </form>
      </div>

      <div className="foo0ter mt-5" style={{ fontSize: '14px', fontWeight: 700 }}>
        لمزيد من الدعم، يمكنك زيارة مركز المساعدة أو الاتصال بفريق خدمة العملاء.
        <div className="mt-4">
          <img src="https://my.jumia.com.eg/pictures/myjumia/myjumia-bottom-logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Login3;
