import React, { useEffect } from 'react';
import './login.css';
import { useForm } from 'react-hook-form';
import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../store/Slice/authSlice';

const Login3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  // const emailValue = useSelector(state => state.auth.email);
  // const emailValue = localStorage.getItem('userEmail');
const location = useLocation();
const emailValue = location.state?.email || '';

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
      navigate('/login4',{ state: { email: emailValue } });
      // } 
    } catch (error) {
      console.error("Error in forgotPassword:", error);
      alert("حدث خطأ أثناء إرسال الكود. حاول لاحقًا.");
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

          <img src="/imgs07.png" alt="logo" width="65px" />
        </div>


        <h5 className="my-3 fontText " style={{ fontWeight: 400, fontSize: '16px' }}>
          استعادة كلمة المرور الخاصة بك
        </h5>

        <p className="text-muted mb-5 fontText tttt">
          يمكنك الحصول على رابط لاستعادة كلمة المرور الخاصة بك من خلال البريد الإلكتروني الخاص بك.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5 position-relative ">
            <input
              type="email"
              className="form-control my-3 fontText coloremail"
              placeholder="عنوان البريد الإلكتروني*"
              value={emailValue}
              readOnly
            />
          </div>

          <button type="submit" className=" btnn w-100 fontText" style={{ fontSize: '16px', fontWeight: 400, marginBottom: "150px" }}>
            استعاده كلمه المرور عن طريق البريد الالكتروني
          </button>
        </form>
      </div>

      <div className="foo0ter mt-5 fontText tttt" style={{ fontSize: '14px', fontWeight: 700 }}>
        لمزيد من الدعم، يمكنك زيارة مركز المساعدة أو الاتصال بفريق خدمة العملاء.
        <div className="mt-4">
          <img src="https://my.jumia.com.eg/pictures/myjumia/myjumia-bottom-logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Login3;
