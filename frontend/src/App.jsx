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





function App() {
  const [page, setPage] = useState("onboarding");

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
  return <ProductList goTo={setPage} />;


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



    default:
      return <Onboarding goTo={setPage} />;
  }
}

export default App;
