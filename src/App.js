import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Blogs from "./pages/Blogs";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckOut";
import CompareProduct from "./pages/CompareProduct";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OurStore from "./pages/OurStore";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ResetPassword from "./pages/ResetPassword";
import ShipingPolicy from "./pages/ShipingPolicy";
import SignUp from "./pages/SignUp";
import SingleBlog from "./pages/SingleBlog";
import TermsAndConditon from "./pages/TermsAndConditon";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<OurStore />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="reset" element={<ResetPassword />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsAndConditon />} />
            <Route path="refund" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShipingPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
