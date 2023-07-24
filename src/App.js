import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Login from "./pages/login/Login";
import ForgetPassword from "./pages/Forgetpassword/ForgetPassword";
import Otp from "./pages/Otp/Otp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/properties" element={<Properties />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<L />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/contact" element={<AboutUS />} />
      <Route path="/propertydetails" element={<ListingPage />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
