import React from 'react';
import '../Login/Login.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveStepData } from '../../store/Slice/authSlice';
import { signUp } from '../../store/Slice/authSlice';

const Sign4 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const stepData = useSelector((state) => state.auth.signupData);
    console.log("data", stepData)
    const { handleSubmit } = useForm();

    const onSubmit = async () => {
        dispatch(signUp(stepData));
        navigate('/login');
    };

    return (
        <div className="login-container">
            <div className="log-box">
                <div className="mb-3">
                    <img src="/imgs07.png" alt="logo" width="65px" />
                </div>

                <h5 className="my-3 fontText" style={{ fontWeight: 400, fontSize: '16px' }}>
                    من فضلك قم بتاكيد هويتك
                </h5>
                <h5 className="my-3 fontText tttt">قم بإكمال عملية التحقق لتتلقي رسالة نصية.</h5>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <button type="submit" className="fontText btnn w-100 mt-5">
                        ارسل رساله نصيه
                    </button>
                </form>

                <div className="foo0ter fontText" style={{ fontSize: '14px', fontWeight: 700, marginTop: '350px' }}>
                    <div className="mt-4">
                        <img src="https://my.jumia.com.eg/pictures/myjumia/myjumia-bottom-logo.png" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sign4;
