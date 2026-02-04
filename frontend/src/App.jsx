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

    default:
      return <Onboarding goTo={setPage} />;
  }
}

export default App;
