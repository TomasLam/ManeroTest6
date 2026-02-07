function TrackOrder({ goTo }) {
  return (
    <div className="track-order">

      <header className="shop-header">
        <button className="nav-btn" onClick={() => goTo("order-history")}>
          ←
        </button>
        <h1>Track your order</h1>
        <span></span>
      </header>

       <div className="track-content">
        
        <div className="track-icon">📍</div>

        <h3>Your order:</h3> 
        <p>#100345</p>

        <div className="timeline">

          <div className="step done">
            <div className="dot"></div>
            <div>
              <strong>Order created</strong>
              <small>We have received your order</small>
            </div>
          </div>

          <div className="step done">
            <div className="dot"></div>
            <div>
              <strong>Order confirmed</strong>
              <small>Your order has been confirmed</small>
              </div>
          </div>

          <div className="step active">
            <div className="dot"></div>
            <div>
              <strong>Order shipping</strong>
              <small>Estimated for Feb 02, 2022</small>
            </div>
          </div>

          <div className="step">
            <div className="dot"></div>
            <div>
              <strong>Courier delivering</strong>
              <small>Estimated for Feb 06, 2022</small>
            </div>
          </div>

          <div className="step">
            <div className="dot"></div>
            <div>
              <strong>Receiving</strong>

               <small>Estimated for Feb 06, 2022</small>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TrackOrder;
