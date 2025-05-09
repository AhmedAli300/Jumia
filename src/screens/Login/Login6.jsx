import React, { useEffect, useState } from 'react';
import './login.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/Slice/authSlice'; 

const Login6 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailValue = useSelector(state => state.auth.email);
  const [counter, setCounter] = useState(60);
  const [showResend, setShowResend] = useState(false);

  useEffect(() => {
    if (!emailValue) {
      console.log("Email from Redux in Login3:", emailValue);
      navigate('/login');
    }
  }, [emailValue, navigate]);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowResend(true);
    }
  }, [counter]);

  const onSubmit = (data) => {
    const sendData = {
      email: emailValue,
      password: data.Password
    };
    console.log("DATA TO SEND:", sendData);
  };

  const handleResendCode = () => {
    console.log("رمز جديد تم طلبه");
    setCounter(60);
    setShowResend(false);
  };
    const { register, handleSubmit} = useForm();
  
  return (
    <div className="login-container">
      <div className="log-box">
        <div className="mb-3">
          <img src="/imgs07.png" alt="logo" width="65px" />
        </div>

        <h5 className="my-3" style={{ fontWeight: 400, fontSize: '18px' }}>
          رمز التحقق
        </h5>

        <p className="text-muted mb-5" style={{ fontSize: '13px', fontWeight: 500 }}>
          نرسل رمز تحقق إلى:<br />
          {emailValue}
        </p>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "150px" }}>
        <div className="mb-3 d-flex justify-content-center align-items-center gap-4">
            <input type="text" maxLength={1} className="code-input" {...register("code1", { required: true })}
             style={{ height: '60px', width: '60px', border: '1px solid #f8982d' }}  />
           <input type="text" maxLength={1} className="code-input" {...register("code2", { required: true })} 
            style={{ height: '60px', width: '60px', border: '1px solid #f8982d' }} />
            <input type="text" maxLength={1} className="code-input" {...register("code3", { required: true })} 
             style={{ height: '60px', width: '60px', border: '1px solid #f8982d' }}  />
             <input type="text" maxLength={1} className="code-input" {...register("code4", { required: true })} 
             style={{ height: '60px', width: '60px', border: '1px solid #f8982d' }} />
          </div>

          <button
            type="submit"
            className="btn btnn w-100"
            style={{ fontSize: '16px', fontWeight: 400 }}
            onClick={() => {
              navigate('/');
            }}>   ارسال  </button>

          {!showResend ? (
            <p style={{ color: "#888", fontSize: "14px", marginTop: "15px" }}>
              لم تتلقَ الرمز؟ اطلب رمز جديد بعد <span style={{ color: "#f8982d" }}>{counter.toString().padStart(2, '0')}</span>
            </p>
          ) : (
            <p
              style={{ color: "#f8982d", fontSize: "14px", cursor: "pointer", marginTop: "15px" }}
              onClick={handleResendCode}
            >
              طلب رمز جديد
            </p>
          )}
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

export default Login6;
