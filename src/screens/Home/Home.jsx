import { useEffect, useState } from "react";
import Overlay from "../../Comoonents/Overlay/Overlay";
import "./Home.css";
// import { categories } from "./categpries";
import Products from "../Products/Product";
import axios from "axios";
import Carusel from "../../Comoonents/Carusel/Carusel";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/api/v1/categories")
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.error(err));
  }, []);
  console.log(categories);

 
  return (
    <>
      <section className="hero-section container mx-auto row p-3">
        <div
          className="d-inline-flex "
          onMouseLeave={() => setActiveCategory(null)}
        >
          <aside className="bg-white col-md-2 d-none d-md-flex flex-column justify-content-between text-end position-relative">
            <div className="cat-1">
              <div className="category-menu">
                {categories?.map((category) => (
                  <div
                    key={category._id}
                    className="category-item"
                    onMouseEnter={() => setActiveCategory(category)}
                  >
                    <a href="#" className="category-link">
                      {category.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <Carusel activeCategory={activeCategory} />

          <div className="cards col-md-2 d-none d-md-flex flex-column gap-3 h-100">
            <div className="bg-white p-2 shadow">
              <a
                href="#"
                className="text-decoration-none d-flex gap-3 align-items-center mb-3"
              >
                <img src="https://eg.jumia.is/cms/--/-jfaa.png" alt="" />
                <div>
                  <h6 className="">اشتغل استشاري مبيعات</h6>
                  <p>مع جوميا</p>
                </div>
              </a>
              <a
                href="#"
                className="text-decoration-none d-flex gap-3 align-items-center mb-3"
              >
                <img src="https://eg.jumia.is/cms/--/1.png" alt="" />
                <div>
                  <h6>بيع علي جوميا</h6>
                  <p>وزود مبيعاتك</p>
                </div>
              </a>
              <a
                href="#"
                className="text-decoration-none d-flex gap-3 align-items-center mb-3"
              >
                <img src="	https://eg.jumia.is/cms/--/4.png" alt="" />
                <div>
                  <h6>ضمان</h6>
                  <p>علي مشترياتك</p>
                </div>
              </a>
            </div>
            <div className="shadow">
              <a href="#">
                <img
                  className="w-100 h-auto"
                  src="https://eg.jumia.is/cms/DEC-24/Installments/218x184.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container second d-flex gap-2 p-2 bg-white my-md-3 my-1 rounded shadow-sm">
        <div className="">
          <img
            src="https://eg.jumia.is/cms/Valentine-25/Free-Links/MIVs/Flash-sale.gif"
            alt=""
          />
        </div>
        <div>
          <img
            className=" "
            src="	https://eg.jumia.is/cms/Valentine-25/Free-Links/MIVs/wheelARthumbnail.gif"
            alt=""
          />
        </div>
        <div>
          <img
            src="	https://eg.jumia.is/cms/Valentine-25/Free-Links/MIVs/VouchersAR.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="	https://eg.jumia.is/cms/Valentine-25/Free-Links/MIVs/DayAR.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="d-none d-md-block"
            src="https://eg.jumia.is/cms/Valentine-25/Free-Links/MIVs/AllAR.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="d-none d-md-block"
            src="https://eg.jumia.is/cms/Valentine-25/Free-Links/MIVs/ShopAR.png"
            alt=""
          />
        </div>
      </div>
      <div className="container d-none d-md-block mx-auto mb-3 bg-white p-2 rounded shadow">
        <img
          className="w-100 rounded"
          src="https://eg.jumia.is/cms/Valentine-25/HappyHour/Wednesday-29/Artboard1-5.jpg"
          alt=""
        />
      </div>

      <Products />
    </>
  );
};

export default Home;
