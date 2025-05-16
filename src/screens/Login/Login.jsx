import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
// import React from 'react';
import './login.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail, checkUserInteraction } from '../../store/Slice/authSlice';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Login = () => {
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const email = data.Email;
    try {
      const resultAction = await dispatch(checkUserInteraction(email));

      if (checkUserInteraction.fulfilled.match(resultAction)) {
        const message = resultAction.payload;
        dispatch(setEmail(email));
        localStorage.setItem('userEmail', email);

        if (message.includes('signIn')) {
          navigate('/login2', { state: { email } });
        } else if (message.includes('signUp')) {
          navigate('/sign');
        }
      }
    } catch (err) {
      console.error('خطأ في التفاعل:', err);
    }
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center  vh-100 fontText tttt" style={{ marginTop: "160px" }}>
        <h6 className="fontText tttt "><br />. . . جاري  التحقق من امكانيه توصيل الانترنت  </h6>
      </div>
    );
  }


  const OrangeTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'orange',
      right: 0,
    },
    '& .MuiInputLabel-root': {
      right: 24,
      left: 'auto',
      textAlign: 'right',
      direction: 'rtl',
    },
    '& .MuiOutlinedInput-root': {
      direction: 'rtl',
      '& fieldset': {
        borderColor: '#ced4da',
      },
      '&:hover fieldset': {
        borderColor: 'orange',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'orange',
      },
    },
  });




  return (
    <div className="login-container">
      <div className="log-box">
        <div className="mb-3">
          <img src="/imgs07.png" alt="logo" width="65px" />
        </div>

        <h5 className="my-3 fontText" style={{ fontWeight: 400, fontSize: '18px' }}>مرحبًا بكم في <strong>Jumia</strong></h5>
        <p className="text-muted mb-5 fontText tttt" >
          اكتب بريدك الإلكتروني أو رقم هاتفك لتسجيل الدخول أو إنشاء حساب على Jumia
        </p>

        <Box onSubmit={handleSubmit(onSubmit)} component="form">

          <Box
            component="form"
            sx={{
              '& > :not(style)': {
                mb: 5,
                width: '57ch',
                direction: 'rtl',
              },
            }}
            noValidate
            autoComplete="off"
          >
            <OrangeTextField
              label="عنوان البريد الإلكتروني أو رقم الهاتف*"
              variant="outlined"
              type="text"
              className="fontText tttt"
              {...register('Email', {
                required: 'هذا الحقل مطلوب',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'البريد الإلكتروني أو رقم الهاتف الذي تم إدخاله غير صالح',
                },
              })}

              error={!!errors.Email}
              helperText={errors.Email?.message}
            />
          </Box>

          <button type="submit" className=" btnn w-100 fontText">استمرار</button>
        </Box>

        <p className="text-muted mt-2 text-dark me-5 fontText" style={{ fontSize: '12px' }}>
          من خلال التسجيل فأنت توافق على <br />
          <a href="#" style={{ color: '#f8982d', fontSize: '12px' }}>الشروط والأحكام</a>
        </p>

        <button className=" btnn btn-facebook w-100 mt-5 d-flex align-items-center justify-content-between fontText">
          <i className="fa-brands fa-facebook fs-5 mx-1" style={{ color: '#fff', fontSize: '20px', marginLeft: '100px' }}></i>
          تسجيل الدخول باستخدام الفيسبوك
        </button>
      </div>

      <div className="foo0ter mt-5 fontText" style={{ fontSize: '14px', fontWeight: 700 }}>
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
