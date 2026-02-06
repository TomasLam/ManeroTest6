function AddCard({ goTo }) {
  return (
    <div className="add-card">
      <header className="shop-header">
        <button className="nav-btn" onClick={() => goTo("payment-methods")}>
          ←
        </button>
        <h1>Add a new card</h1>
        <span></span>
      </header>

      <div className="edit-form">
        <div className="input-group">
          <label>Name on card</label>
          <input placeholder="Kristin Watson" />
        </div>

        <div className="input-group">
          <label>Card number</label>
          <input placeholder="**** **** **** 6644" />
        </div>

        <div className="input-group">
          <label>Expiry</label>
          <input placeholder="12/27" />
        </div>

        <button
          className="primary-btn"
          onClick={() => goTo("payment-methods")}
        >
          SAVE CARD
        </button>
      </div>
    </div>
  );
}

export default AddCard;
