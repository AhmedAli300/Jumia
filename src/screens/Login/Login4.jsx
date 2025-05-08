


import React, { useEffect, useState } from 'react';
import './login.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { confirmResetCode } from '../../store/Slice/authSlice'; 

const Login4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // const emailValue = localStorage.getItem('email'); 
  const emailValue = useSelector(state => state.auth.email) || localStorage.getItem('email');

  const [counter, setCounter] = useState(60);
  const [showResend, setShowResend] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (!emailValue) navigate('/login');
  }, [emailValue, navigate]);

  useEffect(() => {
    const timer = counter > 0 &&
      setInterval(() => setCounter((prev) => prev - 1), 1000);
    if (counter === 0) setShowResend(true);
    return () => clearInterval(timer);
  }, [counter]);


  // const onSubmit = async (data) => {
  //   const passwordRestCode = `${data.code1}${data.code2}${data.code3}${data.code4}`;
  //   console.log("Reset Code:", passwordRestCode); 

    
  //   const result = await dispatch(confirmResetCode({ email: emailValue, passwordRestCode }));

  //   if (confirmResetCode.fulfilled.match(result)) {
  //     console.log(" الكود صحيح،");
  //     navigate('/login5');
  //   } else {
  //     console.error(" الكود غير صحيح:", result.payload);
  //     setErrorMsg(result.payload);
  //   }
  // };

  const onSubmit = async (data) => {
    const passwordResetCode = `${data.code1}${data.code2}${data.code3}${data.code4}`;
    console.log("Reset Code:", passwordResetCode); 
      console.log("",  data); 
    const result = await dispatch(confirmResetCode({ passwordResetCode }));
  
    if (confirmResetCode.fulfilled.match(result)) {
      console.log(" الكود صحيح،");
      navigate('/login5');
      reset();
    } else {
      console.error(" الكود غير صحيح:", result.payload);
      setErrorMsg(result.payload);
    }
  };
  

  const handleResendCode = () => {
    console.log('Resending code to:', emailValue);
    alert('تم إرسال رمز جديد إلى بريدك الإلكتروني');
    setCounter(60);
    setShowResend(false);
  };

  return (
    <div className="login-container">
      <div className="log-box">
        <div className="mb-3">
          <img src="/imgs07.png" alt="logo" width="65px" />
        </div>
        <h5 className="my-3" style={{ fontWeight: 400, fontSize: '18px' }}>
          كود الحماية لإعادة تعيين كلمة المرور
        </h5>
        <p className="text-muted mb-4" style={{ fontSize: '13px', fontWeight: 500 }}>
          أدخل رمز الأمان المرسل إلى بريدك الإلكتروني من أجل متابعة إعادة تعيين كلمة المرور
        </p>

        {errorMsg && (
          <p className="text-danger text-center" style={{ fontWeight: 500 }}>{errorMsg}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "150px" }}>
          <div className="mb-3 d-flex justify-content-center align-items-center gap-4 dir-rtl" >
            <input type="text" maxLength={1} {...register("code1", { required: true })} className="code-input"
              style={{ height: '60px', width: '60px', border: '1px solid #f8982d' }} />
            <input type="text" maxLength={1} {...register("code2", { required: true })} className="code-input"
              style={{ height: '60px', width: '60px', border: '1px solid #f8982d' }} />
            <input type="text" maxLength={1} {...register("code3", { required: true })} className="code-input"
              style={{ height: '60px', width: '60px', border: '1px solid #f8982d' }} />
            <input type="text" maxLength={1} {...register("code4", { required: true })} className="code-input"
              style={{ height: '60px', width: '60px', border: '1px solid #f8982d' }} />
          </div>

          <button type="submit" className="btn btnn w-100"
            style={{ fontSize: '16px', fontWeight: 400, marginBottom: '20px' }}>
            إرسال
          </button>

          {!showResend ? (
            <p className="text-muted text-center" style={{ color: "#888", fontSize: "14px" }}>
              يمكنك طلب رمز جديد خلال <span style={{ color: "#f8982d" }}>{counter} ثواني</span>
            </p>
          ) : (
            <p onClick={handleResendCode} style={{ color: '#f8982d', cursor: 'pointer', textAlign: 'center' }}>
              اطلب رمز جديد
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

export default Login4;
