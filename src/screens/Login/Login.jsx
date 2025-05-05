
import './login.css'
const Login = () => {

  return (
    <div className="login-container">
      <div className="log-box">
        <div className="mb-3">
          <img src="/imgs07.png" alt="logo" width="65px" />
        </div>

        <h5 className="my-3" style={{ fontWeight: 400, fontSize: '18px' }}>
          مرحبًا بكم في <strong>Jumia</strong>
        </h5>

        <p className="text-muted mb-5" style={{ fontSize: '13px', fontWeight: 500 }}>
          اكتب بريدك الإلكتروني أو رقم هاتفك لتسجيل الدخول أو إنشاء حساب على
          Jumia
        </p>

        <form >
          <div className="mb-3">
            <input
              type="email"
              className="form-control my-5"
              placeholder="عنوان البريد الإلكتروني أو رقم الهاتف*"
              required
              style={{ fontSize: '15px' }}
            />
          </div>
          <button type="submit" className="btn btnn w-100">
            استمرار
          </button>
        </form>

        <p
          className="text-muted mt-2 text-dark me-5"
          style={{
            fontSize: '12px',
            color: '#333',
            marginBottom: '30px',
          }}
        >
          من خلال التسجيل فأنك توافق على <br />
          <a
            href="#"
            className="py-3"
            style={{ color: '#f8982d', fontSize: '12px' }}
          >
            الشروط والأحكام
          </a>
        </p>

        <button
          className="btn  btnn btn-facebook w-100 mt-5 d-flex align-items-center justify-content-between"
        >
          <i
            className="fa-brands fa-facebook fs-5 mx-1"
            style={{
              color: '#fff',
              fontSize: '20px',
              marginLeft: '100px',
            }}
          ></i>
          تسجيل الدخول باستخدام الفيسبوك
        </button>
      </div>

      <div
        className="foo0ter mt-5"
        style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '-0.5px' }}
      >
        لمزيد من الدعم ، يمكنك زيارة مركز المساعدة أو الاتصال بفريق خدمة
        العملاء.
        <br />
        <div className="mt-4">
          <img
            src="https://my.jumia.com.eg/pictures/myjumia/myjumia-bottom-logo.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}


export default Login;
