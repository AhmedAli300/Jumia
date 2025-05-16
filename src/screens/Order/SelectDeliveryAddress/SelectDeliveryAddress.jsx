import "./SelectDeliveryAddress.css";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";
import { SiSpringsecurity } from "react-icons/si";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { IoIosArrowForward } from "react-icons/io";
import { BsTicketPerforated } from "react-icons/bs";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import { PaymentForm } from "../PaymentMethod/PaymentMethod";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";


const citiesWithRegions = {
  القاهرة: [
    "مدينة نصر",
    "مصر الجديدة",
    "المعادي",
    "الزيتون",
    "حلوان",
    "شبرا",
    "العباسية",
    "التجمع",
    "عين شمس",
  ],
  الجيزة: [
    "الدقي",
    "الهرم",
    "فيصل",
    "العجوزة",
    "إمبابة",
    "6 أكتوبر",
    "الشيخ زايد",
    "الصف",
    "البدرشين",
  ],
  الإسكندرية: [
    "سيدي جابر",
    "العصافرة",
    "المنتزه",
    "محرم بك",
    "العجمي",
    "سموحة",
    "باكوس",
    "المعمورة",
  ],
  الدقهلية: ["المنصورة", "طلخا", "ميت غمر", "دكرنس", "السنبلاوين", "بلقاس"],
  " البحر الأحمر": ["الغردقة", "رأس غارب", "سفاجا", "القصير", "مرسى علم"],
  البحيرة: [
    "دمنهور",
    "كفر الدوار",
    "إيتاي البارود",
    "رشيد",
    "أبو حمص",
    "المحمودية",
  ],
  الفيوم: ["الفيوم", "سنورس", "إطسا", "أبشواي", "يوسف الصديق"],
  الغربية: ["طنطا", "المحلة الكبرى", "كفر الزيات", "زفتى", "سمنود"],
  الإسماعيلية: ["الإسماعيلية", "فايد", "القنطرة شرق", "القنطرة غرب"],
  المنوفية: ["شبين الكوم", "منوف", "سرس الليان", "قويسنا", "أشمون"],
  المنيا: ["المنيا", "ملوي", "مطاي", "بني مزار", "أبو قرقاص"],
  القليوبية: ["بنها", "شبرا الخيمة", "طوخ", "قليوب", "الخصوص"],
  " الوادي الجديد": ["الخارجة", "الداخلة", "الفرافرة", "باريس"],
  السويس: ["السويس", "عتاقة", "العين السخنة"],
  أسوان: ["أسوان", "إدفو", "كوم أمبو", "نصر النوبة", "دراو"],
  أسيوط: ["أسيوط", "ديروط", "منفلوط", "البداري", "أبوتيج"],
  " بني سويف": ["بني سويف", "الواسطى", "الفشن", "ناصر", "إهناسيا"],
  بورسعيد: ["بورفؤاد", "حي الشرق", "حي العرب", "حي الضواحي"],
  دمياط: ["دمياط", "رأس البر", "فارسكور", "الزرقا", "كفر سعد"],
  الشرقية: ["الزقازيق", "بلبيس", "العاشر من رمضان", "فاقوس", "أبو كبير"],
  " جنوب سيناء": ["شرم الشيخ", "طور سيناء", "دهب", "نويبع", "سانت كاترين"],
  " كفر الشيخ": ["كفر الشيخ", "دسوق", "بيلا", "قلين", "الحامول"],
  مطروح: ["مرسى مطروح", "النجيلة", "سيدي براني", "السلوم", "العلمين"],
  الأقصر: ["الأقصر", "الكرنك", "الزينية", "أرمنت", "إسنا"],
  قنا: ["قنا", "نجع حمادي", "دشنا", "قفط", "قوص"],
  " شمال سيناء": ["العريش", "الشيخ زويد", "رفح", "بئر العبد", "الحسنة"],
  سوهاج: ["سوهاج", "أخميم", "المراغة", "طما", "طهطا"],
};

const cities = Object.keys(citiesWithRegions).map((city) => ({
  value: city,
  label: city,
}));

const stripePromise = loadStripe("YOUR_PUBLISHABLE_STRIPE_KEY");

