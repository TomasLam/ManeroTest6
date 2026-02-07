function MyPromocodes({ goTo }) {
  return (

    <div className="promocodes">

      <header className="shop-header">

        <span onClick={() => goTo("profile")}>←</span>

        <h1>My promocodes</h1>

        <span></span>
      </header>

      <div className="promo-tabs">
          <button className="active">Current</button>
        <button>Used</button>
      </div>



      <div className="promo-list">
        <div className="promo-card">
          <div className="promo-img"></div>
          <div className="promo-info">
            <h4>Acme Co.</h4>
            <p className="promo-discount red">50%</p>
             <p className="promo-date">Valid until June 30, 2022</p>
          </div>
          <div className="promo-copy">📋</div>
        </div>

        <div className="promo-card">
          <div className="promo-img"></div>
          <div className="promo-info">
            <h4>Abstergo Ltd.</h4>
              <p className="promo-discount orange">30%</p>
            <p className="promo-date">Valid until June 30, 2022</p>
          </div>
          <div className="promo-copy">📋</div>
          
        </div>

        <div className="promo-card">
          <div className="promo-img"></div>
          <div className="promo-info">
            <h4>Barone LLC.</h4>
            <p className="promo-discount green">15%</p>
            <p className="promo-date">Valid until June 30, 2022</p>
          </div>
          <div className="promo-copy">📋</div>
        </div>

      </div>
            <button
                className="primary-btn"
                 onClick={() => goTo("add-voucher")}
             >
                Add voucher
            </button>

    </div>
  );
}

export default MyPromocodes;
