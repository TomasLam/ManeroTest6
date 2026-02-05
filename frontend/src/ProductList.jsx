function ProductList({ goTo }) {


  return (
    <div className="shop">

   
      <header className="shop-header">
        <span className="menu">☰</span>
        <h1>MANERO</h1>
        <span className="cart">
          🛒<span className="badge">2</span>
        </span>
      </header>

      
      <section className="hero">
        <h2>Welcome to Manero!</h2>
        <p>50% off</p>
      </section>

     
      <section className="section">
        <div className="section-header">
          <h3>Best sellers</h3>
          <span
            className="view-all clickable"
            onClick={() => goTo("best-sellers")}
          >
             view all
            </span>

        </div>

        <div className="products">
          <div
            className="product-card"
              onClick={() => goTo("product-detail")}
            >

            <div className="product-image sale"></div>
            <p className="stars">★★★★★ (3)</p>
            <h4>Summer dress</h4>
            <p className="price">
              <span className="old">$30.00</span> $15.98
            </p>
          </div>



          <div className="product-card">
            <div className="product-image"></div>
            <p className="stars">★★★★★ (3)</p>
            <h4>Black sneakers</h4>
            <p className="price">$29.95</p>
          </div>

          
        </div>
      </section>

      
      <section className="campaign">
        <h3>Take 50% off now!</h3>
        <button className="primary-btn small">SHOP NOW</button>
      </section>

      {/* Featured */}
      <section className="section">
        <div className="section-header">
          <h3>Featured products</h3>
          <span className="view-all">view all</span>
        </div>

        <div className="products">
          <div className="product-card">
            <div className="product-image"></div>
            <h4>Summer dress</h4>
            <p className="price">$42.89</p>
          </div>

          <div className="product-card">
            <div className="product-image sale"></div>
            <h4>Shoulder bag</h4>
            <p className="price">
              <span className="old">$38.00</span> $30.00
            </p>
          </div>

          <div className="product-card">
            <div className="product-image"></div>
            <h4>Denim shorts</h4>
            <p className="price">$54.96</p>
          </div>
        </div>
      </section>

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
       <button
  className="nav-btn"
  onClick={() => {
    console.log("SEARCH CLICKED");
    goTo("categories");
  }}
>
  🔍
  </button>


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

export default ProductList;
