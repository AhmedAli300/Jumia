import React, { useEffect, useState } from 'react';
import './login.css';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../store/Slice/authSlice';

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
      navigate('/login');
    }
  }, [emailValue, navigate]);


  const onSubmit = async (data) => {
    const sendData = {
      email: emailValue,
      password: data.Password,
      passwordConfirm: data.ConfirmPassword
    };

    try {
      const res = await dispatch(resetPassword(sendData)).unwrap();

      if (res.token) {
        localStorage.setItem('token', res.token);
      }
      navigate('/');
    } catch (err) {
      console.error("Reset password failed:", err);
      alert(err);
    }
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
        </div>

        <h5 className="my-3 fontText" style={{ fontWeight: 400, fontSize: '16px' }}>
          اكتب كلمة مرورك الجديدة
        </h5>

        <p className="text-muted mb-5 fontText tttt" >
          لقد طلبت إعادة تعيين كلمة مرور ‎Jumia‎ الخاصة بك. اكتب كلمة المرور الجديدة أدناه.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 position-relative">
            <input
              type="email"
              className="form-control my-3 fontText coloremail"
              placeholder="عنوان البريد الإلكتروني أو رقم الهاتف*"
              value={emailValue}
              readOnly
            />

            <input
              type={showPassword ? "text" : "password"}
              className="form-control mt-4 py-4 fontText"
              placeholder="كلمة السر"
              {...register('Password', {
                required: "كلمة المرور مطلوبة",
                minLength: {
                  value: 8,
                  message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل"
                }
              })}
            />
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
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            <span className="text-danger d-flex w-100 text-start px-1 eromess fs-6 fontText">
              {errors.Password?.message}
            </span>

            <input
              type={showPassword ? "text" : "password"}
              className="form-control mt-4 py-4 fontText"
              placeholder="تاكيد كلمه المرور"
              {...register('ConfirmPassword', {
                required: "تأكيد كلمة المرور مطلوب",
                validate: value => value === password || "كلمة المرور غير متطابقة"
              })}
            />
            <span
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                top: '86%',
                left: '9%',
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                fontSize: '1.3rem',
                color: '#999'
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            <span className="text-danger d-flex w-100 text-start px-1 eromess fs-6">
              {errors.ConfirmPassword?.message}
            </span>
          </div>

          <button type="submit" className="fontText btnn w-100">
            احفظ كلمة المرور الخاصة بك وقم بتسجيل الدخول
          </button>
        </form>

        <div className="foo0ter mt-5 fontText" style={{ fontSize: '14px', fontWeight: 700 }}>
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
