import React, { useEffect, useState, useRef } from 'react';
import './login.css';
import { useNavigate ,useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { confirmResetCode } from '../../store/Slice/authSlice';

const Login4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const emailValue = useSelector(state => state.auth.email) || localStorage.getItem('email');
  // const emailValue = localStorage.getItem('userEmail');
const location = useLocation();
const emailValue = location.state?.email || '';
  const [code, setCode] = useState(["", "", "", ""]);
  const [counter, setCounter] = useState(60);
  const [showResend, setShowResend] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const inputsRef = useRef([]);

  useEffect(() => {
    if (!emailValue) navigate('/login');
  }, [emailValue, navigate]);

  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(prev => prev - 1), 1000);
    if (counter === 0) setShowResend(true);
    return () => clearInterval(timer);
  }, [counter]);

  const handleChange = (value, index) => {
    if (/^\d$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordResetCode = code.join('');
    console.log("Reset Code:", passwordResetCode);

    const result = await dispatch(confirmResetCode({email: emailValue,  passwordResetCode }));

    if (confirmResetCode.fulfilled.match(result)) {
      console.log(" الكود صحيح");
      navigate('/login5',{ state: { email: emailValue } });
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
        <div className="mb-3 d-flex flex-column align-items-center">
          <span className="svgStyle mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
              <path
                style={{ fill: '#fff' }}
                d="M5.5 19q-.625 0-1.062-.438Q4 18.125 4 17.5v-8q0-.625.438-1.062Q4.875 8 5.5 8H6V6q0-1.667 1.167-2.833Q8.333 2 10 2q1.667 0 2.833 1.167Q14 4.333 14 6v2h.5q.625 0 1.062.438Q16 8.875 16 9.5v8q0 .625-.438 1.062Q15.125 19 14.5 19Zm2-11h5V6q0-1.042-.729-1.771Q11.042 3.5 10 3.5q-1.042 0-1.771.729Q7.5 4.958 7.5 6Zm2.5 7q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q10.625 12 10 12t-1.062.438Q8.5 12.875 8.5 13.5t.438 1.062Q9.375 15 10 15Z"
              />
            </svg>
          </span>

          <img src="/imgs07.png" alt="logo" width="65px" />
        </div>
        <h5 className="my-3 fontText" style={{ fontWeight: 400, fontSize: '16px' }}>
          كود الحماية لإعادة تعيين كلمة المرور
        </h5>
        <p className="text-muted mb-4 fontText tttt" >
          أدخل رمز الأمان المرسل إلى بريدك الإلكتروني من أجل متابعة إعادة تعيين كلمة المرور
        </p>

        {errorMsg && (
          <p className="text-danger text-center fontText tttt" >{errorMsg}</p>
        )}

        <form onSubmit={handleSubmit} style={{ marginBottom: "150px" }}>
          <div className="mb-3 d-flex justify-content-center align-items-center gap-4 dir-rtl"

            style={{ direction: 'ltr' }}>
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                ref={el => inputsRef.current[index] = el}
                onChange={(e) => handleChange(e.target.value, index)}
                className="code-input"
                style={{ height: '60px', width: '60px', border: '1px solid #f8982d', textAlign: 'center', fontSize: '20px' }}
              />
            ))}
          </div>

          <button type="submit" className="fontText btnn w-100"
            style={{ fontSize: '16px', fontWeight: 400, marginBottom: '20px' }}>
            إرسال
          </button>

          {!showResend ? (
            <p className="text-muted text-center fontText" style={{ fontSize: "14px" }}>
              يمكنك طلب رمز جديد خلال <span style={{ color: "#f8982d" }}>{counter} ثواني</span>
            </p>
          ) : (
            <p className='fontText' onClick={handleResendCode} style={{ color: '#f8982d', cursor: 'pointer', textAlign: 'center' }}>
              اطلب رمز جديد
            </p>
          )}
        </form>
      </div>

      <div className="foo0ter mt-5 fontText " style={{ fontSize: '14px', fontWeight: 700 }}>
        لمزيد من الدعم، يمكنك زيارة مركز المساعدة أو الاتصال بفريق خدمة العملاء.
        <div className="mt-4">
          <img src="https://my.jumia.com.eg/pictures/myjumia/myjumia-bottom-logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Login4;
