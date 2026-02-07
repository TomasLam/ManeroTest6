function ResetPassword({ goTo }) {
  return (
    <div className="login">
      <div className="login-content">
        <h1>Reset password</h1>

        <p className="subtitle">
          Enter new password and confirm.
        </p>

        <div className="input-group">
          <label>New password</label>
          <input type="password" placeholder="********" />
        </div>

        <div className="input-group">
          <label>Confirm password</label>
          <input type="password" placeholder="********" />
        </div>


        <button
          className="primary-btn"
          onClick={() => goTo("done")}
        >
          CHANGE PASSWORD
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;
