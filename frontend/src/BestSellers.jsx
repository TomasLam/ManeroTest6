


function BestSellers({ goTo }) {
  return (
    <div className="shop">

     
      <header className="shop-header">
        <button className="nav-btn" onClick={() => goTo("products")}>
          ←
        </button>
        <h1>Best sellers</h1>
        <span className="cart">
          🛒<span className="badge">2</span>
        </span>
      </header>

     
      <div className="filters-bar">
        <button
  className="nav-filterbtn"
  onClick={() => goTo("filters")}
>
  Filters
</button>

        <span>Sorting by</span>
      </div>

      
      <div className="products-grid">
        <div className="product-card">
          <div className="product-image"></div>
          <p className="stars">★★★★★ (3)</p>
          <h4>Purple sneakers</h4>
          <p className="price">$22.97</p>
        </div>

        <div className="product-card">
          <div className="product-image"></div>
          <p className="stars">★★★★★ (3)</p>
          <h4>Warm hat</h4>
          <p className="price">$6.93</p>
        </div>

        <div className="product-card">
          <div className="product-image sale"></div>
          <p className="stars">★★★★★ (3)</p>
          <h4>Summer dress</h4>
          <p className="price">
            <span className="old">$38.00</span> $15.98
          </p>
        </div>

        <div className="product-card">
          <div className="product-image"></div>
          <p className="stars">★★★★★ (3)</p>
          <h4>Denim shorts</h4>
          <p className="price">$54.96</p>
        </div>
      </div>

    </div>
  );
}

export default BestSellers;
