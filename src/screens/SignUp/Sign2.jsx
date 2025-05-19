import React from 'react';
import '../Login/Login.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveStepData } from '../../store/Slice/authSlice';

const Sign2 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const emailValue = useSelector(state => state.auth.signupData.email);

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

            name: data.firstName + " " + data.lastName,
            mobilePhone: data.phone,
            // email: emailValue,
        };
        console.log("data2", sendData)

        dispatch(saveStepData(sendData));

        navigate('/sign3');
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
                        className="mt-4 py-4 fontText w-100  text-dark p-3 posheghit "
                        placeholder="الاسم الاول*"
                        {...register('firstName', {
                            required: 'الرجاء كتابة اسمك الأول كما في الهوية الوطنية الخاصة بك',
                            maxLength: {
                                value: 6,
                                message: 'الاسم يجب ألا يزيد عن 6 أحرف',
                            }
                        })}
                    />
                    {errors.firstName && <small className="text-danger flex-start">{errors.firstName.message}</small>}

                    <input
                        type="text"
                        className="mt-4 py-4 fontText w-100  text-dark p-3 posheghit "
                        placeholder="الكنية*"
                        {...register('lastName', {
                            required: 'يرجى كتابة اسم عائلتك كما هو الحال في هويتك الوطنية',
                        })}
                    />
                    {errors.lastName && <small className="text-danger flex-start">{errors.lastName.message}</small>}

                    <input
                        type="text"
                        className="mt-4 py-4 fontText w-100  text-dark p-3 posheghit "
                        placeholder="رقم الهاتف*"
                        {...register('phone', {
                            required: 'اكتب رقم هاتف صالح للمتابعة',
                            pattern: {
                                value: /^(010|011|012|015)\d{8}$/,
                                message: 'يرجى إدخال رقم هاتف مصري صحيح مكون من 11 رقمًا',
                            }
                        })}
                    />
                    {errors.phone && <small className="text-danger flex-start">{errors.phone.message}</small>}

                    <button type="submit" className="fontText btnn w-100 mt-5">
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
