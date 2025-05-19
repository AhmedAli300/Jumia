import React ,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './usersetting.css';
import { Button, TextField, MenuItem } from '@mui/material';
import {  useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUserData, updateUserMobilePhone } from '../../store/Slice/authSlice'; 

const FormData = () => {
  const user = useSelector((state) => state.auth.user);
  const [firstName, setFirstName] = useState(user?.name || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [phone, setPhone] = useState(user?.mobilePhone || " غير متوفر");
  const [address, setAddress] = useState(user?.address?.street || "غير متوفر");
  const [rejon, setrejon] = useState(user?.address?.governorate || "غير متوفر");
  const [city, setcity] = useState(user?.address?.city || "غير متوفر");

    const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#f68b1e',
      },
    },
    '& label.Mui-focused': {
      color: '#f68b1e',
    },
  };

  const handleSave = async () => {
  try {
    const token = localStorage.getItem('token'); 

    await updateUserData({
      name: `${firstName} ${lastName}`,
      gender: user.gender || 'female', 
      dateOfBirth: user.dateOfBirth || '2001-07-01'
    }, token);

    if (phone !== user.mobilePhone) {
      await updateUserMobilePhone(phone, token);
    }

      toast.success('تم حفظ التعديلات بنجاح');
  } catch (err) {
    console.error(err);
    toast.error(err.response?.data?.message || 'حدث خطأ أثناء التحديث');
  }
};



  return (
    <div dir="rtl" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div className="container py-4">
        <div className="row gx-4 m-4">

          <div className="col-md-3 bg-white py-3 shadow-sm">
            <ul className="list-unstyled small p-0 mt-0">
              {[
                { icon: "bi-person", label: "حسابي على جوميا", active: true },
                { icon: "bi-bag", label: "الطلبات" },
                { icon: "bi-envelope-open", label: "صندوق الرسائل الواردة" },
                { icon: "bi-star", label: "التقييمات والتعليقات" },
                { icon: "bi-ticket", label: "قسائم الشراء" },
                { icon: "bi-heart", label: "المفضلة" },
                { icon: "bi-shop", label: "البائعون الذين تتابعهم" },
                { icon: "bi-eye", label: "المنتجات التي تمت مشاهدتها مؤخرا" },
                { label: "إدارة الحساب" },
                { label: "جهات الاتصال" },
                { label: "تفضيلات النشرة الإخبارية" },
                { label: "غلق الحساب" },
                { icon: "bi-box-arrow-right", label: "تسجيل الخروج", logout: true },
              ].map(({ icon, label, active, logout }, idx) => {
                const isSectionBorder = label === "إدارة الحساب" || label === "تسجيل الخروج";
                return (
                  <li
                    key={idx}
                    className={`
                      sidebar-item
                      d-flex 
                      align-items-center 
                      ${logout ? "justify-content-center" : ""}
                      mt-2
                      py-2 
                      px-2 
                      ${isSectionBorder ? "border-top" : ""}
                    `}
                    style={{
                      cursor: "pointer",
                      transition: "background-color .2s",
                      fontSize: "17px",
                      color: logout ? "#f8982d" : "#000",
                      backgroundColor: active ? "#d4d4d6" : "transparent",
                    }}
                    onMouseEnter={e => {
                      if (!active) e.currentTarget.style.backgroundColor = "#d4d6d6";
                    }}
                    onMouseLeave={e => {
                      if (!active) e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    {!logout && icon && (
                      <i className={`bi ${icon} me-0 gap-2 mx-2`} style={{ fontSize: "17px", color: "#000" }} />
                    )}
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-md-9">
            <div className="shadow bg-white rounded p-4 h-100">
              <div className="row g-4">
                <h4 className="fw-bold mb-0 text-dark border-bottom py-2">تعديل العنوان</h4>

                <div className="col-md-12 d-flex gap-3 p-3">
                  <TextField fullWidth label="الاسم الأول" variant="outlined" sx={textFieldStyle}  value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
                  <TextField fullWidth label="الاسم الأخير" variant="outlined" sx={textFieldStyle}  value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="col-md-12 d-flex gap-3 p-3 align-items-center">
                  <p className="mb-0">+20</p>
                  <TextField fullWidth label="رقم الهاتف" variant="outlined" sx={textFieldStyle} value={phone}   onChange={(e) => setPhone(e.target.value)}/>
                  <p className="mb-0">+20</p>
                  <TextField fullWidth label="رقم هاتف آخر" variant="outlined" sx={textFieldStyle} />
                </div>

                <div className="col-md-12 p-3">
                  <TextField fullWidth label="العنوان" variant="outlined" sx={textFieldStyle} value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className="col-md-12 p-3">
                  <TextField fullWidth label="تفاصيل أكثر حول العنوان" variant="outlined" sx={textFieldStyle} />
                </div>

                <div className="col-md-12 d-flex gap-3 p-3">
                  <TextField
  select
  fullWidth
  label="اختر المنطقة"
  variant="outlined"
  sx={textFieldStyle}
  value={rejon}
  onChange={(e) => setrejon(e.target.value)}
>
  {!["cairo", "giza", "alex", "suez", "portsaid", "sohag"].includes(rejon) && (
    <MenuItem value={rejon}>{rejon}</MenuItem>
  )}
  <MenuItem value="cairo">cairo</MenuItem>
  <MenuItem value="giza">giza</MenuItem>
  <MenuItem value="alex">alex</MenuItem>
  <MenuItem value="suez">suez</MenuItem>
  <MenuItem value="portsaid">port said</MenuItem>
  <MenuItem value="sohag">sohag</MenuItem>
</TextField>

<TextField
  select
  fullWidth
  label="اختر المدينة"
  variant="outlined"
  sx={textFieldStyle}
  value={city}
  onChange={(e) => setcity(e.target.value)}
>
  {!["qena", "qaft", "qus", "edfu", "rehab1", "rehab2", "salam"].includes(city) && (
    <MenuItem value={city}>{city}</MenuItem>
  )}
  <MenuItem value="qena">qena</MenuItem>
  <MenuItem value="qaft">qaft</MenuItem>
  <MenuItem value="qus">qus</MenuItem>
  <MenuItem value="edfu">edfu</MenuItem>
  <MenuItem value="rehab1">rehab 1</MenuItem>
  <MenuItem value="rehab2">rehab 2</MenuItem>
  <MenuItem value="salam">el salam</MenuItem>
</TextField>
                </div>

                <div className="col-md-12 d-flex justify-content-end px-3">
                  <Button
                    onClick={handleSave}

                    variant="contained"
                    sx={{
                      mt: 3,
                      px: 4,
                      fontWeight: 'bold',
                      backgroundColor: '#f68b1e',
                      '&:hover': {
                        backgroundColor: '#e57d18',
                        
                      },
                    }}
                  >
                    حفظ
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FormData;
