function Login({ goTo }) {
  return (
    <div className="login">
      <div className="skip-container">

        <button className="skip-btn" onClick={() => goTo("products")}>
          Skip
        </button>

      </div>

      <div className="login-content">
          <h1>Welcome Back!</h1>
        <p className="subtitle">Sign in to continue</p>

        <div className="input-group">
          <label>Email</label>

          <input type="email" placeholder="you@example.com" />

        </div>

        <div className="input-group">

          <label>Password</label>
          <input type="password" placeholder="********" />
        </div>

        <div className="login-options">
          <label className="remember">
            <input type="checkbox" />

            Remember me

          </label>

          <span className="forgot" onClick={() => goTo("forgot")}>
            Forgot password?
          </span>

        </div>

        <button className="primary-btn">SIGN IN</button>

        <p className="signup-text">
            Don’t have an account?{" "}
          <span onClick={() => goTo("signup")}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
