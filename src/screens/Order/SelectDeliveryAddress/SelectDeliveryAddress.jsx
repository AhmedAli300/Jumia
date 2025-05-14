import React from "react";
// import "./SelectDeliveryAddress.css";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";
import { SiSpringsecurity } from "react-icons/si";
// import { MdStars } from "react-icons/md";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IoIosArrowForward } from "react-icons/io";
import { BsTicketPerforated } from "react-icons/bs";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "../PaymentMethod/PaymentMethod";

const stripePromise = loadStripe("YOUR_PUBLISHABLE_STRIPE_KEY"); 

const SelectDeliveryAddress = () => {
  return (
    <>
      <div
        className="title my-3"
        style={{ height: "90px", backgroundColor: "white", width: "100%" }}
      >
        {/* <h1
          style={{
            marginTop: "20px",
            marginLeft: "20px",
            fontFamily: "sans-serif",
            fontSize: "90%",
          }}
        >
          <MdStars color="orange" /> JUMIA
        </h1> */}

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
            تعديل العنوان
          </p>

          <div>
            <TextField
              id="outlined-textarea"
              label="الاسم الاول"
              placeholder="ادخل الاسم الاول"
              multiline
              style={{
                direction: "rtl",
                marginTop: "20px",
                marginLeft: "20px",
                marginRight: "20px",
                width: "40%",
              }}
            />
            <TextField
              label="الاسم الأخير"
              placeholder="ادخل الاسم الأخير"
              multiline
              style={{
                direction: "rtl",
                marginTop: "20px",
                marginLeft: "20px",
                width: "40%",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ marginTop: "20px", marginRight: "4%", marginLeft: "2%" }}
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
                marginTop: "20px",
                marginLeft: "20px",
                marginRight: "20px",
                width: "30%",
              }}
            />
            <div style={{ marginTop: "20px", marginLeft: "3%" }}>
              <div style={{ color: "gray" }}>رمز الهاتف</div>
              <div>20+</div>
            </div>
            <TextField
              label="رقم هاتف اضافي"
              placeholder="ادخل رقم هاتفك الاضافي"
              multiline
              style={{
                direction: "rtl",
                marginTop: "20px",
                marginLeft: "20px",
                width: "30%",
              }}
            />
          </div>

          <div>
            <TextField
              id="outlined-textarea"
              label="العنوان"
              placeholder="ادخل العنوان"
              multiline
              style={{
                direction: "rtl",
                marginTop: "20px",
                marginLeft: "20px",
                marginRight: "20px",
                width: "82.5%",
              }}
            />
          </div>

          <div>
            <TextField
              id="outlined-textarea"
              label="تفاصيل أكثر حول العنوان"
              placeholder="ادخل تفاصيل أكثر حول العنوان"
              multiline
              style={{
                direction: "rtl",
                marginTop: "20px",
                marginLeft: "20px",
                marginRight: "20px",
                width: "82.5%",
              }}
            />
          </div>

          <FormControl
            sx={{ m: 1, minWidth: 120 }}
            style={{ marginRight: "20px", marginTop: "20px", width: "40%" }}
          >
            <Select displayEmpty inputProps={{ "aria-label": "Without label" }}>
              <MenuItem value="">
                <em>القاهرة</em>
              </MenuItem>
              <MenuItem value="الاقصر">الاقصر</MenuItem>
              <MenuItem value="الجيزة">الجيزة</MenuItem>
              <MenuItem value="اسوان">اسوان</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{ m: 1, minWidth: 120 }}
            style={{ marginRight: "20px", marginTop: "20px", width: "40%" }}
          >
            <Select displayEmpty inputProps={{ "aria-label": "Without label" }}>
              <MenuItem value="">
                <em>القاهرة</em>
              </MenuItem>
              <MenuItem value="الاقصر">الاقصر</MenuItem>
              <MenuItem value="الجيزة">الجيزة</MenuItem>
              <MenuItem value="اسوان">اسوان</MenuItem>
            </Select>
          </FormControl>

          <hr />

          <div
            className="d-flex justify-content-end align-items-center"
            style={{ margin: "10px" }}
          >
            <Button variant="text" style={{ color: "orange" }}>
              إلغاء
            </Button>
            <Button variant="contained" style={{ backgroundColor: "orange" }}>
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
            <p>عدد المنتجات(1)</p>
            <p>230.00 جنيه</p>
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
            <p>250.00 جنيه</p>
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

      {/* <div
        className="rounded"
        style={{ backgroundColor: "white", width: "60%", marginRight: "10%" }}
      >
        <h6 style={{ margin: "15px", color: "gray", padding: "1.5%" }}>
          2.تفاصيل التوصيل
        </h6>
      </div> */}

      <div
        className="rounded"
        style={{ backgroundColor: "white", width: "60%", marginRight: "10%" }}
      >
        <h6 style={{ margin: "15px", color: "gray", padding: "1.5%" }}>
          3.طريقة الدفع
        </h6>
        <Elements stripe={stripePromise}>
          {/* <PaymentForm /> */}
        </Elements>
      </div>

      <a href="/products" style={{ marginRight: "10%" }}>
        <IoIosArrowForward />
        العودة الى المشتريات
      </a>
    </>
  );
};

export default SelectDeliveryAddress;
