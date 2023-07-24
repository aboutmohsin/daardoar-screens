import styles from "./ForgetPassword.module.css";
import image from "../../assets/otp.svg";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.svg";
import { useState } from "react";

const ForgetPassword = () => {
  const [phone, setPhone] = useState("");
  const onChnageNumber = (e) => {
    setPhone(e.target.value);
    console.log(phone);
  };
  const numberHandler = (e) => {
    e.preventDefault();
    console.log(phone);
    setPhone("");
  };
  return (
    <div className={styles.forget_section}>
      <div className={styles.forget_content}>
        <img src={image} alt="" className={styles.image} />
        <h1 className={styles.title}>We need to verify your phone number</h1>
        <p className={styles.para}>
          We will send you one-time password to you mobile number
        </p>
        <div className={styles.inputfield}>
          <p className={styles.mobile_number}>Enter Mobile number</p>
          <input type="text" class="input" onChange={onChnageNumber} />
        </div>
        <p className={styles.otp_number}>
          Didn’t you receive the OTP?{" "}
          <Link to="" className={styles.resend_otp}>
            Resend OTP
          </Link>
        </p>
        <div className={styles.btn_forget}>
          <button onChange={numberHandler}>
            <span className={styles.icon}>
              <img src={icon} alt="" />
            </span>{" "}
            Send Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
