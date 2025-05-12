import React, { useEffect } from 'react';
import '../Login/Login.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../store/Slice/authSlice';

const Sign2 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailValue = useSelector(state => state.auth.email);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const firstNameValue = watch('firstName');
    const lastNameValue = watch('lastName');
    const phoneValue = watch('phone');

    const onSubmit = async (data) => {
        const sendData = {
            email: emailValue,
            password: data.Password,
            passwordConfirm: data.ConfirmPassword,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
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
                <div className="mb-3">
                    <img src="/imgs07.png" alt="logo" width="65px" />
                </div>

                <h5 className="my-3 fontText" style={{ fontWeight: 400, fontSize: '16px' }}>تفاصيل شخصية</h5>
                <h5 className="my-3 fontText tttt"> نحتاج فقط إلى ملء بعض التفاصيل. </h5>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        className="my-3 fontText coloremail w-100 border-0 text-dark"
                        placeholder="الاسم الاول*"
                        {...register('firstName', {
                            required: 'الرجاء كتابة اسمك الأول كما في الهوية الوطنية الخاصة بك',
                            maxLength: {
                                value: 6,
                                message: 'الاسم يجب ألا يزيد عن 6 أحرف',
                            }
                        })}
                    />
                    {errors.firstName && <small className="text-danger">{errors.firstName.message}</small>}
                    <div className="text-muted">الاسم الحالي: {firstNameValue}</div>

                    <input
                        type="text"
                        className="my-3 fontText coloremail w-100 border-0 text-dark"
                        placeholder="الكنية*"
                        {...register('lastName', {
                            required: 'يرجى كتابة اسم عائلتك كما هو الحال في هويتك الوطنية',
                        })}
                    />
                    {errors.lastName && <small className="text-danger">{errors.lastName.message}</small>}
                    <div className="text-muted">الكنية الحالية: {lastNameValue}</div>

                    <input
                        type="text"
                        className="my-3 fontText coloremail w-100 border-0 text-dark"
                        placeholder="رقم الهاتف*"
                        {...register('phone', {
                            required: 'اكتب رقم هاتف صالح للمتابعة',
                            pattern: {
                                value: /^(010|011|012|015)\d{8}$/,
                                message: 'يرجى إدخال رقم هاتف مصري صحيح مكون من 11 رقمًا',
                            }
                        })}
                    />
                    {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
                    <div className="text-muted">رقم الهاتف الحالي: {phoneValue}</div>

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

export default Sign2;
