function Categories({ goTo }) {

  return (
    <div className="categories">

      {/* Top bar */}
      <header className="shop-header">
        <span>☰</span>
        <input
          className="search"
          type="text"
          placeholder="Search"
        />
        <span className="cart">
          🛒<span className="badge">2</span>
        </span>
      </header>

      {/* Tabs */}
      <div className="tabs">
        <span className="tab active">Men</span>
        <span className="tab">Women</span>
        <span className="tab">Kids</span>
        <span className="tab">Accessories</span>
      </div>

      {/* Categories grid */}
      <div className="category-grid">
        <div className="category-card">Dresses</div>
        <div className="category-card">Pants</div>
        <div className="category-card large">Accessories</div>
        <div className="category-card">Shoes</div>
        <div className="category-card">T-shirts</div>
      </div>

  <button
  className="contact-btn"
  onClick={() => goTo("contact")}
>
  Contact
</button>


      {/* Bottom nav */}
      <nav className="bottom-nav">
        <button
    className="nav-btn"
    onClick={() => goTo("products")}
  >
    🏠
  </button>
        <span className="active">🔍</span>
        <span>🛍️</span>
        <button
  className="nav-btn"
  onClick={() => goTo("wishlist")}
>
  ❤️
</button>

        <span>👤</span>
      </nav>
    </div>
  );
}

export default Categories;
