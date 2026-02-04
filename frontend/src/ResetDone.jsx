function ResetDone({ goTo }) {
  return (
    <div className="login">
      <div className="login-content" style={{ textAlign: "center" }}>
        <div className="logo" style={{ marginBottom: "2rem" }}>
          <span>MANERO</span>
        </div>

        <h1>Your password has been reset!</h1>

        <p className="subtitle">
          You can now sign in with your new password.
        </p>

        <button
          className="primary-btn"
          onClick={() => goTo("login")}
        >
          DONE
        </button>
      </div>
    </div>
  );
}

export default ResetDone;
