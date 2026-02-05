function Wishlist({ goTo }) {
  return (
    <div className="wishlist">

      {/* Header */}
      <header className="shop-header">
        <span>☰</span>
        <h1>Wishlist</h1>
        <span className="cart">
          🛒<span className="badge">2</span>
        </span>
      </header>

      {/* Wishlist items */}
      <div className="wishlist-list">

        <div className="wishlist-item">
          <div className="wishlist-image"></div>
          <div className="wishlist-info">
            <h4>Summer dress</h4>
            <p className="price">$42.89</p>
            <p className="stars">★★★★★ (3)</p>
          </div>
          <div className="wishlist-actions">
            ❤️
            <button className="lock">🔒</button>
          </div>
        </div>

        <div className="wishlist-item">
          <div className="wishlist-image sale"></div>
          <div className="wishlist-info">
            <h4>Shoulder bag</h4>
            <p className="price">
              <span className="old">$38.00</span> $30.00
            </p>
            <p className="stars">★★★★★ (3)</p>
          </div>
          <div className="wishlist-actions">
            ❤️
            <button className="lock">🔒</button>
          </div>
        </div>

      </div>

      {/* Bottom nav */}
      <nav className="bottom-nav">
        <span onClick={() => goTo("products")}>🏠</span>
        <span onClick={() => goTo("categories")}>🔍</span>
        <span>🛍️</span>
        <span className="active">❤️</span>
        <span>👤</span>
      </nav>
    </div>
  );
}

export default Wishlist;
