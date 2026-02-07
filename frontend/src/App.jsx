import { useState } from "react";

import Onboarding from "./Onboarding";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import ResetDone from "./ResetDone";
import AccountCreated from "./AccountCreated";
import VerifyPhone from "./VerifyPhone";
import VerifyOtp from "./VerifyOtp";
import ProductList from "./ProductList";
import Categories from "./Categories";
import Contact from "./Contact";

import BestSellers from "./BestSellers";
import ProductDetail from "./ProductDetail";
import Reviews from "./Reviews";
import LeaveReview from "./LeaveReview";
import Wishlist from "./Wishlist";
import Filters from "./Filters";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import MyAddress from "./MyAddress";
import AddNewAddress from "./AddNewAddress";
import PaymentMethods from "./PaymentMethods";
import AddCard from "./AddCard";
import OrderHistory from "./OrderHistory";

import TrackOrder from "./TrackOrder";
import MyPromocodes from "./MyPromocodes";
import AddVoucher from "./AddVoucher";
import Cart from "./Cart";




function App() {
  const [page, setPage] = useState("onboarding");
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
  setCart(prev => [...prev, product]);
  };

  switch (page) {
    case "login":
      return <Login goTo={setPage} />;

    case "signup":
      return <SignUp goTo={setPage} />;

    case "forgot":
      return <ForgotPassword goTo={setPage} />;

    case "reset":
      return <ResetPassword goTo={setPage} />;

    case "done":
      return <ResetDone goTo={setPage} />;

    case "account-created":
      return <AccountCreated goTo={setPage} />;

    case "verify-phone":
      return <VerifyPhone goTo={setPage} />;

    case "verify-otp":
      return <VerifyOtp goTo={setPage} />;


        case "products":
  return (
    <ProductList
      goTo={setPage}
      addToCart={addToCart}
      cartCount={cart.length}
    />
  );



      case "categories":
  return <Categories goTo={setPage} />;

case "contact":
  return <Contact goTo={setPage} />;

    case "best-sellers":
  return <BestSellers goTo={setPage} />;
    
      case "product-detail":
  return <ProductDetail goTo={setPage} />;

      case "reviews":
  return <Reviews goTo={setPage} />;
 

      case "leave-review":
  return <LeaveReview goTo={setPage} />;

  case "wishlist":
  return <Wishlist goTo={setPage} />;

case "filters":
  return <Filters goTo={setPage} />;


    case "profile":
  return <Profile goTo={setPage} />;

  case "edit-profile":
  return <EditProfile goTo={setPage} />;


      case "my-address":
  return <MyAddress goTo={setPage} />;

  case "add-address":
  return <AddNewAddress goTo={setPage} />;


    case "payment-methods":
  return <PaymentMethods goTo={setPage} />;

case "add-card":
  return <AddCard goTo={setPage} />;

  case "order-history":
  return <OrderHistory goTo={setPage} />;


      case "track-order":
  return <TrackOrder goTo={setPage} />;

  case "my-promocodes":
  return <MyPromocodes goTo={setPage} />;

  case "add-voucher":
  return <AddVoucher goTo={setPage} />;

    case "cart":
  return <Cart goTo={setPage} cart={cart} />;




    default:
      return <Onboarding goTo={setPage} />;
  }
}

export default App;
