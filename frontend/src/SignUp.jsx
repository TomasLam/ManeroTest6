import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

function SignUp({ goTo }) {
  return (
    <div className="login">
      <div className="login-content">
        <h1>Sign up</h1>

        <div className="input-group">
          <label>Name</label>
          <input type="text" placeholder="Your name" />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="********" />
        </div>

        <div className="input-group">
          <label>Confirm password</label>
          <input type="password" placeholder="********" />
        </div>

        <button
          className="primary-btn"
          onClick={() => goTo("account-created")}
        >
          SIGN UP
        </button>

        <p className="signup-text">
          Already have an account?{" "}
          <span onClick={() => goTo("login")}>Sign in</span>
        </p>

        <div className="social-icons">
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaGoogle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
