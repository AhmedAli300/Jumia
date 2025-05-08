import React from 'react'

const SideMenu = () => {
  return (
    <>
        <section className="hero-section container mx-auto row p-3">
        <aside className="bg-white col-md-2 d-none p-3 d-md-flex flex-column justify-content-between text-end position-relative">
          <div className="cat-1">
            <a className="text-decoration-none first-link" href="#">
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
    
    </>
  )
}

export default SideMenu