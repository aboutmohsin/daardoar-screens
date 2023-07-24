import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      let parsed = JSON.parse(localStorage.getItem("user"));
      setUser(parsed);
      setName(parsed.name);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.menu}>
        <Link to="/">Home</Link>
        <Link>Companies</Link>
        <Link to="/buy">Buy</Link>
        <Link style={{ display: user ? "block" : "none" }} to="/sell">
          Sell
        </Link>
        <Link>Blogs</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div
        className={styles.buttons}
        style={{ display: user ? "none" : "flex" }}
      >
        <button
          className={styles.login}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <button
          className={styles.signup}
          onClick={() => {
            navigate("/signup");
          }}
        >
          Create account
        </button>
      </div>
      <div
        className={styles.buttons}
        style={{ display: user ? "flex" : "none" }}
      >
        <button className={styles.login}>{name}</button>
        <button
          className={styles.signup}
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/buy";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