const SelectDeliveryAddress = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");

  const regions = citiesWithRegions[selectedCity] || [];

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setSelectedRegion(""); // إعادة ضبط المنطقة عند تغيير المدينة
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "/api/orders", // أو المسار حسب الباك إند بتاعك
        {
          orderItems: [], // حسب السلة أو المنتجات اللي اختارها المستخدم
          shippingAddress: {
            fullName,
            phone,
            address,
            selectedCity,
            selectedRegion,
            details,
          },
          paymentMethod: "COD", // مثلاً
          shippingMethod: "HomeDelivery", // مثلاً
          shippingPrice: 50,
          totalPrice: 250, // دا لازم تحسبيه بناءً على المنتجات
        },
        {
          // headers: {
          //   Authorization: `Bearer ${userToken}`, // لو فيه تسجيل دخول
          // },
        }
      );

      console.log("Order created:", response.data);
      // ممكن تعملي redirect أو رسالة نجاح
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const cartSize = useSelector((state) => state.cart.size);
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="order">
      <div
        className="title"
        style={{ height: "90px", backgroundColor: "white", width: "100%" }}
      >
        <div style={{ fontSize: "80%" }}>اختيار عنوان تسليم</div>

        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <MdOutlinePermPhoneMsg color="gray" size={"25px"} />

            <div
              style={{
                fontSize: "15px",
                marginRight: "10px",
                color: "gray",
                direction: "rtl",
              }}
            >
              <div>تحتاج مساعدة ؟</div>
              <div>
                <a style={{ color: "blue" }} href="#">
                  اتصل بنا
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <RiArrowGoBackLine color="gray" size={"25px"} />

            <div
              style={{
                fontSize: "15px",
                marginRight: "10px",
                color: "gray",
                direction: "rtl",
              }}
            >
              <div>عملية إرجاع</div>
              <div>سهلة</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <SiSpringsecurity color="gray" size={"25px"} />
            <div
              style={{
                fontSize: "13px",
                marginRight: "10px",
                color: "gray",
                direction: "rtl",
              }}
            >
              <div>مدفوعات</div>
              <div>آمنة</div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center align-items-center ">
        <div
          className="mx-3 rounded"
          style={{ backgroundColor: "white", width: "60%" }}
        >
          <h6 style={{ margin: "15px" }}>1.عنوان العميل</h6>
          <hr />
          <p
            style={{
              margin: "10px",
              fontSize: "13px",
              color: "gray",
              marginRight: "20px",
            }}
          >
            إدخال العنوان
          </p>
          {/* الاسم */}
          <div>
            <TextField
              id="outlined-textarea"
              label="الاسم كامل"
              placeholder="ادخل الاسم كامل"
              multiline
              style={{
                direction: "rtl",
                marginTop: "2%",
                marginRight: "1%",
                width: "98%",
              }}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* الرقم */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ marginTop: "2%", marginRight: "2%", marginLeft: "2%" }}
            >
              <div style={{ color: "gray" }}>الكود</div>
              <div>20+</div>
            </div>
            <TextField
              id="outlined-textarea"
              label=" رقم الهاتف"
              placeholder="ادخل رقم الهاتف"
              multiline
              style={{
                direction: "rtl",
                marginTop: "2%",
                marginLeft: "2%",
                marginRight: "2%",
                width: "40%",
              }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* العنوان */}
          <div>
            <TextField
              id="outlined-textarea"
              label="العنوان"
              placeholder="ادخل العنوان"
              multiline
              style={{
                direction: "rtl",
                marginTop: "2%",
                marginRight: "1%",
                marginBottom: "2%",
                width: "98%",
              }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* المدينة والمنطقة */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              direction: "rtl",
            }}
          >
            <TextField
              className="m-2 w-50"
              select
              label="المدينة"
              value={selectedCity}
              onChange={handleCityChange}
            >
              {cities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className="m-2 w-50"
              select
              label="المنطقة"
              value={selectedRegion}
              onChange={handleRegionChange}
              disabled={regions.length === 0}
            >
              {regions.length === 0 ? (
                <MenuItem value="">لا توجد مناطق</MenuItem>
              ) : (
                regions.map((region) => (
                  <MenuItem key={region} value={region}>
                    {region}
                  </MenuItem>
                ))
              )}
            </TextField>
          </div>

          {/* تفاصيل اكثر حول العنوان */}
          <div>
            <TextField
              id="outlined-textarea"
              label="تفاصيل أكثر حول العنوان"
              placeholder="ادخل تفاصيل أكثر حول العنوان"
              multiline
              style={{
                direction: "rtl",
                marginTop: "2%",
                marginRight: "1%",
                marginBottom: "2%",
                width: "98%",
              }}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>

          <hr />

          <div
            className="d-flex justify-content-end align-items-center"
            style={{ margin: "10px" }}
          >
            <Button variant="text" style={{ color: "orange" }}>
              إلغاء
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "orange" }}
              onClick={handleSubmit}
            >
              حفظ
            </Button>
          </div>
        </div>

        <div
          className="rounded"
          style={{
            backgroundColor: "white",
            width: "20%",
            direction: "rtl",
          }}
        >
          <h6 style={{ margin: "6px" }}>ملخص الطلبية</h6>
          <hr className="m-0" />
          <div
            className="mx-2"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>عدد المنتجات({cartSize})</p>
            <p>({cart?.cartTotal?.toFixed(2)} جنيه)</p>
          </div>
          <div
            className="mx-2"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>التوصيل</p>
            <p>20.00 جنيه</p>
          </div>
          <hr className="m-0" />
          <div
            className="mx-2"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>الاجمالي</p>
            <p>({(+cart?.cartTotal?.toFixed(2) + 20.0).toFixed(2)} جنيه)</p>
          </div>
          <hr className="m-0" />
          <p className="m-1" style={{ fontSize: "13px" }}>
            <BsTicketPerforated className="m-1" />
            ستتمكن من إضافة قسيمة الشراء عند اختيار طريقة الدفع الخاصة بك.
          </p>
          <Button
            variant="contained"
            disabled
            style={{
              width: "90%",
              margin: "5%",
              color: "white",
              backgroundColor: "gray",
              padding: "4%",
            }}
          >
            تأكيد الطلبية
          </Button>
        </div>
      </div>

      <div
        className="rounded"
        style={{ backgroundColor: "white", width: "60%", marginRight: "10%" }}
      >
        <h6 style={{ margin: "15px", color: "gray", padding: "1.5%" }}>
          2.طريقة الدفع
        </h6>
        <Elements stripe={stripePromise}>{/* <PaymentForm /> */}</Elements>
      </div>

      <a href="/products" style={{ marginRight: "10%" }}>
        <IoIosArrowForward />
        العودة الى المشتريات
      </a>
    </div>
  );
};

export default SelectDeliveryAddress;
