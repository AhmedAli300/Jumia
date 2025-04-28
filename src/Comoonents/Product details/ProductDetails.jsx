import React from 'react'
import '../../App.css'

const ProductDetails = () => {
  return (
    <>
    
         <main className="row g-0 d-flex justify-content-center bg-gray">
      <section className="col-12 col-sm-7 mt-5 ms-3">
        <div className="bg-body-tertiary rounded">
          <div className="row d-flex p-3">
            <div className="col-sm-12 col-md-4">
              <img src="./images/1.jpg" alt="Product" height="300" className="w-100" />
              <img src="./images/1.jpg" alt="Product" height="50" className="pt-2" />
              <img src="./images/2.jpg" alt="Product" height="50" className="pt-2" />
              <img src="./images/3.jpg" alt="Product" height="50" className="pt-2" />
              <hr />
              <p>مشاركة المنتج</p>
              <span><i className="fa-brands fa-facebook"></i></span>
              <span><i className="fa-brands fa-x-twitter"></i></span>
              <br /><br /><br />
              <p><a href="#" className="link-underline link-underline-opacity-0">ابلاغ عن بيانات غير صحيحه فى المنتج</a></p>
            </div>

            <div className="pe-2 col-sm-12 col-md-8">
              <h5>
                Karimed وينك برو كريم لطفح الحفاضات للأطفال 30جم <i className="fa-regular fa-heart me-5 text-warning"></i>
              </h5>
              <p>
                الماركة : <a href="#" className="link-underline link-underline-opacity-0">kraimed</a> |
                <a href="#" className="link-underline link-underline-opacity-0"> منتجات مشابه من kraimed</a>
              </p>
              <hr />
              <p>
                <span className="fw-bolder">19.90 جنيه </span>
                <del>25.00 جنيه</del>
                <span className="bg-warning me-2 p-1">%20-</span>
              </p>
              <p>In stock</p>
              <p>شحن مجاني الي 6 اكتوبر</p>
              <p>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-secondary"></i>
                <a href="#" className="link-underline link-underline-opacity-0 me-2">(98 تقيات موثقه للمنتج)</a>
              </p>
              <div className="d-grid gap-2 mt-2 bg-body-tertiary rounded">
                <button className="btn orang text-light" type="button">
                  <i className="fa-solid fa-cart-shopping ms-5"></i>اضافة لسلة التسوق
                </button>
              </div>
              <hr />
              <p>عروض</p>
              <p>
                <a href="#" className="link-underline link-underline-opacity-0">
                  <i className="fa-solid fa-shield-halved ps-2"></i>اشترى دلوقتى وادفع بعدين قسط براحتك بدون فوايد
                </a>
              </p>
              <a href="#" className="link-underline link-underline-opacity-0">
                <i className="fa-solid fa-paper-plane ps-2 text-warning"></i>توصيل مجانى للطلبات الاكثر من 200 جنيه.
              </a>
            </div>
          </div>
        </div>
      </section>

      <aside className="col-12 col-sm-3 mt-5">
        <div className="bg-body-tertiary rounded p-3" style={{ height: 'auto' }}>
          <h6 className="ps-2 pe-2">التوصيل والارجاع</h6>
          <hr className="p-0" />
          <img src="./images/download (1).jpeg" alt="jumia" height="50" width="150" />
          <p>توصيل سريع في المدن الرئيسية <a href="#" className="link-underline link-underline-opacity-0">التفاصيل</a></p>
          <hr />
          <h6>اختار العنوان</h6>
          <select className="form-select p-3" aria-label="Default select example" dir="ltr">
            <option hidden>الجيزه</option>
            {/* باقي الاختيارات هنا */}
          </select>

          <select className="form-select mt-2 p-3" aria-label="Default select example" dir="ltr">
            <option hidden>6 اكتوبر</option>
            {/* باقي الاختيارات هنا */}
          </select>

          <div className="mt-2 d-flex justify-content-between">
            <div className="d-flex gap-2">
              <img src="./images/Screenshot 2025-01-27 173404.png" alt="" height="50" width="50" />
              <div>
                محطة الاستلام
                <p>free delivery</p>
              </div>
            </div>
            <a href="#">تفاصيل</a>
          </div>
          <p className="me-5">جاهز للاستلام في يوم ٢٨ يناير إذا أكملت طلبك خلال ‎39mins‎</p>

          <div className="mt-2 d-flex justify-content-between">
            <div className="d-flex gap-2">
              <img src="./images/Screenshot 2025-01-27 180507.png" alt="" height="50" width="50" />
              <div>
                توصيل المنزل
                <p>free delivery</p>
              </div>
            </div>
            <a href="#">تفاصيل</a>
          </div>
          <p className="me-5">مصاريف الشحن ‎35.00 جنيه‎ (شحن مجاني عند الطلب بـ ‎200.00 جنيه‎ أو اكتر)</p>
          <hr />

          <div className="mt-2 d-flex gap-2">
            <img src="./images/Screenshot 2025-01-27 180949.png" alt="" height="50" width="50" />
            <div>
              محطة الاستلام
              <p>يمكنك ارجاع اغلب المنتجات خلال 14-30 يوم ...</p>
            </div>
          </div>

          <div className="mt-2 d-flex gap-2">
            <img src="./images/Screenshot 2025-01-27 181107.png" alt="" height="50" width="50" />
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
              <button type="button" className="btn orang text-light">Warning</button>
            </div>
          </div>
          <hr />
          <h6>أداء البائع <img src="./images/Screenshot 2025-01-28 161248.png" alt="" /></h6>
          <ul type="none">
            <li><i className="fa-solid fa-star"></i> معدل سرعه توصيل الطلب: ممتاز</li>
            <li><i className="fa-solid fa-star"></i> تقييم الجودة: جيد</li>
            <li><i className="fa-solid fa-check"></i> تقييم العملاء: متوسط</li>
          </ul>
        </div>

        <div className="mt-3 ps-2 pe-2 pt-2 bg-body-tertiary rounded">
          <div className="list-group">
            <button type="button" className="list-group-item list-group-item-action active-background" aria-current="true">
              <i className="fa-solid fa-file"></i> مواصفات المنتج
            </button>
            <button type="button" className="list-group-item list-group-item-action">
              <i className="fa-solid fa-list"></i> المواصفات
            </button>
            <button type="button" className="list-group-item list-group-item-action">
              <i className="fa-brands fa-ideal"></i> اراء العملاء الموثقه
            </button>
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
              <i className="fa-solid fa-cart-shopping ms-5"></i>اضافة لسلة التسوق
            </button>
          </div>
        </div>
      </aside>
    </main>
    
    </>
  )
}

export default ProductDetails