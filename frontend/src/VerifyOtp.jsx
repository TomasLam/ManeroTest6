function VerifyOtp({ goTo }) {
  return (
    <div className="login">
      <div className="login-content">
        <h1>Verify your phone number</h1>

        <p className="subtitle">
          Enter your OTP code here.
        </p>

        <div className="otp-container">
          <input className="otp-input" maxLength="1" />
          <input className="otp-input" maxLength="1" />
          <input className="otp-input" maxLength="1" />
          <input className="otp-input" maxLength="1" />
        </div>

        <p className="resend">
          Didn’t receive the OTP? <span>Resend.</span>
        </p>

        <button
          className="primary-btn"
          onClick={() => goTo("login")}
        >
          VERIFY
        </button>
      </div>
    </div>
  );
}

export default VerifyOtp;
