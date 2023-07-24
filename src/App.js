import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
// import Navbar from "./components/NavBar/NavBar";
import Login from "./pages/login/Login";
import ForgetPassword from "./pages/Forgetpassword/ForgetPassword";
import Otp from "./pages/Otp/Otp";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
