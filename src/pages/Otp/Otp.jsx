import styles from "./Otp.module.css";
import image from "../../assets/otp.svg";
import icon from "../../assets/icon.svg";
import { useState } from "react";

const Otp = () => {
  const [otp, setOtp] = useState({});
  const onChangeValue = (e) => {
    setOtp(e.target.value);
    console.log(otp);
  };
  const otpHandler = (e) => {
  
    e.preventDefault();
    console.log(otp);
    setOtp("");
  };
  return (
    <div className={styles.otp_section}>
      <div className={styles.otp_content}>
        <img src={image} alt="" className={styles.image} />
        <h1 className={styles.title}>Enter One Time Password</h1>
        <p className={styles.para}>
          We’ve sent a OTP code to your number
          <span className={styles.number}>+92 341 4651125</span>
        </p>
        <div className={styles.inputfield}>
          <input
            type="text"
            maxlength="1"
            class="input"
            onChange={onChangeValue}
          />
          <input
            type="text"
            maxlength="1"
            class="input"
            onChange={onChangeValue}
          />
          <input
            type="text"
            maxlength="1"
            class="input"
            onChange={onChangeValue}
          />
          <input
            type="text"
            maxlength="1"
            class="input"
            onChange={onChangeValue}
          />
        </div>
        <p className={styles.otp_number}>
          Didn’t you receive the OTP?{" "}
          <span className={styles.resend_otp}>Resend OTP</span>{" "}
        </p>
        <div className={styles.btn_otp}>
          <button onClick={otpHandler}>
            <span className={styles.icon}>
              <img src={icon} alt="" />
            </span>
            Send Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
