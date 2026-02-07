function Cart({ goTo, cart }) {
  const isEmpty = !cart || cart.length === 0;

  return (
    <div className="cart-page">

      <header className="shop-header">
        <span className="menu">☰</span>
        <h1>Cart</h1>
        <span></span>
      </header>

      {isEmpty ? (
        <div className="cart-empty">
          <div className="cart-circle">🛍️</div>

          <h2>Your cart is empty!</h2>
          <p>Looks like you haven't made your order yet.</p>

          <button
            className="primary-btn"
            onClick={() => goTo("products")}
          >
            SHOP NOW
          </button>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-img"></div>

              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>
            </div>
          ))}

          <button
            className="primary-btn"
              onClick={() => goTo("checkout")}
          >
             PROCEED TO CHECKOUT
          </button>

        </div>
      )}

      <nav className="bottom-nav">
        <span onClick={() => goTo("products")}>🏠</span>
        <span onClick={() => goTo("categories")}>🔍</span>
        <span className="active">🛍️</span>
        <span onClick={() => goTo("wishlist")}>❤️</span>
        <span onClick={() => goTo("profile")}>👤</span>
      </nav>

    </div>
  );
}

export default Cart;
