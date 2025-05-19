import React, { useEffect, useState } from 'react';
import './login.css';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { useLocation } from 'react-router-dom';

import { login } from '../../store/Slice/authSlice';

const Login2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const emailValue = useSelector(state => state.auth.email);
  // const emailValue = localStorage.getItem('userEmail');
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
const location = useLocation();
const emailValue = location.state?.email || '';
  useEffect(() => {
    if (!emailValue) {
      navigate('/login');
    }
  }, [emailValue, navigate]);

  const onSubmit = (data) => {
    const sendData = {
      email: emailValue,
      password: data.Password
    };
    console.log("DATA TO SEND:", sendData);
    dispatch(login(sendData)).unwrap().then((response) => {
      console.log("Response from server:", response);
      navigate('/');
    })
      .catch((error) => {
        console.log("Login error:", error);
        alert(error || 'فشل في تسجيل الدخول');
      });
  };

  return (
    <div className="login-container">
      <div className="log-box">
        <div className="mb-3">
          <img src="/imgs07.png" alt="logo" width="65px" />
        </div>

        <h5 className="my-3 fontText" style={{ fontWeight: 400, fontSize: '18px' }}>
          مرحبا بعودتك!
        </h5>

        <p className="text-muted mb-5 fontText tttt" >
          قم بتسجيل الدخول مرة أخرى إلى حساب Jumia الخاص بك.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="mb-3 position-relative">
            <input type="email" className="form-control  fontText coloremail" placeholder="عنوان البريد الإلكتروني أو رقم الهاتف*"
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
                },
              })}
            />

            <span
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                top: '77%',
                left: '9%',
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                fontSize: '1.3rem',
                color: '#999'
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>

            <span className="text-danger d-flex w-100 text-start px-1 eromess  fontText">{errors.Password?.message} </span>
          </div>

          <button type="submit" className=" btnn w-100 fontText mt-4"> تسجيل الدخول </button>
        </form>

        <p className="mt-3 fontText" style={{ color: "#f8982d" }}
          onClick={() => navigate('/login3',{ state: { email: emailValue } })}> هل نسيت كلمة السر؟  </p>
      </div>

      <div className="foo0ter mt-5 fontText" style={{ fontSize: '14px', fontWeight: 700 }}>
        لمزيد من الدعم، يمكنك زيارة مركز المساعدة أو الاتصال بفريق خدمة العملاء.
        <div className="mt-4">
          <img src="https://my.jumia.com.eg/pictures/myjumia/myjumia-bottom-logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Login2;
