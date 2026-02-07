function AddVoucher({ goTo }) {
  return (
    <div className="voucher-page">

      <header className="shop-header">
        <span onClick={() => goTo("my-promocodes")}>←</span>
        <h1>My promocodes</h1>
        <span></span>
      </header>

      <div className="voucher-empty">

        <div className="voucher-circle">
          %
        </div>

        <h2>Your don’t have promocodes yet!</h2>
        <p>Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum</p>

        <label>ENTER THE VOUCHER</label>

        <input
          className="voucher-input"
          placeholder="Promocode2022"
        />

        <button className="primary-btn">
          SUBMIT
        </button>

      </div>

    </div>
  );
}

export default AddVoucher;
