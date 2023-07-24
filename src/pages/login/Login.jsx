import React, { useState } from "react";
import styles from "./Login.module.css";
// import Navbar from "../../components/NavBar/NavBar";
import image1 from "../../assets/home.svg";
import icon from "../../assets/icon.svg";

const Login = () => {
  const [input, setInput] = useState({});
  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const handlerInput = (e) => {
    e.preventDefault();
    
    console.log(input);
    setInput("");
  };
  return (
    <div>
      {/* <Navbar /> */}
      <div className={styles.contact_section}>
        <div className={styles.contact_content}>
          <img src={image1} alt="" className={styles.image} />

          <h1 className={styles.title}>Tell us about yourself</h1>
          <form action="">
            <div className={styles.form_controller}>
              <div className={styles.form_control}>
                <p>Full Name</p>
                <input
                  type="text"
                  placeholder="Sana Kryzle"
                  name="name"
                  onChange={onChangeInput}
                />
              </div>
              <div className={styles.form_control}>
                <p>Email</p>

                <input
                  type="text"
                  placeholder="example@gmail.com"
                  name="email"
                  onChange={onChangeInput}
                />
              </div>
              <div className={styles.form_control}>
                <p>Location</p>
                <input
                  type="text"
                  placeholder="Enter Location"
                  name="location"
                  onChange={onChangeInput}
                />
              </div>
            </div>
            <div className={styles.btn_next}>
              <button className={styles.btn} onSubmit={handlerInput}>
                <span className={styles.icon}>
                  <img src={icon} alt="" />
                </span>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
