function VerifyPhone({ goTo }) {
  return (
    <div className="login">
      <div className="login-content">
        <h1>Verify your phone number</h1>

        <p className="subtitle">
          We have sent you an SMS with a code to number +17 0123456789.
        </p>

        <div className="input-group">
          <label>Phone number</label>
          <input type="tel" placeholder="+17 0123456789" />
        </div>

        <button
          className="primary-btn"
          onClick={() => goTo("verify-otp")}
        >
          CONFIRM
          </button>
      </div>
    </div>
  );
}

export default VerifyPhone;
