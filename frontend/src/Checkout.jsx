function Checkout({ goTo, cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);


  return (
    <div className="checkout-page">

      <header className="shop-header">
        <span onClick={() => goTo("cart")}>←</span>
        <h1>Checkout</h1>
        <span></span>

      </header>

      <div className="checkout-content">

         <h3>My order</h3>

        {cart.map((item, index) => (
          <div key={index} className="checkout-item">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}


        <div className="checkout-summary">
          <div>
            <span>Delivery</span>
            <span>Free</span>

          </div>
          <div className="total">
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>

        <h3>Shipping details</h3>
        <div className="checkout-box">8000 S Kirkland Ave, Chicago</div>

        <h3>Payment method</h3>
        <div className="checkout-box">**** **** **** 6644</div>

        <label>Comment</label>
        <textarea placeholder="Enter your comment"></textarea>

         <button
            className="primary-btn"
             onClick={() => goTo("shipping-details")}
        >
            CONFIRM ORDER
        </button>


      </div>
    </div>
  );
}

export default Checkout;
