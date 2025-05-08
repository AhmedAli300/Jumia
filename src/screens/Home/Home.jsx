import { useState } from "react";
import "./Home.css"
import Overlay from "../../Comoonents/Overlay/Overlay";


const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState({});

  const handleCategorhOVER = () => {
    setIsVisible(true);
    console.log(categories.find((cat) => cat.title == "أزياء").subcategories);

    setData(categories.find((cat) => cat.title == "أزياء").subcategories);
  };
  return (
    <>
      <Overlay isVisible={isVisible} data={data} />
      <section className="hero-section container mx-auto row p-3">
        <aside className="bg-white col-md-2 d-none p-3 d-md-flex flex-column justify-content-between text-end position-relative">
          <div className="cat-1">
            <a
              className="text-decoration-none first-link"
              href="#"
              onMouseOver={handleCategorhOVER}
              onMouseLeave={() => setIsVisible(false)}
            >
              <i className="fa-solid fa-shirt "></i>
              <span className="me-2">ازياء</span>
            </a>

            <div
              id="id"
              className="side-menue shadow bg-white position-absolute end-100 p-1 d-flex gap-5 hidden"
            >
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2">
                  ازياء حريمي
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    كارديجن وبلوفرات
                  </a>
                  <a href="#" className="text-decoration-none">
                    جواكيت وبلاطي
                  </a>
                  <a href="#" className="text-decoration-none">
                    هوديز
                  </a>
                  <a href="#" className="text-decoration-none">
                    سويتشرتات
                  </a>
                  <a href="#" className="text-decoration-none">
                    توب وتيشيرت
                  </a>
                  <a href="#" className="text-decoration-none">
                    فساتين
                  </a>
                  <a href="#" className="text-decoration-none">
                    سالوبيتات
                  </a>
                  <a href="#" className="text-decoration-none">
                    ملابس البيت واللانجري
                  </a>
                  <a href="#" className="text-decoration-none">
                    ملابس رياضيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    ملابس الحمل
                  </a>
                  <a href="#" className="text-decoration-none">
                    بوت
                  </a>
                  <a href="#" className="text-decoration-none">
                    احذيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    اذيه كعب
                  </a>
                  <a href="#" className="text-decoration-none">
                    اكسسوارات
                  </a>
                  <a href="#" className="text-decoration-none">
                    حقائب
                  </a>
                  <a href="#" className="text-decoration-none">
                    ملابس مقاسات كبيره
                  </a>
                  <a href="#" className="text-decoration-none">
                    حجاب
                  </a>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  ازياءرجالي
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    كارديجن وبلوفرات
                  </a>
                  <a href="#" className="text-decoration-none">
                    جواكيت وبلاطي
                  </a>
                  <a href="#" className="text-decoration-none">
                    هوديز
                  </a>
                  <a href="#" className="text-decoration-none">
                    سويتشرتات
                  </a>
                  <a href="#" className="text-decoration-none">
                    توب وتيشيرت
                  </a>
                  <a href="#" className="text-decoration-none">
                    بلوفرات
                  </a>
                  <a href="#" className="text-decoration-none">
                    ملابس داخليه
                  </a>
                  <a href="#" className="text-decoration-none">
                    ملابس البيت واللانجري
                  </a>
                  <a href="#" className="text-decoration-none">
                    ملابس رياضيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    بدل
                  </a>
                  <a href="#" className="text-decoration-none"></a>
                  <a href="#" className="text-decoration-none">
                    احذيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    اذيه كعب
                  </a>
                  <a href="#" className="text-decoration-none">
                    اكسسوارات
                  </a>
                  <a href="#" className="text-decoration-none">
                    حقائب
                  </a>
                  <a href="#" className="text-decoration-none">
                    ملابس مقاسات كبيره
                  </a>
                  <a href="#" className="text-decoration-none">
                    ملابس سباحه
                  </a>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  ازياء اطفال
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ملابس اولاد
                  </a>
                  <a href="#" className="text-decoration-none">
                    ملابس بنات
                  </a>
                  <a href="#" className="text-decoration-none">
                    احذيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    شربات
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="cat-2-link">
            <a className="text-decoration-none" href="#">
              <i className="fa-solid fa-mobile"></i>
              <span className="me-2">موبايلات وتابلت</span>
            </a>

            <div
              id="cat-2"
              className="side-menue bg-white position-absolute end-100 p-1 d-flex gap-5 hidden"
            >
              <div className="d-flex flex-column cat">
                <div className="cat p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2">
                    موبايلات
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      موبايل اندرويد
                    </a>
                    <a href="#" className="text-decoration-none">
                      موبايل ios
                    </a>
                    <a href="#" className="text-decoration-none">
                      هواتف
                    </a>
                  </div>
                </div>
                <div className="cat border-bottom p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                    تابلت
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت
                    </a>
                    <a href="#" className="text-decoration-none">
                      ايباد
                    </a>
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت تعليمي
                    </a>
                    <a href="#" className="text-decoration-none">
                      اكسسوارات تابلت
                    </a>
                  </div>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  اكسسوارات الموبايل
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  اكسسوارات الموبايل
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="cat-3-link">
            <a className="text-decoration-none" href="#">
              <i className="fa-solid fa-camera"></i>
              <span className="me-2">المنزل والاثاث</span>
            </a>

            <div
              id="cat-3"
              className="side-menue bg-white position-absolute end-100 p-1 d-flex gap-5 hidden"
            >
              <div className="d-flex flex-column cat">
                <div className="cat p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2">
                    المنزل
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      موبايل اندرويد
                    </a>
                    <a href="#" className="text-decoration-none">
                      موبايل ios
                    </a>
                    <a href="#" className="text-decoration-none">
                      هواتف
                    </a>
                  </div>
                </div>
                <div className="cat border-bottom p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                    المطبخ
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت
                    </a>
                    <a href="#" className="text-decoration-none">
                      ايباد
                    </a>
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت تعليمي
                    </a>
                    <a href="#" className="text-decoration-none">
                      اكسسوارات تابلت
                    </a>
                  </div>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  الريسبشن
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  السفره
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="cat-4-link">
            <a className="text-decoration-none" href="#">
              <i className="fa-solid fa-house"></i>
              <span className="me-2">اجهزه منزلية</span>
            </a>

            <div
              id="cat-4"
              className="side-menue bg-white position-absolute end-100 p-1 d-flex gap-5 hidden"
            >
              <div className="d-flex flex-column cat">
                <div className="cat p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2">
                    المنزل
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      موبايل اندرويد
                    </a>
                    <a href="#" className="text-decoration-none">
                      موبايل ios
                    </a>
                    <a href="#" className="text-decoration-none">
                      هواتف
                    </a>
                  </div>
                </div>
                <div className="cat border-bottom p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                    المطبخ
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت
                    </a>
                    <a href="#" className="text-decoration-none">
                      ايباد
                    </a>
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت تعليمي
                    </a>
                    <a href="#" className="text-decoration-none">
                      اكسسوارات تابلت
                    </a>
                  </div>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  الريسبشن
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  السفره
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="cat-5-link">
            <a className="text-decoration-none" href="#">
              <i className="fa-solid fa-tv"></i>
              <span className="me-2">التلفزيونات والصوتيات</span>
            </a>

            <div
              id="cat-5"
              className="side-menue bg-white position-absolute end-100 p-1 d-flex gap-5 hidden"
            >
              <div className="d-flex flex-column cat">
                <div className="cat p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2">
                    سامسونج
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      موبايل اندرويد
                    </a>
                    <a href="#" className="text-decoration-none">
                      موبايل ios
                    </a>
                    <a href="#" className="text-decoration-none">
                      هواتف
                    </a>
                  </div>
                </div>
                <div className="cat border-bottom p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                    هواوي
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت
                    </a>
                    <a href="#" className="text-decoration-none">
                      ايباد
                    </a>
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت تعليمي
                    </a>
                    <a href="#" className="text-decoration-none">
                      اكسسوارات تابلت
                    </a>
                  </div>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  ابل
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  ماك بوك
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="cat-6-link">
            <a className="text-decoration-none" href="#">
              <i className="fa-solid fa-baby"></i>
              <span className="me-2">منتجات العنايه بالاطفال</span>
            </a>

            <div
              id="cat-6"
              className="side-menue bg-white position-absolute end-100 p-1 d-flex gap-5 hidden"
            >
              <div className="d-flex flex-column cat">
                <div className="cat p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2">
                    حفاضات
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      موبايل اندرويد
                    </a>
                    <a href="#" className="text-decoration-none">
                      موبايل ios
                    </a>
                    <a href="#" className="text-decoration-none">
                      هواتف
                    </a>
                  </div>
                </div>
                <div className="cat border-bottom p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                    ملابس
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت
                    </a>
                    <a href="#" className="text-decoration-none">
                      ايباد
                    </a>
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت تعليمي
                    </a>
                    <a href="#" className="text-decoration-none">
                      اكسسوارات تابلت
                    </a>
                  </div>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  ملابس مقاسات كبيره
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  ملابس بنات
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="cat-7-link">
            <a className="text-decoration-none" href="#">
              <i className="fa-solid fa-apple-whole"></i>
              <span className="me-2">بقالة</span>
            </a>

            <div
              id="cat-7"
              className="side-menue bg-white position-absolute end-100 p-1 d-flex gap-5 hidden"
            >
              <div className="d-flex flex-column cat">
                <div className="cat p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2">
                    زيوت
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      موبايل اندرويد
                    </a>
                    <a href="#" className="text-decoration-none">
                      موبايل ios
                    </a>
                    <a href="#" className="text-decoration-none">
                      هواتف
                    </a>
                  </div>
                </div>
                <div className="cat border-bottom p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                    الالبان
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت
                    </a>
                    <a href="#" className="text-decoration-none">
                      ايباد
                    </a>
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت تعليمي
                    </a>
                    <a href="#" className="text-decoration-none">
                      اكسسوارات تابلت
                    </a>
                  </div>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  لحوم
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  جبن
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="cat-8-link">
            <a className="text-decoration-none" href="#">
              <i className="fa-solid fa-computer"></i>
              <span className="me-2">الكمبيوتر</span>
            </a>

            <div
              id="cat-8"
              className="side-menue bg-white position-absolute end-100 p-1 d-flex gap-5 hidden"
            >
              <div className="d-flex flex-column cat">
                <div className="cat p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2">
                    كيبورد
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      موبايل اندرويد
                    </a>
                    <a href="#" className="text-decoration-none">
                      موبايل ios
                    </a>
                    <a href="#" className="text-decoration-none">
                      هواتف
                    </a>
                  </div>
                </div>
                <div className="cat border-bottom p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                    ماوس
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت
                    </a>
                    <a href="#" className="text-decoration-none">
                      ايباد
                    </a>
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت تعليمي
                    </a>
                    <a href="#" className="text-decoration-none">
                      اكسسوارات تابلت
                    </a>
                  </div>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  شاشات
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  سوفتوير
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="cat-9-link">
            <a className="text-decoration-none" href="#">
              <i className="fa-solid fa-dumbbell"></i>
              <span className="me-2">مستلزمات رياضة</span>
            </a>

            <div
              id="cat-9"
              className="side-menue bg-white position-absolute end-100 p-1 d-flex gap-5 hidden"
            >
              <div className="d-flex flex-column cat">
                <div className="cat p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2">
                    اوزان حديد
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      موبايل اندرويد
                    </a>
                    <a href="#" className="text-decoration-none">
                      موبايل ios
                    </a>
                    <a href="#" className="text-decoration-none">
                      هواتف
                    </a>
                  </div>
                </div>
                <div className="cat border-bottom p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                    الات للمشي
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت
                    </a>
                    <a href="#" className="text-decoration-none">
                      ايباد
                    </a>
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت تعليمي
                    </a>
                    <a href="#" className="text-decoration-none">
                      اكسسوارات تابلت
                    </a>
                  </div>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  معدات تدريب القوه
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  ملابس رياضيه
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="cat-10-link">
            <a className="text-decoration-none" href="#">
              <i className="fa-solid fa-gamepad"></i>
              <span className="me-2">العاب</span>
            </a>

            <div
              id="cat-10"
              className="side-menue bg-white position-absolute end-100 p-1 d-flex gap-5 hidden"
            >
              <div className="d-flex flex-column cat">
                <div className="cat p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2">
                    بلايستيشن 5
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      موبايل اندرويد
                    </a>
                    <a href="#" className="text-decoration-none">
                      موبايل ios
                    </a>
                    <a href="#" className="text-decoration-none">
                      هواتف
                    </a>
                  </div>
                </div>
                <div className="cat border-bottom p-1">
                  <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                    بلايستيشن 5
                  </h6>
                  <div className="items d-flex flex-column">
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت
                    </a>
                    <a href="#" className="text-decoration-none">
                      ايباد
                    </a>
                    <a href="#" className="text-decoration-none">
                      {" "}
                      تابلت تعليمي
                    </a>
                    <a href="#" className="text-decoration-none">
                      اكسسوارات تابلت
                    </a>
                  </div>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  بلايستيشن 3
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
              <div className="cat border-bottom p-1">
                <h6 className="border-bottom border-2 border-dark mb-2 pb-1">
                  بلايستيشن 2
                </h6>
                <div className="items d-flex flex-column">
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    ساعه زكيه
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعه بلوتوث
                  </a>
                  <a href="#" className="text-decoration-none">
                    سماعات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                  <a href="#" className="text-decoration-none">
                    جرابات الموبايل
                  </a>
                  <a href="#" className="text-decoration-none">
                    {" "}
                    اسكرينات
                  </a>
                  <a href="#" className="text-decoration-none">
                    باور بانك
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <a className="text-decoration-none" href="#">
              <i className="fa-solid fa-ellipsis border border-dark rounded-circle p-1"></i>
              <span className="me-2">اقسام اخري</span>
            </a>
          </div>
        </aside>

        <div
          id="carouselExampleIndicators"
          className="carousel slide col-md-8 h-100"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-indicators d-none d-md-flex">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://eg.jumia.is/cms/Valentine-25/FlashSale/Live/712x384AR1.jpg"
                className="d-block w-100 h-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://eg.jumia.is/cms/Valentine-25/WOF/Slider/712x384DeskAR.gif"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://eg.jumia.is/cms/Valentine-25/CPRs/SL712X384AR.gif"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://eg.jumia.is/cms/Valentine-25/Categories/Valentine/712x384AR-1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://eg.jumia.is/cms/Valentine-25/Categories/Fashion/Sportwear/712x384AR-1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://eg.jumia.is/cms/Valentine-25/Categories/Phones/Honor/712x384AR.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://eg.jumia.is/cms/Valentine-25/Categories/Beauty/Loreal/712x384AR-1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://eg.jumia.is/cms/Valentine-25/Categories/Fashion/Shoe-Bags/712x384AR-1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark bg-opacity-75 rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark bg-opacity-75 rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

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


      <div className="container">
        <div className="text-center bg-danger p-3 w-100 m-auto rounded-2">
          <img className="w-100 rounded-2" src="./1200x200ar.png" alt="" />
        </div>
      </div>
      <div className="container">
        <a
          className="text-decoration-none text-dark"
          href="/product details/productDetails.html"
        >
          <div className="row bg-white my-5 p-4">
            <span className="text-end mx-auto fs-5 "> المنتجات المدعومة</span>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="imgs/1s (11).jpg"
                  alt="منتجات مدعوه جلباب"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">Baby Boy Tricot Cardigan</p>
                <span className="d-block">399.00 جنيه</span>
                <span className="text-decoration-line-through">
                  699.00 جنيه
                </span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="imgs/1s (9).jpg"
                  alt="زيت شعر طبيعي"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6"> زيت السعد الطبيعي</p>
                <span className="d-block">200.00 جنيه</span>
                <span className="text-decoration-line-through">400 جنيه</span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="imgs/1s (6).jpg"
                  alt="منتجات مدعومه"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6"> Braiding Accessories Sweater </p>
                <span className="d-block">85.00جنيه</span>
                <span className="text-decoration-line-through">190 جنيه</span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img className="w-100" src="imgs/1 (6).jpg" alt="اواني حلل " />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  {" "}
                  طقم حله شاورمه الومنيوم نقي مقاس تلاجه ٤ قطع{" "}
                </p>
                <span className="d-block">599.00جنيه</span>
                <span className="text-decoration-line-through">
                  800.00 جنيه
                </span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img className="w-100" src="imgs/1 (3).jpg" alt="" />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6"> حافظه لاب توب 15.6 إنش - جراي</p>
                <span className="d-block">599.00جنيه</span>
                <span className="text-decoration-line-through">
                  800.00 جنيه
                </span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="imgs/1oven (6).jpg"
                  alt="دولاب تخفيضات خزانه"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  دولاب سفاري تخزين الملابس 2 درفه - بيج
                </p>
                <span className="d-block">599.00جنيه</span>
                <span className="text-decoration-line-through">
                  800.00 جنيه
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="container">
        <a
          className="text-decoration-none text-black"
          href="/product details/productDetails.html"
        >
          <div className="row bg-white my-5">
            <span className="text-end mx-auto fs-5 ">
              المنتجات الأفضل مبيعاً
            </span>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="imgs/s3(1).jpg"
                  alt="ستره سويت تيشرت cardigan"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  LC Waikiki Basic Long Sleeve Boy Knitwear Cardigan
                </p>
                <span className="d-block">600.00 جنيه</span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="imgs/s3 (2).jpg"
                  alt="شنط bags صغيره"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  {" "}
                  قطعتين - شنطة صغيرة متعددة الاغراض للميك اب والاكسسوارات
                </p>
                <span className="d-block">99.00 جنيه</span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img className="w-100" src="./imgs/s3 (3).jpg" alt="shoes " />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  {" "}
                  ADIDAS IE8828 Runfalcon 5 Running Shoes
                </p>
                <span className="d-block">2000.00جنيه</span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="./imgs/s4 (4).jpg"
                  alt="active shoes"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  {" "}
                  MEGA Shoes حذاء رياضي للأطفال تريكو نعل إيفا - أبيض & مــوف
                </p>
                <span className="d-block">350.00 جنيه</span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img className="w-100" src="imgs/s5 (5).jpg" alt="oil" />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  SHEIN Lip Glow Oil, Moisturizing Lip Oil Gloss BEX-8334
                </p>
                <span className="d-block">199.00جنيه</span>
                <span className="text-decoration-line-through">
                  400.00 جنيه
                </span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img className="w-100" src="imgs/s6 (6).jpg" alt="" />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">sweet shirt pink</p>
                <span className="d-block">599.00جنيه</span>
                <span className="text-decoration-line-through">
                  800.00 جنيه
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="container">
        <h5 className="bg-warning p-3 text-center">
          عروض رائعة على الأجهزة الكهربائية
        </h5>
        <div className="row">
          <div className="col-md-4 overflow-hidden p-2">
            <img
              className="w-100 img-scale"
              src="imgs/TB400X200AR (1).jpg"
              alt="افضل العروض جوميا اجهزه كهربائيه"
            />
          </div>
          <div className="col-md-4 overflow-hidden p-2">
            <img
              className="w-100 img-scale"
              src="imgs/TB400X200AR (2).jpg"
              alt="افضل العروض جوميا اجهزه كهربائيه"
            />
          </div>
          <div className="col-md-4 overflow-hidden p-2">
            <img
              className="w-100 img-scale"
              src="imgs/TB400X200AR.jpg"
              alt="افضل العروض جوميا اجهزه كهربائيه"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <a
          className="text-decoration-none text-dark"
          href="/product details/productDetails.html"
        >
          <div className="row bg-white my-5">
            <span className="text-end mx-auto fs-5 ">اكتشف منتجات اكتر</span>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="imgs/s3(1).jpg"
                  alt="Waikiki Basic Long Sleeve Boy"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  LC Waikiki Basic Long Sleeve Boy Knitwear Cardigan
                </p>
                <span className="d-block">600.00 جنيه</span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="imgs/s3 (2).jpg"
                  alt="شنطة صغيرة متعددة الاغراض للميك اب"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  {" "}
                  قطعتين - شنطة صغيرة متعددة الاغراض للميك اب والاكسسوارات
                </p>
                <span className="d-block">99.00 جنيه</span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="./imgs/s3 (3).jpg"
                  alt="ADIDAS IE8828 Runfalcon "
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  {" "}
                  ADIDAS IE8828 Runfalcon 5 Running Shoes
                </p>
                <span className="d-block">2000.00جنيه</span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="./imgs/s4 (4).jpg"
                  alt="ذاء رياضي للأطفال تريكو نعل إيفا - أبيض & مــوف"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  {" "}
                  MEGA Shoes حذاء رياضي للأطفال تريكو نعل إيفا - أبيض & مــوف
                </p>
                <span className="d-block">350.00 جنيه</span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img className="w-100" src="imgs/s5 (5).jpg" alt="" />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  SHEIN Lip Glow Oil, Moisturizing Lip Oil Gloss BEX-8334
                </p>
                <span className="d-block">199.00جنيه</span>
                <span className="text-decoration-line-through">
                  400.00 جنيه
                </span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="imgs/s6 (6).jpg"
                  alt="ولاب سفاري تخزين الملابس 2 درفه - بيج"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  دولاب سفاري تخزين الملابس 2 درفه - بيج
                </p>
                <span className="d-block">599.00جنيه</span>
                <span className="text-decoration-line-through">
                  800.00 جنيه
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="container">
        <h5 className="bg-bauty p-3 text-center">
          {" "}
          منتجات الجمال باسعار تناسبك
        </h5>
        <div className="row">
          <div className="col-md-2">
            <img
              className="w-100"
              src="imgs/Deodrants300x400AR.png"
              alt="منتجات الجمال مزيل العرق"
            />
          </div>
          <div className="col-md-2">
            <img className="w-100" src="imgs/Hair300x400AR.png" alt="شامبو" />
          </div>
          <div className="col-md-2">
            <img
              className="w-100"
              src="imgs/Perfumes300x400AR.png"
              alt="Perfumes بيرفيوم سبلاش"
            />
          </div>
          <div className="col-md-2">
            <img
              className="w-100"
              src="imgs/Shavers300x400AR.png"
              alt="Shavers"
            />
          </div>
          <div className="col-md-2">
            <img className="w-100" src="imgs//Skin300x400AR.png" alt="Skin" />
          </div>
          <div className="col-md-2">
            <img
              className="w-100"
              src="imgs/Styling300x400AR.png"
              alt="Styling"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row bg-white my-5">
          <span className="text-end mx-auto fs-5 ">اكتشف منتجات اكتر</span>
          <div className="col-md-2 img-hover">
            <div className=" ">
              <img className="w-100" src="imgs/s3(1).jpg" alt="" />
            </div>
            <div className="prodContent text-end p-3">
              <p className="lead m-0 fs-6">
                LC Waikiki Basic Long Sleeve Boy Knitwear Cardigan
              </p>
              <span className="d-block">600.00 جنيه</span>
            </div>
          </div>
          <div className="col-md-2 img-hover">
            <div className=" ">
              <img className="w-100" src="imgs/s3 (2).jpg" alt="" />
            </div>
            <div className="prodContent text-end p-3">
              <p className="lead m-0 fs-6">
                {" "}
                قطعتين - شنطة صغيرة متعددة الاغراض للميك اب والاكسسوارات
              </p>
              <span className="d-block">99.00 جنيه</span>
            </div>
          </div>
          <div className="col-md-2 img-hover">
            <div className=" ">
              <img className="w-100" src="./imgs/s3 (3).jpg" alt="" />
            </div>
            <div className="prodContent text-end p-3">
              <p className="lead m-0 fs-6">
                {" "}
                ADIDAS IE8828 Runfalcon 5 Running Shoes
              </p>
              <span className="d-block">2000.00جنيه</span>
            </div>
          </div>
          <div className="col-md-2 img-hover">
            <div className=" ">
              <img className="w-100" src="./imgs/s4 (4).jpg" alt="" />
            </div>
            <div className="prodContent text-end p-3">
              <p className="lead m-0 fs-6">
                {" "}
                MEGA Shoes حذاء رياضي للأطفال تريكو نعل إيفا - أبيض & مــوف
              </p>
              <span className="d-block">350.00 جنيه</span>
            </div>
          </div>
          <div className="col-md-2 img-hover">
            <div className=" ">
              <img
                className="w-100"
                src="imgs/s5 (5).jpg"
                alt="SHEIN Lip Glow Oil,"
              />
            </div>
            <div className="prodContent text-end p-3">
              <p className="lead m-0 fs-6">
                SHEIN Lip Glow Oil, Moisturizing Lip Oil Gloss BEX-8334
              </p>
              <span className="d-block">199.00جنيه</span>
              <span className="text-decoration-line-through">400.00 جنيه</span>
            </div>
          </div>
          <div className="col-md-2 img-hover">
            <div className=" ">
              <img className="w-100" src="imgs/s6 (6).jpg" alt="" />
            </div>
            <div className="prodContent text-end p-3">
              <p className="lead m-0 fs-6">
                دولاب سفاري تخزين الملابس 2 درفه - بيج
              </p>
              <span className="d-block">599.00جنيه</span>
              <span className="text-decoration-line-through">800.00 جنيه</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h5 className="bg-cold p-3 text-center w-100">تخفيضات أزياء الشتاء</h5>
        <a
          className="text-dark text-decoration-none"
          href="/product details/productDetails.html"
        >
          <div className="row">
            <div className="col-md-2 p-1">
              <img
                className="w-100 d-block"
                src="imgs/Artboard2copy6-1.png"
                alt="تخفيضات أزياء الشتاء"
              />
            </div>
            <div className="col-md-2 p-1">
              <img
                className="w-100 d-block"
                src="imgs/Artboard2copy6-2.png"
                alt="تخفيضات أزياء الشتاء"
              />
            </div>
            <div className="col-md-2 p-1">
              <img
                className="w-100 d-block"
                src="imgs/Artboard2copy6-4.png"
                alt="تخفيضات أزياء الشتاء"
              />
            </div>
            <div className="col-md-2 p-1">
              <img
                className="w-100 d-block"
                src="imgs/Artboard2copy6.png"
                alt="تخفيضات أزياء الشتاء"
              />
            </div>
            <div className="col-md-2 p-1">
              <img
                className="w-100 d-block"
                src="imgs/Artboard6copy6-3.png"
                alt="تخفيضات أزياء الشتاء"
              />
            </div>
            <div className="col-md-2 p-1">
              <img
                className="w-100 d-block"
                src="imgs/Artboard2copy6-4.png"
                alt="تخفيضات أزياء الشتاء"
              />
            </div>
          </div>
        </a>
      </div>

      <div className="container">
        <a
          className="text-decoration-none text-dark"
          href="/product details/productDetails.html"
        >
          <div className="row bg-white my-5">
            <span className="text-end mx-auto fs-5 ">اكتشف منتجات اكتر</span>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img className="w-100" src="imgs/watch (6).jpg" alt="" />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  Curren Curren 9058 Women Wristwatch - multi-color
                </p>
                <span className="d-block">1,320.00 جنيه</span>

                <span className="d-block text-decoration-line-through">
                  3,000.00 جنيه
                </span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img className="w-100" src="imgs/1 (4).jpg" alt="" />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  {" "}
                  قطعتين - شنطة صغيرة متعددة الاغراض للميك اب والاكسسوارات
                </p>
                <span className="d-block">99.00 جنيه</span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img className="w-100" src="./imgs/1 (5).jpg" alt="" />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  {" "}
                  ADIDAS IE8828 Runfalcon 5 Running Shoes
                </p>
                <span className="d-block">2000.00جنيه</span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img className="w-100" src="./imgs/s4 (4).jpg" alt="" />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  {" "}
                  MEGA Shoes حذاء رياضي للأطفال تريكو نعل إيفا - أبيض & مــوف
                </p>
                <span className="d-block">350.00 جنيه</span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img className="w-100" src="imgs/s5 (5).jpg" alt="" />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  SHEIN Lip Glow Oil, Moisturizing Lip Oil Gloss BEX-8334
                </p>
                <span className="d-block">199.00جنيه</span>
                <span className="text-decoration-line-through">
                  400.00 جنيه
                </span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img className="w-100" src="imgs/s6 (6).jpg" alt="" />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  دولاب سفاري تخزين الملابس 2 درفه - بيج
                </p>
                <span className="d-block">599.00جنيه</span>
                <span className="text-decoration-line-through">
                  800.00 جنيه
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>





      <div className="container">
        <h5 className="bg-cold p-3 text-center">✪ منتجات تريند ✪</h5>
        <div className="row  ">
          <div className="col-md-2 p-1">
            <img
              className="w-100 "
              src="imgs/300x400AR_1.jpg"
              alt="منتجات تريند"
            />
          </div>
          <div className="col-md-2  p-1">
            <img
              className="w-100"
              src="imgS/300x400AR_3.jpg"
              alt=" منتجات تريند "
            />
          </div>
          <div className="col-md-2  p-1">
            <img
              className="w-100"
              src="imgs/300x400AR_4.jpg"
              alt="نتجات تريند "
            />
          </div>
          <div className="col-md-2  p-1">
            <img
              className="w-100"
              src="imgs/300x400AR_5.png"
              alt="نتجات تريند "
            />
          </div>
          <div className="col-md-2  p-1">
            <img
              className="w-100"
              src="imgs/300x400AR_6.jpg"
              alt="نتجات تريند "
            />
          </div>
          <div className="col-md-2  p-1">
            <img
              className="w-100"
              src="imgs/300x400AR_8.jpg"
              alt="نتجات تريند "
            />
          </div>
        </div>
      </div>





      <div className="container">
        <div className="row bg-white my-5">
          <h5 className="bg-cold p-3 text-end"> اشتري اجدد التريندات</h5>
          <div className="col-md-2 img-hover">
            <div className=" ">
              <img className="w-100" src="imgs/watch (6).jpg" alt="" />
            </div>
            <div className="prodContent text-end p-3">
              <p className="lead m-0 fs-6">
                Curren Curren 9058 Women Wristwatch - multi-color
              </p>
              <span className="d-block">1,320.00 جنيه</span>

              <span className="d-block text-decoration-line-through">
                3,000.00 جنيه
              </span>
            </div>
          </div>
          <div className="col-md-2 img-hover">
            <div className=" ">
              <img className="w-100" src="imgs/1 (4).jpg" alt="" />
            </div>
            <div className="prodContent text-end p-3">
              <p className="lead m-0 fs-6">
                {" "}
                قطعتين - شنطة صغيرة متعددة الاغراض للميك اب والاكسسوارات
              </p>
              <span className="d-block">99.00 جنيه</span>
            </div>
          </div>
          <div className="col-md-2 img-hover">
            <div className=" ">
              <img className="w-100" src="./imgs/1 (5).jpg" alt="" />
            </div>
            <div className="prodContent text-end p-3">
              <p className="lead m-0 fs-6">
                {" "}
                ADIDAS IE8828 Runfalcon 5 Running Shoes
              </p>
              <span className="d-block">2000.00جنيه</span>
            </div>
          </div>
          <div className="col-md-2 img-hover">
            <div className=" ">
              <img className="w-100" src="./imgs/s4 (4).jpg" alt="" />
            </div>
            <div className="prodContent text-end p-3">
              <p className="lead m-0 fs-6">
                {" "}
                MEGA Shoes حذاء رياضي للأطفال تريكو نعل إيفا - أبيض & مــوف
              </p>
              <span className="d-block">350.00 جنيه</span>
            </div>
          </div>
          <div className="col-md-2 img-hover">
            <div className=" ">
              <img className="w-100" src="imgs/s5 (5).jpg" alt="" />
            </div>
            <div className="prodContent text-end p-3">
              <p className="lead m-0 fs-6">
                SHEIN Lip Glow Oil, Moisturizing Lip Oil Gloss BEX-8334
              </p>
              <span className="d-block">199.00جنيه</span>
              <span className="text-decoration-line-through">400.00 جنيه</span>
            </div>
          </div>
          <div className="col-md-2 img-hover">
            <div className=" ">
              <img className="w-100" src="imgs/s6 (6).jpg" alt="" />
            </div>
            <div className="prodContent text-end p-3">
              <p className="lead m-0 fs-6">
                دولاب سفاري تخزين الملابس 2 درفه - بيج
              </p>
              <span className="d-block">599.00جنيه</span>
              <span className="text-decoration-line-through">800.00 جنيه</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h5 className="bg-fff2d6 p-3 text-center w-100">
          {" "}
          ديكور واساسيات بيتك{" "}
        </h5>
        <div className="row">
          <div className="col-md-4 p-1">
            <img className="w-100 d-block" src="imgs/400x200_006.png" />
          </div>
          <div className="col-md-4 p-1">
            <img className="w-100 d-block" src="imgs/400x200_04.png" />
          </div>
          <div className="col-md-4 p-1">
            <img className="w-100 d-block" src="imgs/400x200_05.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <h5 className="bg-0099ff p-3 text-center w-100">
          {" "}
          ديكور واساسيات بيتك{" "}
        </h5>
        <div className="row">
          <div className="col-md-6 p-1 overflow-hidden">
            <img
              className="w-100 d-block img-scale"
              src="imgs/DB600X200AR.png"
            />
          </div>
          <div className="col-md-6 p-1 overflow-hidden">
            <img
              className="w-100 d-block img-scale"
              src="imgs/600x200ARINS.png"
            />
          </div>
        </div>
      </div>







      <div className="container">
        <div className="row bg-white my-2">
          <div className="col-md-2">
            <div className=" overflow-hidden">
              <img className="w-100 img-scale" src="imgs/ForceAR.png" alt="" />
            </div>
          </div>
          <div className="col-md-2 p-0  ">
            <div className=" overflow-hidden">
              <img
                className="w-100 img-scale"
                src="imgs/AllAR (1).png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-2 p-0  ">
            <div className=" overflow-hidden">
              <img className="w-100 img-scale" src="./imgs/GiftAR.gif" alt="" />
            </div>
          </div>
          <div className="col-md-2 p-0  ">
            <div className=" overflow-hidden">
              <img className="w-100 img-scale" src="./imgs/NewAR.gif" alt="" />
            </div>
          </div>
          <div className="col-md-2 p-0  ">
            <div className=" overflow-hidden">
              <img
                className="w-100 img-scale"
                src="imgs/OfficialAR.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-2 p-0  ">
            <div className=" overflow-hidden">
              <img className="w-100 img-scale" src="imgs/RedeemAR.png" alt="" />
            </div>
          </div>
        </div>
      </div>



      <div className="container">
        <a
          className="text-decoration-none text-dark"
          href="/product details/productDetails.html"
        >
          <div className="row bg-white my-5">
            <span className="text-end mx-auto p-4 fs-5 ">
              {" "}
              labtob bag| لسه بتدور على{" "}
            </span>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img className="w-100" src="imgs/1 (4).jpg" alt="" />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">active bags - multi-color</p>
                <span className="d-block">1,320.00 جنيه</span>

                <span className="d-block text-decoration-line-through">
                  3,000.00 جنيه
                </span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img className="w-100" src="imgs/1 (5).jpg" alt="" />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6"> شنطة لابتوب</p>
                <span className="d-block">99.00 جنيه</span>
              </div>
            </div>

            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="./imgs/bags2 (6).jpg"
                  alt="ads bag"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  {" "}
                  شنطه لاب توب ضهر مزوده بمدخل USB
                </p>
                <span className="d-block">310.00 جنيه</span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="imgs/bags1(6).jpg"
                  alt="bag active"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  Activ Self Pattern Laptop Backpack - Mint Green
                </p>
                <span className="d-block">500.00جنيه</span>
                <span className="text-decoration-line-through">
                  850.00 جنيه
                </span>
              </div>
            </div>
            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="imgs/bags3 (6).jpg"
                  alt="bags active sale laptop"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  حقيبه لاب توب 17 إنش - للظهر إسود
                </p>
                <span className="d-block">750.00جنيه</span>
                <span className="text-decoration-line-through">
                  950.00 جنيه
                </span>
              </div>
            </div>

            <div className="col-md-2 img-hover">
              <div className=" ">
                <img
                  className="w-100"
                  src="./imgs/bags2 (6).jpg"
                  alt="ads bag"
                />
              </div>
              <div className="prodContent text-end p-3">
                <p className="lead m-0 fs-6">
                  {" "}
                  شنطه لاب توب ضهر مزوده بمدخل USB
                </p>
                <span className="d-block">310.00 جنيه</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="container margn mt-4 ">
        <div className="row ">
          <div className="col-md-12 bagrond">
            <div className="content-section">
              <h1>جوميا مصر - أكبر موقع للتسوق عبر الإنترنت</h1>
              <p style={{ fontSize: "1.2rem" }}>
                اشترِ كل احتياجاتك بأفضل الأسعار وأعلى جودة أونلاين
              </p>
              <p>
                أصبحت مواقع التسوق عبر الإنترنت الآن جزء من حياتنا اليومية، لأن
                الجميع يتمتع بإمكانية شراء كل ما يحتاجه، سواء كانت ملابس أو
                إلكترونيات، دون الحاجة إلى الانتقال من المنزل. هذا ما تقدمه
                جوميا مصر، والأفضل من هذا أن <b>جوميا مصر</b>
                <br />
                توفر لك امكانية العثور علي كل المنتجات التي تبحث عنها في متجر
                واحد. هذا ما يجعل جوميا أحد أفضل مواقع تسوق عبر الإنترنت في مصر.
              </p>
            </div>

            <div className="content-section">
              <h1>استمتع بعروض وخصومات من جوميا لا تنتهي</h1>
              <p>
                جوميا هي موقع تسوق الكتروني ممتع وسهل الاستخدام عند الحاجة إلي
                شراء أي نوع من المنتجات والأجهزة. نؤكد لك أنك ستعثر على شيء
                يعجبك في الكتالوج الخاص بنا عند التصفح عبر الانترنت في جوميا
                مصر. نوفر لكم
                <b>كتالوج ملابس</b> اون <br />
                لاين يحتوي علي أكثر من مليون منتج للاختيار من بينهم! يمكنك
                التسوق لأي شيء تحتاجه سواء كنت تبحث عن{" "}
                <b>
                  <a href="#" className="text-dark">
                    ملابس محجبات
                  </a>
                </b>{" "}
                او ملابس الأطفال واستمتع بالحصول علي{" "}
                <b>
                  <a href="#" className="text-dark">
                    احدث الازياء
                  </a>
                </b>
                في مصر. جوميا مصر هي واحدة من أكبر مواقع تسوق
                <br />
                اون لاين لأننا نسعى دائمًا إلى توسيع الكتالوج الخاص بنا لتقديم
                جميع المنتجات والاجهزة التي يمكن لعملائنا أن يبحثوا عن شرائها
                عبر الإنترنت
              </p>
              <p style={{ fontSize: "1.2rem" }}>
                تسوق الآن جميع المنتجات عبر الإنترنت
              </p>
            </div>

            <div className="content-section">
              <h1>اطلب إلكترونيات أو أجهزة منزلية من جوميا مصر</h1>
              <p>
                اشتري الاكلات والطعام المفضل لديك من خلال{" "}
                <b>
                  <a href="#" className="text-dark">
                    سوبرماركت جوميا
                  </a>
                </b>{" "}
                الخاص بنا عبر الإنترنت مليء بجميع مكونات الطعام التي قد تحتاج
                لها، بالاضافة الي جميع مستلزمات المنزل. يمكنك التسوق بسهولة
                لشراء اي{" "}
                <b>
                  <a href="#" className="text-dark">
                    أجهزة منزلية
                  </a>
                </b>{" "}
                من مجموعة <br />
                كبيرة متاحة لدينا اون لاين تحتوي علي اجهزة تشمل{" "}
                <b>
                  <a href="#" className="text-dark">
                    ثلاجات
                  </a>
                </b>
                غسالة ملابس او{" "}
                <b>
                  <a href="#" className="text-dark">
                    تكيف
                  </a>
                </b>
                ، على سبيل المثال. اشتري من اكبر تشكيلة{" "}
                <b>
                  <a href="#" className="text-dark">
                    الكترونيات
                  </a>
                </b>{" "}
                عالية الجودة اون لاين من موردين وعلامات تجارية موثوقة. يمكنك
                شراء{" "}
                <b>
                  <a href="#" className="text-dark">
                    تلفزيون
                  </a>
                </b>{" "}
                جديد لغرفة المعيشة ،<br /> الهاتف الذكي المفضل لديك أو حتى جهاز{" "}
                <b>
                  <a href="#" className="text-dark">
                    بلاي ستيشن
                  </a>
                </b>{" "}
                <b>4</b>و
                <b>
                  <a href="#" className="text-dark">
                    PS5
                  </a>
                </b>
                ، على سبيل المثال . احصل على أحدث إصدارات الهواتف قبل أي شخص آخر
                في البلد، سواء كنت ترغب في شراء احدث الموبايلات من ابل، شاومي،
                انفنكس،{" "}
                <b>
                  <a href="#" className="text-dark">
                    سامسونج
                  </a>
                </b>
                او ريلمي،
                <br /> من بين العديد من ماركات الهواتف الاخري للاختيار من بينها
                بأرخص اسعار
                <b>
                  <a href="#" className="text-dark">
                    الموبايلات
                  </a>
                </b>{" "}
                فى مصر. لدينا مجموعة مذهلة أخرى متاحة لدينا وهي مخصصة لأجهزة
                الكمبيوتر وأجهزة{" "}
                <b>
                  <a href="#" className="text-dark">
                    اللاب توب
                  </a>
                </b>{" "}
                وجميع الاكسسوارات الخاصة بهم تسوق لشراء طابعة ، <br />
                سكانر ، مستلزمات الكمبيوتر أو شاشة كمبيوتر لتحسين تجربة
                الكمبيوتر أو اللاب توب الخاصة بك إلى اقصى حد! يتم توفير جميع هذه
                المنتجات وأكثر في جوميا مصر بأرخص سعر في السوق، لذلك اشتري اون
                لاين اليوم واستمتع بأسرع <br />
                توصيل الي اي مكان في مصر.
              </p>
            </div>

            <div className="content-section">
              <h1>تصفح تشكيلة منتجات الصحة والجمال</h1>
              <p>
                نقدم لك في جوميا مصر كتالوج{" "}
                <b>
                  <a href="#" className="text-dark">
                    الصحة والجمال
                  </a>
                </b>{" "}
                من العلامات التجارية المعروفة في جميع أنحاء العالم. يمكنك العثور
                على جميع منتجات الصحة والجمال التي تشمل مستحضرات التجميل،{" "}
                <b>
                  <a href="#" className="text-dark">
                    العطور
                  </a>
                </b>{" "}
                أو منتجات{" "}
                <b>
                  <a href="#" className="text-dark">
                    ازالة الشعر
                  </a>
                </b>
                في متجرنا عبر <br />
                الإنترنت. اكتشف كتالوج جوميا مصر لجميع{" "}
                <b>
                  <a href="#" className="text-dark">
                    مستلزمات الأطفال
                  </a>
                </b>{" "}
                من طعام اطفال،{" "}
                <b>
                  <a href="#" className="text-dark">
                    حفاضات
                  </a>
                </b>
                ، ألعاب تعليمية أو سراير اطفال. ابدأ بالتسوق عبر الإنترنت لشراء{" "}
                <b>
                  <a href="#" className="text-dark">
                    اثاث منزلي
                  </a>
                </b>
                ، ديكورات او اجهزة منزلية لكل غرفة في المنزل.
              </p>
              <p>
                اشتري منتجات
                <b>
                  <a href="#" className="text-dark">
                    {" "}
                    جوميا اكسبريس
                  </a>
                </b>{" "}
                المتاحة لدينا، وهي منتجات متواجدة في مخزن جوميا مصر، مما يعني أن
                يمكنك الاستمتاع بشحن سريع والحصول على منتجاتك في أقل وقت ممكن.
                هناك المئات من مختلف أنواع المنتجات المتاحة لدينا
                <br /> للاختيار من بينها في فئات ومجموعات مختلفة لمساعدتك في
                الوصول إلى المنتجات التي تبحث عنها في جوميا مصر. يتم شحن العديد
                من المنتجات المتاحة لدينا من الخارج تحت كتالوج{" "}
                <b>
                  <a href="#" className="text-dark">
                    جوميا جلوبال
                  </a>
                </b>
                ، والتي يتم توصيلها الي باب المنزل اينما كنت.
              </p>
            </div>

            <div className="content-section">
              <h1>اكتشف عالم التسوق عبر الإنترنت اليوم</h1>
              <p>
                اشتري عبر الانترنت واستمتع بأكبر عروض جوميا مصر التي لا تنتهي
                وتسوق من بين اكبر خصومات المتاحة طوال العام، وكل هذا من أجل
                إرضاء عملائنا. انضم إلى أعضاء صفحتنا على فيس بوك لتعرف كل{" "}
                <b>
                  <a href="#" className="text-dark">
                    العروض والتخفيضات
                  </a>
                </b>{" "}
                قبل اي
                <br /> شخص آخر والتي تشمل اسبوع الموبايلات، رمضان، عيد ميلاد
                جوميا،{" "}
                <b>
                  <a href="#" className="text-dark">
                    عيد الأم
                  </a>
                </b>
                . كما يمكنك أيضاً شراء تذاكر للحفلات والمناسبات الهامة الرائعة.
                لدينا فريق متخصص للإجابة على كل أسئلتك فورًا على مواقع التواصل
                الإجتماعي وخدمة العملاء <br />
                متوفرة طوال الأسبوع للمساعدة في حل أي مشاكل والإجابة على جميع
                الاستفسارات. ببساطه اتصل علي
                <b>
                  <a href="#" className="text-dark">
                    19586
                  </a>
                </b>{" "}
                واذا كنت بحاجة الي المساعدة في انشاء{" "}
                <b>
                  <a href="#" className="text-dark">
                    طلب جديد
                  </a>
                </b>{" "}
                علي جوميا اضغط الرقم 1. بالإضافة إلى ذلك، إذا كنت تمتلك محل
                <br /> أو متجر، يمكنك الآن البدء في بيع منتجاتك على جوميا مصر
                حيث نحرص دائمًا على مساعدتك في زيادة مبيعاتك! كبر حجم أعمالك
                الآن وانضم لفريق{" "}
                <b>
                  <a href="#" className="text-dark">
                    شركاء جوميا
                  </a>
                </b>
                . جوميا مصر توفر لك أفضل خدمات عبر الانترنت، منتجات أصلية 100%
                وعروض <br />
                حصرية. استمتع بأسرع توصيل الى باب المنزل، طرق دفع امنة و سهلة،
                بالاضافة الى ارجاع مجاني لجميع المنتجات خلال{" "}
                <b>
                  <a href="#" className="text-dark">
                    {" "}
                    14 يوم{" "}
                  </a>
                </b>{" "}
                من الاستلام، ويمكنك ايضا زيارة صفحة سياسة الاسترجاع للمزيد من
                المعلومات عن إرجاع منتجات جوميا. ابقوا <br />
                معنا للحصول على أفضل الأسعار في مصر على جميع المنتجات المفضلة
                لديك طوال العام مع جوميا مصر.{" "}
              </p>
            </div>
            <div className="content-section">
              <h1>
                ماهي{" "}
                <b>
                  <a href="#" className="text-dark">
                    طرق الدفع المتاحة
                  </a>
                </b>{" "}
                علي موقع جوميا؟
              </h1>
              <ul>
                <li>الدفع عند الاستلام.</li>
                <li>البطاقات الائتمانية (فيزا – ماستر كارد).</li>
                <li>فوري.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};

export default Home;
