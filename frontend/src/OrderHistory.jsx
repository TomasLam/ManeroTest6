function OrderHistory({ goTo }) {
  return (
    <div className="order-history">

      {/* Header */}
      <header className="shop-header">
        <button className="nav-btn" onClick={() => goTo("profile")}>
          ←
        </button>
        <h1>Order history</h1>
        <span></span>
      </header>

      {/* Orders */}
      <div className="orders">

        <div className="order-item">
          <div className="order-top">
            <strong>#100345</strong>
            <span className="status shipping">Shipping</span>
            
          </div>
          <small>Feb 02, 2022 at 8:32 PM</small>
          <p className="price">$354.32</p>
          <span
            className="clickable"
            onClick={() => goTo("track-order")}
            >
                 Track order
            </span>

        </div>

        <div className="order-item">
          <div className="order-top">
            <strong>#100345</strong>
            <span className="status delivered">Delivered</span>
          </div>
          <small>Feb 02, 2022 at 8:32 PM</small>
          <p className="price">$354.32</p>
          <span>Track order</span>
        </div>

        <div className="order-item">
          <div className="order-top">
            <strong>#100345</strong>
            <span className="status canceled">Canceled</span>
          </div>
          <small>Feb 02, 2022 at 8:32 PM</small>
          <p className="price">$354.32</p>
          <span>Track order</span>
        </div>

      </div>

    </div>
  );
}

export default OrderHistory;
