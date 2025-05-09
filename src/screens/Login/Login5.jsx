import React, { useEffect, useState } from 'react';
import './login.css';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/Slice/authSlice'; 


const Login5 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const emailValue = useSelector(state => state.auth.email);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const password = watch("Password"); 
  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
    useEffect(() => {
      if (!emailValue) {
          console.log("Email from Redux in Login3:", emailValue);
        navigate('/login');
      }
    }, [emailValue, navigate]);
    const onSubmit = (data) => {
      const sendData = {
        email: emailValue, 
        password: data.Password 
      };
      console.log("DATA TO SEND:", sendData); 
    };

  return (
    <div className="login-container">
      <div className="log-box">
        <div className="mb-3">
          <img src="/imgs07.png" alt="logo" width="65px" />
        </div>

        <h5 className="my-3" style={{ fontWeight: 400, fontSize: '18px' }}>
          اكتب كلمة مرورك الجديدة
        </h5>

        <p className="text-muted mb-5" style={{ fontSize: '13px', fontWeight: 500 }}>
          لقد طلبت إعادة تعيين كلمة مرور ‎Jumia‎ الخاصة بك. اكتب كلمة المرور الجديدة أدناه.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 position-relative">
            <input
              type="email"
              className="form-control my-3"
              placeholder="عنوان البريد الإلكتروني أو رقم الهاتف*"
              value={emailValue}
              readOnly
            />

            <input
              type={showPassword ? "text" : "password"}
              className="form-control mt-4 py-4"
              placeholder="كلمة السر"
              {...register('Password', {
                required: "كلمة المرور مطلوبة",
                minLength: {
                  value: 8,
                  message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل"
                }, })} />

            <span
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                top: '48%',
                left: '9%',
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                fontSize: '1.3rem',
                color: '#999'
              }} >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>

            <span className="text-danger d-flex w-100 text-start px-1 eromess fs-6">
              {errors.Password?.message}  </span>

            <input
              type={showPassword ? "text" : "password"}
              className="form-control mt-4 py-4"
              placeholder="تاكيد كلمه المرور "
              {...register('ConfirmPassword', {
                required: "تأكيد كلمة المرور مطلوب",
                validate: value => value === password || "كلمة المرور غير متطابقة"
              })} />

            <span 
            onClick={togglePasswordVisibility} 
            style={{
                position: 'absolute', top: '86%', left: '9%', transform: 'translate(-50%, -50%)', cursor: 'pointer',
                fontSize: '1.3rem',
                color: '#999'  }}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />} </span>

            <span className="text-danger d-flex w-100 text-start px-1 eromess fs-6">
              {errors.ConfirmPassword?.message} </span>
          </div>
          <button type="submit" className="btn btnn w-100"
          onClick={() => {navigate('/login6'); }} >
            احفظ كلمة المرور الخاصة بك وقم بتسجيل الدخول
          </button>
        </form>

        <div className="foo0ter mt-5" style={{ fontSize: '14px', fontWeight: 700 }}>
          لمزيد من الدعم، يمكنك زيارة مركز المساعدة أو الاتصال بفريق خدمة العملاء.
          <div className="mt-4">
            <img src="https://my.jumia.com.eg/pictures/myjumia/myjumia-bottom-logo.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login5;
