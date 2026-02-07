function ShippingDetails({ goTo }) {
  return (
    <div className="shipping-page">

      <header className="shop-header">
        <span onClick={() => goTo("checkout")}>←</span>
        <h1>Shipping details</h1>
        <span></span>
      </header>

      <div className="shipping-content">

        <div className="map-placeholder"></div>

        <div className="address-option">
          <input type="radio" name="address" />
          <div>
            <strong>Home</strong>
            <p>8000 S Kirkland Ave, Chicago</p>
          </div>
        </div>

        <div className="address-option">
          <input type="radio" name="address" />
          <div>
            <strong>Work</strong>
            <p>8000 S Kirkland Ave, Chicago</p>
          </div>
        </div>

        <div className="address-option">
          <input type="radio" name="address" defaultChecked />
          <div>
            <strong>Enter an address</strong>
            <input
              className="address-input"
              placeholder="3646 S 58th Ave, Cicero"
            />
          </div>
        </div>

        <label className="location-check">
          <input type="checkbox" />
          Use current location
        </label>

        <button
            className="primary-btn"
            onClick={() => goTo("payment-cart")}
        >
            SAVE ADDRESS
        </button>


      </div>
    </div>
  );
}

export default ShippingDetails;
