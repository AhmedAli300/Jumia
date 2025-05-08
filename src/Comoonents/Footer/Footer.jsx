import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section style={{ marginTop: "50px"  }} className="foot-sm">
        <div className="sm-1 text-white d-flex flex-column align-items-center p-2">
          <i className="fa-solid fa-arrow-up f-10"></i>
          <p className="f-10" style={{ fontSize: "12px" }}>العودة لأعلي الصفحة</p>
        </div>
        <div
          className="sm-2 text-white d-flex justify-center gap-2 align-items-center p-2"
        >
          <img
            style={{ height: "25px", borderRadius: "50%" }}
            src="/imgs1 (2).svg"
            alt=""
          />
          <p className="f-10">عربي</p>
        </div>
        <div
          className="sm-3 text-white d-flex justify-center gap-2 align-items-center p-2"
        >
          <ul className="d-flex gap-3 f-10 text-white">
            <li><a href="">تواصل معنا</a></li>
            <li><a href="">اتصل بنا</a></li>
            <li><a href="">الشروط والاحكام</a></li>
            <li><a href="">بيع علي جوميا</a></li>
            <li><a href="">الابلاغ عن منتج</a></li>
          </ul>
        </div>
        <div
          className="sm-3 sec-4 text-white d-flex justify-center gap-2 align-items-center p-2"
        >
          <ul className="d-flex gap-3 f-10 text-white">
            <li><a href="">سياسة تسوية المنازعات</a></li>
            <li><a href="">سياسة الاستبدال والاسترجاع</a></li>
          </ul>
        </div>
        <div
          className="sm-3 text-white d-flex justify-center gap-2 align-items-center p-2"
        >
          <ul className="d-flex gap-3 f-10 text-white">
            <li><a href="">جميع الحقوق محفوظة</a></li>
            <li><a href="">Created By Alyaa Mobarak</a></li>
          </ul>
        </div>
      </section>

      <section className="foot-lg1 text-white py-3" style={{ paddingRight: "120px" }}>
        <div className="cnt foot-cnt">
          <section className="sec-1 d-flex">
            <div className="col-3">
              <img
                style={{ height: "25px" }}
                src="/jumia-logo-white.png"
                alt=""
              />
            </div>
            <div className="col-6 d-flex flex-column box">
              <div>
                <p className="f-10" style={{ fontSize: "14px" }}>هل انت جديد علي جوميا؟</p>
                <span className="font-10" style={{ fontSize: "12px" }}>
                  اشترك في نشرتنا الاخبارية للحصول علي اجدد العروض
                </span>
              </div>
              <div className="foot-foorm">
                <form action="" meliod="post" className="py-2 d-flex align-items-center">
                  <input type="text" placeholder="ادخل بريدك الالكتروني" />
                  <i className="fa-regular fa-envelope"></i>
                  <button className="gander" value="male">ذكر</button>
                  <button className="gander" value="female">انثي</button>
                </form>
                <div className="d-flex gap-2 my-2 align-items-start">
                  <input type="checkbox" name="legal" id="checkbox" />
                  <label htmlFor="checkbox">
                    أوافق على سياسة الخصوصية وملفات تعريف الارتباط لدى جوميا، وأعلم
                    أنني يمكنني إلغاء<br /> الاشتراك في الرسائل الإخبارية في أي وقت.
                    <a href="">اوافق علي الشروط القانونية</a>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-3 gap-2">
              <div className="d-flex">
                <img
                  style={{ height: "40px" }}
                  className="b-4"
                  src="/imgs07.png"
                  alt=""
                />
                <div className="d-flex flex-column px-2 gap-1">
                  <p className="f-10 " style={{ fontSize: "14px" }}>تنزيل تطبيق جوميا المجاني</p>
                  <p className="font-10" style={{ fontSize: "14px" }}>احصل علي العديد من العروض الحصرية</p>
                </div>
              </div>
              <div className="gap-4 text-white d-flex justify-content-center dow-app">
                <a href="">
                  <i className="fab fa-apple" style={{ fontSize: "25px", color: "#fff" }}></i>
                </a>
                <a href="">
                  <i className="fab fa-google-play" style={{ fontSize: "25px", color: "#fff" }}> </i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="foot-lg1 text-white py-3 sec-2" style={{ paddingRight: "80px" }}>
        <div className="cnt" id="sec-4">
          {/* Sec-1  */}
          <div className="d-flex">
            <ul className="col-3 item gap-1">
              <li className="f-10">تحتاج مساعدة؟</li>
              <li><a href=""> تواصل معنا </a></li>
              <li><a href="">مركز المساعدة </a></li>
              <li><a href="">اتصل بنا </a></li>
              <li><a href="">روابط مفيدة: </a></li>
              <li><a href="">كيفية عمل طلب شراء </a></li>
              <li><a href="">طرق الدفع </a></li>
              <li><a href="">سياسة الشحن </a></li>
              <li><a href="">سياسة الاسترجاع </a></li>
              <li><a href="">سياسة الاسترداد </a></li>
              <li><a href="">إرشادات عن المعلومات الخاصة بالدفع </a></li>
            </ul>

            <ul className="col-3 item gap-1">
              <li className="font-10">من نحن</li>
              <li><a href=""> خدمات جوميا للشحن </a></li>
              <li><a href=""> انضم إلى جوميا </a></li>
              <li><a href=""> الشروط والأحكام </a></li>
              <li><a href=""> شروط و أحكام رصيد متجر جوميا </a></li>
              <li><a href=""> سياسة الخصوصية </a></li>
              <li><a href=""> سياسة ملفات تعريف الارتباط </a></li>
              <li><a href=""> توصيل مجاني </a></li>
              <li><a href=""> فلاش سيل </a></li>
              <li><a href=""> انضم الي اكاديمية مندوبين جوميا </a></li>
            </ul>

            <ul className="col-3 item gap-1">
              <li className="font-10">ذود مبيعاتك</li>
              <li><a href="">بيع علي جوميا</a></li>
              <li><a href="">قاعدة معرفة التاجر (Vendor hub) </a></li>
              <li><a href="">كن شريكًا للخدمات اللوجستية </a></li>
              <li><a href="">ابدا بزنس مع جوميا (J-Force ) </a></li>
            </ul>

            <ul className="col-3 item gap-1">
              <li className="font-10">جوميا دوليا</li>
              <div className="d-flex gap-4">
                <div>
                  <li><a href="">الجزائر</a></li>
                  <li><a href="">ساحل العاج</a></li>
                  <li><a href="">غانا</a></li>
                  <li><a href="">كينيا</a></li>
                </div>
                <div>
                  <li><a href="">المغرب </a></li>
                  <li><a href="">نيجيريا </a></li>
                  <li><a href="">السنغال</a></li>
                  <li><a href="">أوغندا</a></li>
                </div>
              </div>
            </ul>
          </div>
          {/* sec-2 social media and payment */}
          <div className="d-flex gap-5">
            <section className="social gap-3" style={{ paddingRight: "40px" }}>
              <p className="p-2">تابعونا علي</p>
              <div className="gap-2">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                <a href="#"><i className="fa-brands fa-tiktok"></i></a>
              </div>
            </section>
            <section className="social payment gap-3" aria-label="how-to-bay">
              <p className="p-2">طرق الدفع</p>
              <div className="gap-2">
                <a href="#"><i className="fa-solid fa-layer-group"></i></a>
                <a href="#"><i className="fa-brands fa-cc-visa"></i></a>
                <a href="#"><i className="fa-brands fa-cc-mastercard"></i></a>
                <a href="#"><i className="fa-brands fa-cc-paypal"></i></a>
              </div>
            </section>
          </div>

          <div className="d-flex py-4">
            <ul className="col item gap-1">
              <li><a href="">Activ </a></li>
              <li><a href="">ADIDAS</a></li>
              <li><a href="">American Eagle</a></li>
              <li><a href="">Andora</a></li>
            </ul>



            <ul className="col item gap-1">
              <li><a href="">Apple</a></li>
              <li><a href="">Braun</a></li>
              <li><a href="">Casio</a></li>
              <li><a href="">Cottonil</a></li>
            </ul>

            <ul className="col item gap-1">
              <li><a href="">Defacto</a></li>
              <li><a href="">Dejavu</a></li>
              <li><a href="">Fresh</a></li>
              <li><a href="">Dice </a></li>
            </ul>

            <ul className="col item gap-1">
              <li><a href="">Garnier</a></li>
              <li><a href="">HP</a></li>
              <li><a href="">Izor</a></li>
              <li><a href="">Kady</a></li>
            </ul>

            <ul className="col item gap-1">
              <li><a href=""> L'Oreal Paris </a></li>
              <li><a href=""> LC Waikiki </a></li>
              <li><a href="">Lenovo</a></li>
              <li><a href=""> Maybelline New York </a></li>
            </ul>

            <ul className="col item gap-1">
              <li><a href="">Mesery</a></li>
              <li><a href="">Moliercare</a></li>
              <li><a href="">NIVEA</a></li>
              <li><a href="">Nokia</a></li>
            </ul>

            <ul className="col item gap-1">
              <li><a href="">OPPO</a></li>
              <li><a href="">Ravin</a></li>
              <li><a href="">Samsung</a></li>
              <li><a href="">SHEIN</a></li>
            </ul>

            <ul className="col item gap-1">
              <li><a href="">Sokany</a></li>
              <li><a href="">XIAOMI</a></li>
              <li><a href="">Tornado</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="cnt d-flex align-items-center justify-content-center py-2">
          <img
            style={{ height: "20px" }}
            className="b-4"
            src="/jumai-pay.png"
            alt="Jumia footer icon"
          />
        </div>
      </section>

    </>
  );
}

export default Footer;
