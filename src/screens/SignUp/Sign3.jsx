import React, { useState } from 'react';
import '../Login/Login.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveStepData } from '../../store/Slice/authSlice';

const Sign3 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const [agreed, setAgreed] = useState(false);
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
        setValue("Gender", selectedGender);
    };

    const onSubmit = (data) => {
        const sendData = {
            gender: data.Gender,
            dateOfBirth: data.DOfP,
        };
        console.log("data3", sendData)

        dispatch(saveStepData(sendData));
        navigate('/sign4');
    };

    return (
        <>
            <div className="login-container">
                <div className="log-box">
                    <div className="mb-3">
                        <img src="/imgs07.png" alt="logo" width="65px" />
                    </div>

                    <h5 className="my-3 fontText" style={{ fontWeight: 400, fontSize: '16px' }}>تفاصيل شخصية</h5>
                    <h5 className="my-3 fontText tttt">نحن على وشك الانتهاء ... بعض التفاصيل الإضافية</h5>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3 dropdown mt-5">
                            <div className="btn-group w-100">
                                <button
                                    type="button"
                                    className="btn dropdown-toggle border border-dark w-100 d-flex justify-content-between align-items-center p-3"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span className={`dropdown-text ${!gender ? 'text-muted' : ''}`}>
                                        {gender || 'الجنس *'}
                                    </span>
                                </button>

                                <ul className="dropdown-menu w-100 text-end">
                                    <li>
                                        <button className="dropdown-item" type="button" onClick={() => handleGenderSelect("male")}>male</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" type="button" onClick={() => handleGenderSelect("female")}>female</button>
                                    </li>
                                </ul>
                            </div>
                            <input type="hidden" value={gender} {...register("Gender", { required: true })} />
                            {errors.Gender && (
                                <span className="text-danger d-block mt-1">من فضلك اختر الجنس</span>
                            )}
                        </div>

                        <div className="mb-4 position-relative">
                            <input
                                type="date"
                                className="mt-4 py-4 fontText w-100 text-dark p-3 posheghit position-relative d-flex"
                                value={birthdate}
                                {...register("DOfP", { required: true })}
                                onChange={(e) => setBirthdate(e.target.value)}
                            />
                            {!birthdate && (
                                <span className="fake-placeholder position-absolute">تاريخ الميلاد *</span>
                            )}
                            {errors.DOfP && (
                                <span className="text-danger d-block mt-1">من فضلك ادخل تاريخ ميلاد صحيح</span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className={`fontText w-100 mt-4 btnn ${!agreed ? 'disabled-btn' : ''}`}
                            disabled={!agreed}
                        >
                            استمر
                        </button>

                        <div className="form-check text-center mt-2">
                            <input
                                className="checkboxinput"
                                type="checkbox"
                                id="terms"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                            />
                            <label className="form-check-label me-2" htmlFor="terms">
                                قرأت ووافقت على <a href="#" className="text-decoration-none yellow">الشروط والأحكام</a>
                            </label>
                        </div>
                    </form>
                </div>
            </div>

            <div className="fontText d-flex margn" style={{ fontSize: '12px', fontWeight: 700, marginTop: "100px" }}>
                <div>
                    <img src="https://my.jumia.com.eg/pictures/myjumia/myjumia-bottom-logo.png" alt="logo" />
                </div>
                <div className='text-center mxx'>
                    لمزيد من الدعم، يمكنك زيارة مركز المساعدة أو الاتصال بفريق خدمة العملاء.
                </div>
            </div>
        </>
    );
};

export default Sign3;
