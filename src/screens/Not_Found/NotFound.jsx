import { useRouteError } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const error = useRouteError();

  return (
    <div className=" d-flex align-items-center min-vh-100 bg-light">
      <div className="container">
        <div className="row align-items-center text-center text-md-end px-5">
          <div className="col-md-6 mb-4 mb-md-0 px-5">
            <h3 className="fw-bold display-5 text-dark mb-3 fs-2">غير موجود</h3>
            <p className=" mb-2" style={{ color: '#000', fontSize: '16px' }}>
              لم نتمكن من العثور على الصفحة التي <br />تبحث عنها
            </p>
            <p className="text-muted mb-4" style={{ fontSize: '14px' }}>لدينا الملايين من المنتجات للتسوق!</p>
            <button
              className="btn btn-orange px-3 py-3 "
              onClick={() => (window.location.href = '/')}
            >
              الرجوع للصفحة الرئيسية
            </button>
          </div>
          <div className="col-md-6">
            <img
              src="https://www.jumia.com.eg/assets_he/images/people.9416a3fb.svg"
              alt="People"
              className="img-fluid"
              width={400}
              height={400}
            />
          </div>
        </div>

        {error?.message && (
          <div className="text-center mt-5 text-danger">
            <h4>{error.message}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFound;
