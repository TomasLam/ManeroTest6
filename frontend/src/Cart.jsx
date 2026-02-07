function Cart({ goTo }) {
  return (
    <div className="cart-page">

      <header className="shop-header">
        <span className="menu">☰</span>
        <h1>Cart</h1>
        <span></span>
      </header>

      <div className="cart-empty">

        <div className="cart-circle">
          🛍️
        </div>

        <h2>Your cart is empty!</h2>
        <p>Looks like you haven't made your order yet.</p>

        <button
          className="primary-btn"
          onClick={() => goTo("products")}
        >
          SHOP NOW
        </button>

      </div>

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
