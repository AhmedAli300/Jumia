import React, { useEffect, useState, useRef } from 'react';
import '../Login/Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmailThunk } from '../../store/Slice/authSlice';

const Sign1 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailValue = useSelector(state => state.auth.email) || localStorage.getItem('email');

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

        const result = await dispatch(verifyEmailThunk({ passwordResetCode }));

        if (verifyEmailThunk.fulfilled.match(result)) {
            console.log(" الكود صحيح");
            navigate('/sign');
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
                    <img src="/imgs07.png" alt="logo" width="65px" />
                </div>
                <h5 className="my-3 fontText" style={{ fontWeight: 400, fontSize: '16px' }}>
                    اكد علي بريدك الالكتروني                </h5>
                <p className="text-muted mb-4 fontText tttt" >
                    نرسل رمز تحقق إلى: <br />   {emailValue}             </p>

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

export default Sign1;
