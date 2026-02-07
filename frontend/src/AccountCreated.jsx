function AccountCreated({ goTo }) {
   return (

    <div className="login">
      
      <div className="login-content" style={{ textAlign: "center" }}>
        <div className="logo" style={{ marginBottom: "2rem" }}>
          <span>MANERO </span>

        </div>

        <h1> Account Created! </h1>

        <p className="subtitle">
            Your account has been created successfully.
        </p>

        <button
           className="primary-btn"
           onClick={() => goTo("verify-phone")}
        >
          SHOP NOW
        </button>
      </div>
    </div>

  );
}

export default AccountCreated;
