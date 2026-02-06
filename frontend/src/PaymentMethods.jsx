function PaymentMethods({ goTo }) {
  return (
    <div className="payment-page">
      <header className="shop-header">
        <button className="nav-btn" onClick={() => goTo("profile")}>←</button>
        <h1>Payment method</h1>
        <button className="nav-btn" onClick={() => goTo("add-card")}>＋</button>
      </header>

      <div className="cards-row">
        <div className="card visa purple">
            <span className="purplecard">VISA</span>
          <p>7741 6588 2123 6644</p>
          <small>KRISTIN WATSON</small> <small className="expirecard">EXP.END</small>
          
        </div>
      {/*  <div className="card visa green">
            <span className="greencard">VISA</span>
          <p>7741 6588 2123 6644</p>
          <small>KRISTIN WATSON</small>
        </div>*/}
      </div>  

      <div className="pay-list">
        <div className="pay-item"> Apple Pay ✓</div>
        <div className="pay-item">PayPal ✓</div>
        <div className="pay-item" onClick={() => goTo("add-card")}>
          Payoneer ＋
        </div>
      </div>
    </div>
  );
}

export default PaymentMethods;
