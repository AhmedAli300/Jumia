import React, { useEffect } from "react";
import "../../App.css";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addItem, fetchCart } from '../../store/Slice/cartSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  // console.log(product);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
    // console.log(product.id);

  }, []);
  const navigate = useNavigate();

  const dispatch = useDispatch();


  const handleAddToCart = () => {
    dispatch(addItem({ productId: product.product?._id, quantity: 1 }))
      .then(() => {
        toast.success('تمت إضافة المنتج للسلة بنجاح');
        navigate('/cart');
        dispatch(fetchCart());
      })
      .catch(() => {
        toast.error('حدث خطأ أثناء إضافة المنتج للسلة');
      });
  };

  return (
    <>
      <main className="row g-0 d-flex justify-content-center bg-gray">
        <section className="col-12 col-sm-7 mt-5 ms-3">
          <div className="bg-body-tertiary rounded">
            <div className="row d-flex p-3">
              {console.log(product.product?.images[0]?.secure_url)}
              {console.log(product.product)}

              <div className="col-sm-12 col-md-4">
                <img
                  src={product.product?.images[0]?.secure_url}
                  alt={product.product?.name}
                  height="300"
                  className="w-100"
                />
                <img
                  src={product.product?.images[1]?.secure_url}
                  alt={product.product?.name}
                  height="50"
                  className="pt-2"
                />
                <img
                  src={product.product?.images[2]?.secure_url}
                  alt={product.product?.name}
                  height="50"
                  className="pt-2"
                />
                <img
                  src={product.product?.images[3]?.secure_url}
                  alt={product.product?.name}
                  height="50"
                  className="pt-2"
                />
                <img
                  src={product.product?.images[4]?.secure_url}
                  alt={product.product?.name}
                  height="50"
                  className="pt-2"
                />
                <hr />
                <p>مشاركة المنتج</p>
                <span>
                  <i className="fa-brands fa-facebook"></i>
                </span>
                <span>
                  <i className="fa-brands fa-x-twitter"></i>
                </span>
                <br />
                <br />
                <br />
                <p>
                  <a
                    href="#"
                    className="link-underline link-underline-opacity-0"
                  >
                    ابلاغ عن بيانات غير صحيحه فى المنتج
                  </a>
                </p>
              </div>

              <div className="pe-2 col-sm-12 col-md-8">
                <h5>
                  {product.product?.name}
                  <i className="fa-regular fa-heart pe-5 text-warning"></i>
                </h5>
                <p>
                  الماركة :{""}
                  <a
                    href="#"
                    className="link-underline link-underline-opacity-0"
                  >
                    kraimed
                  </a>{" "}
                  |
                  <a
                    href="#"
                    className="link-underline link-underline-opacity-0"
                  >
                    {" "}
                    منتجات مشابه من kraimed
                  </a>
                </p>
                <hr />
                <p>
                  {/* <del>25.00 جنيه</del> */}
                  <span className="bg-warning me-2 p-1">%20-</span>
                  <span className="fw-bolder">{product?.product?.price}</span>
                </p>
                <p>{product?.product?.stock > 0 ? `${product?.product?.stock} : in stock ` : "out of stock"}</p>
                <p>شحن مجاني الي 6 اكتوبر</p>
                <p>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-secondary"></i>
                  <a
                    href="#"
                    className="link-underline link-underline-opacity-0 me-2"
                  >
                    (98 تقيات موثقه للمنتج)
                  </a>
                </p>
                <div className="d-grid gap-2 mt-2 bg-body-tertiary rounded">
                  {/* <button className="btn orang text-light" type="button">
                    <i className="fa-solid fa-cart-shopping ms-5"></i>اضافة لسلة
                    التسوق
                  </button> */}

                  <button className="btn orang text-light" type="button"
                    onClick={handleAddToCart}
                  >
                    <i className="fa-solid fa-cart-shopping ms-5"></i>
                    اضافة لسلة التسوق

                  </button>

                </div>
                <hr />
                <p>عروض</p>
                <p>
                  <a
                    href="#"
                    className="link-underline link-underline-opacity-0"
                  >
                    <i className="fa-solid fa-shield-halved ps-2"></i>اشترى
                    دلوقتى وادفع بعدين قسط براحتك بدون فوايد
                  </a>
                </p>
                <a href="#" className="link-underline link-underline-opacity-0">
                  <i className="fa-solid fa-paper-plane ps-2 text-warning"></i>
                  توصيل مجانى للطلبات الاكثر من 200 جنيه.
                </a>
              </div>
            </div>
          </div>

          {/* <div className="col-md-6 col-lg-12 mt-3">
            <div className="bg-body-tertiary rounded">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="h5 m-2">المنتجات المدعومة</h3>
              </div>

              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-6 g-3 mx-2 pb-2 pt-0 ">
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="product-card">
                    <div className="position-relative">
                      <img
                        src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/0016121/1.jpg?5624"
                        alt="LC Waikiki Basic Long Sleeve"
                        className="product-img"
                      />
                      <span className="discount-badge">-13%</span>
                    </div>
                    <div className="p-3">
                      <h3 className="product-title">
                        Sanosan Nappy Rash Cream 150 Ml
                      </h3>
                      <div className="mt-2">
                        <span className="current-price">435.00 جنيه</span>
                        <span className="old-price ms-2">500.00 جنيه</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-none d-md-block">
                  <div className="product-card">
                    <div className="position-relative">
                      <img
                        src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/920537/1.jpg?6424"
                        alt="Multi-purpose Bag"
                        className="product-img"
                      />
                      <span className="discount-badge">-31%</span>
                    </div>
                    <div className="p-3">
                      <h3 className="product-title">
                        Quidado Kids كويدادو بيبي كريم لالتهابات الحفاض
                      </h3>
                      <div className="mt-2">
                        <span className="current-price">45.00 جنيه</span>
                        <span className="old-price ms-2">65.00 جنيه</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-none d-md-block">
                  <div className="product-card">
                    <div className="position-relative">
                      <img
                        src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/8170421/1.jpg?0693"
                        alt="LC Waikiki Hooded Long"
                        className="product-img"
                      />
                      <span className="discount-badge">-25%</span>
                    </div>
                    <div className="p-3">
                      <h3 className="product-title">
                        SudKids Cream Smoothing For Diaper Area 240gm
                      </h3>
                      <div className="mt-2">
                        <span className="current-price">264.00 جنيه</span>
                        <span className="old-price ms-2">350.00 جنيه</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 d-none d-lg-block">
                  <div className="product-card">
                    <div className="position-relative">
                      <img
                        src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/602262/1.jpg?5285"
                        alt="LC Waikiki Basic Long Sleeve"
                        className="product-img"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="product-title">
                        MAQAM مقام هابينيس كريم الحفاظات 125 جرام
                      </h3>
                      <div className="mt-2">
                        <span className="current-price">125.00 جنيه</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="bg-body-tertiary rounded mt-3" id="des1">
            <div className="d-flex justify-content-between">
              <h6 className="h5 pt-3 pe-3 fw-bolder">مواصفات المنتج</h6>
              <p className="pe-2">
                <a href="#" className="link-underline link-underline-opacity-0">
                  <i className="fa-solid fa-ellipsis"></i>
                </a>
              </p>
            </div>
            <hr className="p-0" />
            <ul className="m-2 pb-2 fs">
              <li className=" m-2">
                من المحتمل أن يصاب طفلك بطفح جلدي من الحفاض خلال السنوات القليلة
                الأولى من حياته. هذا التهيج شائع ويظهر عادة على شكل جلد أحمر
                وملتهب مع نتوءات بارزة.
              </li>
              <li className=" m-2">
                يمكن أن يكون سبب الطفح الجلدي الناتج عن الحفاضات عدة عوامل ، بما
                في ذلك تكرار تغيير الحفاضات ، والفرك ، والجلد الحساس.
              </li>
              <li className=" m-2">
                يمكنك إعطاء طفلك راحة سريعة من خلال وضع الكريمات أو المستحضرات
                المناسبة على المنطقة المصابة والتي يجب أن تكون غنية بالمرطبات
                مثل الزيوت الطبيعية والجلسرين النباتي والعسل وزبدة الشيا
                والألانتوين وأكسيد الزنك
              </li>
              <li className="m-2">
                كريم وينك برو للأطفال لمنطقة الحفاضات ، من فوائد هذا المنتج أن
                المكونات طبيعية بالكامل. يحتوي الكريم على زيت الزيتون وزيت
                الجوجوبا والجلسرين والعسل الطبيعي وزبدة الشيا ، وكلها تعمل على
                تنعيم وتجديد بشرة طفلك فى تركيبة كريم غير دهنى خفيف القوام غنى
                التأثير وسريع الإمتصاص .
              </li>
            </ul>
          </div> */}

          <div className="details-container bg-body-tertiary rounded mt-3" id="des2">
            <h3 className="p-2 ">المواصفات</h3>
            <p className="pe-2">
              <a href="#" className="link-underline link-underline-opacity-0">
                <i className="fa-solid fa-ellipsis"></i>
              </a>
            </p>

            <div className="row g-4">

              <div className="col-lg-5 col-sm-5 me-5">
                <div className="card specs-card h-100">
                  <div className="card-header bg-white">
                    <h5 className="mb-0">المواصفات الرئيسية</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">{product?.product?.name}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-5   mb-3 me-5">
                <div className="card specs-card">
                  <div className="card-header bg-white">
                    <h5 className="mb-0">المواصفات</h5>
                  </div>
                  <div className="card-body">
                    <div className="spec-row">
                      <span className="spec-value">{product?.product?.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-body-tertiary rounded mt-3" id="des3">
            <div className="feedback-container">

              <div className="header-section">
                <h2 className="h5 mb-0">آراء العملاء الموثقة</h2>
                <a href="#" className="see-all">عرض الكل &gt;</a>
              </div>


              <div className="ratings-review-tabs">
                <a href="#" className="tab">تقييمات موثقة للمنتج <span>(98)</span></a>
                <a href="#" className="tab">تعليقات المنتج <span>(19)</span></a>
              </div>

              <div className="row">

                <div className="col-md-4">
                  <div className="rating-summary">
                    <div className="average-rating">3.8<span className="rating-scale">/5</span></div>
                    <div className="stars mb-2">
                      <span className="star">★</span>
                      <span className="star">★</span>
                      <span className="star">★</span>
                      <span className="star">★</span>
                      <span className="star empty-star">★</span>
                    </div>
                    <div className="text-muted">98 ‎تقييمات موثقة للمنتج</div>
                  </div>


                  <div className="rating-bars">
                    <div className="rating-row">
                      <div className="rating-label">5</div>
                      <div className="rating-count">(3)</div>
                      <div className="rating-bar">
                        <div className="rating-fill" style={{ "width": "50%" }}></div>
                      </div>
                    </div>
                    <div className="rating-row">
                      <div className="rating-label">4</div>
                      <div className="rating-count">(1)</div>
                      <div className="rating-bar">
                        <div className="rating-fill" style={{ "width": "16.7%" }}></div>
                      </div>
                    </div>
                    <div className="rating-row">
                      <div className="rating-label">3</div>
                      <div className="rating-count">(1)</div>
                      <div className="rating-bar">
                        <div className="rating-fill" style={{ "width": "16.7%" }}></div>
                      </div>
                    </div>
                    <div className="rating-row">
                      <div className="rating-label">2</div>
                      <div className="rating-count">(0)</div>
                      <div className="rating-bar">
                        <div className="rating-fill" style={{ "width": "0%" }}></div>
                      </div>
                    </div>
                    <div className="rating-row">
                      <div className="rating-label">1</div>
                      <div className="rating-count">(1)</div>
                      <div className="rating-bar">
                        <div className="rating-fill" style={{ "width": "16.7%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-md-8">
                  <div className="review-section">
                    <div className="review">
                      <div className="review-rating">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                      </div>
                      <div className="review-title">ممتاز</div>
                      <div className="review-content mb-2">ممتاز</div>
                      <div className="review-meta">
                        <span>19-01-2025 بواسطة Samar</span>
                        <span className="verified-badge">
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path
                              d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                          </svg>
                          شراء موثق
                        </span>
                      </div>
                    </div>
                    <div className="review">
                      <div className="review-rating">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                      </div>
                      <div className="review-title">جمييل</div>
                      <div className="review-content mb-2">تحفه وبيدي طبقه حمايه حلوة...اشتريت منه تاني</div>
                      <div className="review-meta">
                        <span>19-01-2025 بواسطة Samar</span>
                        <span className="verified-badge">
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path
                              d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                          </svg>
                          شراءموثق
                        </span>
                      </div>
                    </div>
                    <div className="review">
                      <div className="review-rating">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                      </div>
                      <div className="review-title">جيد لكن لم يناسب طقلي</div>
                      <div className="review-content mb-2">غير مناسب للبشرة الحساسة</div>
                      <div className="review-meta">
                        <span>19-01-2025 بواسطة Amira</span>
                        <span className="verified-badge">
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path
                              d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                          </svg>
                          شراء موثق
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="col-12 col-sm-3 mt-5">
          <div
            className="bg-body-tertiary rounded p-3"
            style={{ height: "auto" }}
          >
            <h6 className="ps-2 pe-2">التوصيل والارجاع</h6>
            <hr className="p-0" />
            <img
              src="/download (1).jpeg"
              alt="jumia"
              height="50"
              width="150"
            />
            <p>
              توصيل سريع في المدن الرئيسية{" "}
              <a href="#" className="link-underline link-underline-opacity-0">
                التفاصيل
              </a>
            </p>
            <hr />
            <h6>اختار العنوان</h6>
            <select
              className="form-select p-3"
              aria-label="Default select example"
              dir="ltr"
            >
              <option hidden>الجيزه</option>
              {/* باقي الاختيارات هنا */}
            </select>

            <select
              className="form-select mt-2 p-3"
              aria-label="Default select example"
              dir="ltr"
            >
              <option hidden>6 اكتوبر</option>
              {/* باقي الاختيارات هنا */}
            </select>

            <div className="mt-2 d-flex justify-content-between">
              <div className="d-flex gap-2">
                <img
                  src="/Screenshot 2025-01-27 173404.png"
                  alt="محطة الاستلام"
                  height="50"
                  width="50"
                />
                <div>
                  محطة الاستلام
                  <p>free delivery</p>
                </div>
              </div>
              <a href="#">تفاصيل</a>
            </div>
            <p className="me-5">
              جاهز للاستلام في يوم ٢٨ يناير إذا أكملت طلبك خلال ‎39mins‎
            </p>

            <div className="mt-2 d-flex justify-content-between">
              <div className="d-flex gap-2">
                <img
                  src="/Screenshot 2025-01-27 180507.png"
                  alt=""
                  height="50"
                  width="50"
                />
                <div>
                  توصيل المنزل
                  <p>free delivery</p>
                </div>
              </div>
              <a href="#">تفاصيل</a>
            </div>
            <p className="me-5">
              مصاريف الشحن ‎35.00 جنيه‎ (شحن مجاني عند الطلب بـ ‎200.00 جنيه‎ أو
              اكتر)
            </p>
            <hr />

            <div className="mt-2 d-flex gap-2">
              <img
                src="/Screenshot 2025-01-27 180949.png"
                alt=""
                height="50"
                width="50"
              />
              <div>
                محطة الاستلام
                <p>يمكنك ارجاع اغلب المنتجات خلال 14-30 يوم ...</p>
              </div>
            </div>

            <div className="mt-2 d-flex gap-2">
              <img
                src="/Screenshot 2025-01-27 181107.png"
                alt=""
                height="50"
                width="50"
              />
              <div>
                الضمان
                <p>مسجل بوزارة الصحة</p>
              </div>
            </div>
          </div>

          <div className="mt-3 ps-2 pe-2 pt-2 bg-body-tertiary rounded">
            <div className="d-flex justify-content-between">
              <h6>بيانات البائع</h6>
              <p>&gt;</p>
            </div>
            <hr />
            <h6>TETRACHEM</h6>
            <div className="d-flex justify-content-between">
              <div>
                <p>86% تقييم البائع</p>
                <p>599 المتابعين</p>
              </div>
              <div>
                <button type="button" className="btn orang text-light">
                  Warning
                </button>
              </div>
            </div>
            <hr />
            <h6>
              أداء البائع{" "}
              <img src="/Screenshot 2025-01-28 161248.png" alt="" />
            </h6>
            <ul type="none">
              <li>
                <i className="fa-solid fa-star"></i> معدل سرعه توصيل الطلب:
                ممتاز
              </li>
              <li>
                <i className="fa-solid fa-star"></i> تقييم الجودة: جيد
              </li>
              <li>
                <i className="fa-solid fa-check"></i> تقييم العملاء: متوسط
              </li>
            </ul>
          </div>

          <div className="mt-3 ps-2 pe-2 pt-2 bg-body-tertiary rounded">
            <div className="list-group">
              <button
                type="button"
                className="list-group-item list-group-item-action active-background"
                aria-current="true"
              >
                <i className="fa-solid fa-file"></i><a href="#des1" style={{ "textDecoration": "none" }}> مواصفات المنتج</a> </button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                <i className="fa-solid fa-list"></i><a href="#des2" style={{ "textDecoration": "none" }}> المواصفات
                </a></button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
              >
                <i className="fa-brands fa-ideal"></i><a href="#des3" style={{ "textDecoration": "none" }}> اراء العملاء الموثقه
                </a></button>
            </div>
          </div>

          <div className="mt-3 ps-2 pe-2 pt-2 bg-body-tertiary rounded">
            <div className="d-flex">
              <img src="./images/1.jpg" alt="" />
              <div>
                <p>Karimed وينك برو كريم ل...</p>
                <h5>19.90 جنيه</h5>
                <sub>
                  <del>25.00 جنيه</del>
                  <span className="bg-warning me-2 p-1">%20-</span>
                </sub>
              </div>
            </div>
            <div className="d-grid gap-2 mt-2 bg-body-tertiary rounded">
              <button className="btn orang text-light" type="button">
                <i className="fa-solid fa-cart-shopping ms-5"></i>اضافة لسلة
                التسوق
              </button>
            </div>
          </div>
        </aside>

        <section className="col-12 col-sm-10 mt-5 ms-3">
          <div className="row mb-2">
            <div className="col-md-6 col-lg-12">
              <div className="bg-body-tertiary rounded">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="h5 m-2">مزيد من المنتجات من هذا البائع</h3>
                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-6 g-3 mx-2 pb-2 pt-0 ">
                  <div className="col-12 col-md-6 col-lg-2">
                    <div className="product-card">
                      <div className="position-relative">
                        <img
                          src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/615072/1.jpg?8467"
                          alt="LC Waikiki Basic Long Sleeve"
                          className="product-img"
                        />
                        <span className="discount-badge">-46%</span>
                      </div>
                      <div className="p-3">
                        <h3 className="product-title">
                          BUNNY BOUND اليفانا باني باوند كريم حفاضات للأطفال 100
                          مل
                        </h3>
                        <div className="mt-2">
                          <span className="current-price">299.00 جنيه</span>
                          <span className="old-price ms-2">549.00 جنيه</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-2 d-none d-md-block">
                    <div className="product-card">
                      <div className="position-relative">
                        <img
                          src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/542705/1.jpg?9805"
                          alt="Multi-purpose Bag"
                          className="product-img"
                        />
                        <span className="discount-badge">-36%</span>
                      </div>
                      <div className="p-3">
                        <h3 className="product-title">
                          Johnson'S Baby بلسم للاطفال بسعة 300 ملم من جونسون
                        </h3>
                        <div className="mt-2">
                          <span className="current-price">121.77 جنيه</span>
                          <span className="old-price ms-2">190.00 جنيه</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-2 d-none d-md-block">
                    <div className="product-card">
                      <div className="position-relative">
                        <img
                          src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/615072/1.jpg?8647"
                          alt="LC Waikiki Hooded Long"
                          className="product-img"
                        />
                        <span className="discount-badge">-43%</span>
                      </div>
                      <div className="p-3">
                        <h3 className="product-title">
                          Karimed وينك برو كريم لطفح الحفاضات للأطفال 30جم 3قطع
                        </h3>
                        <div className="mt-2">
                          <span className="current-price">399.00 جنيه</span>
                          <span className="old-price ms-2">699.00 جنيه</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 d-none d-lg-block">
                    <div className="product-card">
                      <div className="position-relative">
                        <img
                          src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/199052/1.jpg?1796"
                          alt="LC Waikiki Basic Long Sleeve"
                          className="product-img"
                        />
                        <span className="discount-badge">-46%</span>
                      </div>
                      <div className="p-3">
                        <h3 className="product-title">
                          Blankie بلانكي كريم امضاد لالتهاب الحفاضات 75 ملي
                        </h3>
                        <div className="mt-2">
                          <span className="current-price">299.00 جنيه</span>
                          <span className="old-price ms-2">549.00 جنيه</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 d-none d-lg-block">
                    <div className="product-card">
                      <div className="position-relative">
                        <img
                          src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/199052/1.jpg?1796"
                          alt="LC Waikiki Basic Long Sleeve"
                          className="product-img"
                        />
                        <span className="discount-badge">-46%</span>
                      </div>
                      <div className="p-3">
                        <h3 className="product-title">
                          Blankie بلانكي كريم امضاد لالتهاب الحفاضات 75 ملي
                        </h3>
                        <div className="mt-2">
                          <span className="current-price">299.00 جنيه</span>
                          <span className="old-price ms-2">549.00 جنيه</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 d-none d-lg-block">
                    <div className="product-card">
                      <div className="position-relative">
                        <img
                          src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/199052/1.jpg?1796"
                          alt="LC Waikiki Basic Long Sleeve"
                          className="product-img"
                        />
                        <span className="discount-badge">-46%</span>
                      </div>
                      <div className="p-3">
                        <h3 className="product-title">
                          Blankie بلانكي كريم امضاد لالتهاب الحفاضات 75 ملي
                        </h3>
                        <div className="mt-2">
                          <span className="current-price">299.00 جنيه</span>
                          <span className="old-price ms-2">549.00 جنيه</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-6 col-lg-12">
              <div className="bg-body-tertiary rounded">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="h5 m-2">المنتجات التي تمت مشاهدتها مؤخرًا</h3>
                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-6 g-3 mx-2 pb-2 pt-0 ">
                  <div className="col-12 col-md-6 col-lg-2">
                    <div className="product-card">
                      <div className="position-relative">
                        <img
                          src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/370622/1.jpg?5293"
                          alt="LC Waikiki Basic Long Sleeve"
                          className="product-img"
                        />
                        <span className="discount-badge">-46%</span>
                      </div>
                      <div className="p-3">
                        <h3 className="product-title">
                          BUNNY BOUND اليفانا باني باوند كريم حفاضات للأطفال 100
                          مل
                        </h3>
                        <div className="mt-2">
                          <span className="current-price">299.00 جنيه</span>
                          <span className="old-price ms-2">549.00 جنيه</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-2 d-none d-md-block">
                    <div className="product-card">
                      <div className="position-relative">
                        <img
                          src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/986884/1.jpg?4266"
                          alt="Multi-purpose Bag"
                          className="product-img"
                        />
                        <span className="discount-badge">-36%</span>
                      </div>
                      <div className="p-3">
                        <h3 className="product-title">
                          Johnson'S Baby بلسم للاطفال بسعة 300 ملم من جونسون
                        </h3>
                        <div className="mt-2">
                          <span className="current-price">121.77 جنيه</span>
                          <span className="old-price ms-2">190.00 جنيه</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-2 d-none d-md-block">
                    <div className="product-card">
                      <div className="position-relative">
                        <img
                          src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/603249/1.jpg?9767"
                          alt="LC Waikiki Hooded Long"
                          className="product-img"
                        />
                        <span className="discount-badge">-43%</span>
                      </div>
                      <div className="p-3">
                        <h3 className="product-title">
                          Karimed وينك برو كريم لطفح الحفاضات للأطفال 30جم 3قطع
                        </h3>
                        <div className="mt-2">
                          <span className="current-price">399.00 جنيه</span>
                          <span className="old-price ms-2">699.00 جنيه</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 d-none d-lg-block">
                    <div className="product-card">
                      <div className="position-relative">
                        <img
                          src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/199052/1.jpg?1796"
                          alt="LC Waikiki Basic Long Sleeve"
                          className="product-img"
                        />
                        <span className="discount-badge">-46%</span>
                      </div>
                      <div className="p-3">
                        <h3 className="product-title">
                          Blankie بلانكي كريم امضاد لالتهاب الحفاضات 75 ملي
                        </h3>
                        <div className="mt-2">
                          <span className="current-price">299.00 جنيه</span>
                          <span className="old-price ms-2">549.00 جنيه</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 d-none d-lg-block">
                    <div className="product-card">
                      <div className="position-relative">
                        <img
                          src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/5292421/1.jpg?8170"
                          alt="LC Waikiki Basic Long Sleeve"
                          className="product-img"
                        />
                        <span className="discount-badge">-46%</span>
                      </div>
                      <div className="p-3">
                        <h3 className="product-title">
                          Blankie بلانكي كريم امضاد لالتهاب الحفاضات 75 ملي
                        </h3>
                        <div className="mt-2">
                          <span className="current-price">299.00 جنيه</span>
                          <span className="old-price ms-2">549.00 جنيه</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetails;