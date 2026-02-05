function MyAddress({ goTo }) {
  return (
    <div className="address-page">

      {/* Header */}
      <header className="shop-header">
        <button className="nav-btn" onClick={() => goTo("profile")}>
          ←
        </button>
        <h1>My address</h1>
        <span></span>
      </header>

      {/* Address list */}
      <div className="address-list">

        <div className="address-item">
          <span>🏠</span>
          <div className="address-info">
            <strong>Home</strong>
            <p>9000 S Kirkland Ave, Chicago</p>
          </div>
          <span>✏️</span>
        </div>

        <div className="address-item">
          <span>🏢</span>
          <div className="address-info">
            <strong>Work</strong>
            <p>9000 S Kirkland Ave, Chicago</p>
          </div>
          <span>✏️</span>
        </div>

        <div className="address-item">
          <span>📍</span>
          <div className="address-info">
            <strong>Other</strong>
            <p>9000 S Kirkland Ave, Chicago</p>
          </div>
          <span>✏️</span>
        </div>

      </div>

      <button
  className="secondary-btn"
  onClick={() => goTo("add-address")}
>
  + Add a new address
</button>


    </div>
  );
}

export default MyAddress;
