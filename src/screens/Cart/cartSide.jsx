import { useNavigate } from "react-router-dom";

const CartSide = ({ cart }) => {
    const navigate = useNavigate();
  return (
    <div className="col-lg-3">
      <div className="cart-side p-3">
        <h6 style={{ fontSize: "16px" }} className="fontText">ملخص سلة التسوق</h6>
        <hr className="text-muted my-2" />
        <div className="d-flex justify-space-between">
          <h6 className="ms-5 fontText">الإجمالي</h6>
          <h6 className="fw-bold fs-5">{cart?.cartTotal?.toFixed(2)} جنيه</h6>
        </div>

        <hr className="text-muted my-2" />
        <div className="d-flex align-items-center mx-2 mx-lg-0 gap-2 und-line my-0">
          <i className="bi bi-check2-circle fs-4 ttt" style={{ color: "#4d861c" }}></i>
          <p className="f-10" style={{ fontSize: "14px" }}>
            منتجات جوميا اكسبريس مؤهلة للشحن المجاني<br />
            <img
              className="express-img"
              src="jumia-express.png"
              alt="Jumia Express"
              width="120px"
            />
          </p>
        </div>

        <hr className="text-muted my-2" />
        <button
          onClick={() => navigate('/order',{state: { cart }})}
          className="btn w-100 text-light mt-0 fontText"
          style={{
            backgroundColor: "#f68b1e",
            borderRadius: "none",
            padding: "10px",
            fontSize: "16px"
          }}
          
        >
          الإجمالي ({cart?.cartTotal?.toFixed(2)} جنيه)
        </button>
      </div>
    </div>
  );
};

export default CartSide;
