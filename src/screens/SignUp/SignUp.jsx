import React, { useEffect, useState } from 'react';
import '../Login/Login.css';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveStepData } from '../../store/Slice/authSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailValue = useSelector(state => state.auth.email);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const password = watch("Password");

    const togglePasswordVisibility = () => setShowPassword(prev => !prev);

    // useEffect(() => {
    //     if (!emailValue) {
    //         navigate('/login');
    //     }
    // }, [emailValue, navigate]);


    const onSubmit = async (data) => {
        const sendData = {
            email: emailValue,
            password: data.Password,
            passwordConfirm: data.ConfirmPassword
        };
        console.log("data1", sendData)

        dispatch(saveStepData(sendData));
        navigate('/sign2');
    };


    return (
        <div className="login-container">
            <div className="log-box">
                <div className="mb-3">
                    <img src="/imgs07.png" alt="logo" width="65px" />
                </div>

                <h5 className="my-3 fontText" style={{ fontWeight: 400, fontSize: '16px' }}> أنشئ حسابك </h5>
                <h5 className="my-3 fontText tttt" > لنبدأ بإنشاء حسابك. <br /> للحفاظ على أمان حسابك ، نحتاج إلى كلمة مرور قوية!</h5>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 position-relative">
                        <input
                            type="email"
                            className="my-3 fontText coloremail w-100 border-0 text-dark"
                            placeholder="عنوان البريد الإلكتروني أو رقم الهاتف*"
                            value={emailValue}
                            readOnly
                        />

                        <input
                            type={showPassword ? "text" : "password"}
                            className=" mt-4 py-4 fontText w-100  text-dark p-3 posheghit  "
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
                                top: '46%',
                                left: '9%',
                                transform: 'translate(-50%, -50%)',
                                cursor: 'pointer',
                                fontSize: '1.3rem',
                                color: '#999'
                            }}
                        >
                            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </span>
                        <span className="text-danger d-flex w-100 text-start px-1 eromess fs-6 fontText">
                            {errors.Password?.message}
                        </span>

                        <input
                            type={showPassword ? "text" : "password"}
                            className="mt-5 py-4 fontText w-100  text-dark p-3 posheghit"
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
                                top: '88%',
                                left: '9%',
                                transform: 'translate(-50%, -50%)',
                                cursor: 'pointer',
                                fontSize: '1.3rem',
                                color: '#999'
                            }}
                        >
                            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </span>
                        <span className="text-danger d-flex w-100 text-start px-1 eromess fs-6">
                            {errors.ConfirmPassword?.message}
                        </span>
                    </div>

                    <button type="submit" className="fontText btnn w-100 mt-4">
                        استمر
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

export default SignUp;
