function ForgotPassword({ goTo }) {
  return (

    <div className="login">
      <div className="login-content">
        <h1>Forgot password</h1>

        <p className="subtitle">
          Please enter your email address. You will receive a link to create a new password via email.
        </p>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <button
           className="primary-btn"
          onClick={() => goTo("reset")}
          >
          SEND
        </button>
      </div>
    </div>
  );


}

export default ForgotPassword;
