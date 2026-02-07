function ProductDetail({ goTo }) {
  return (
    <div className="product-detail">

     
      <header className="shop-header">
        <button className="nav-btn" onClick={() => goTo("products")}>
          ←
        </button>
        <h1>MANERO</h1>
        <span>🛒</span>
      </header>

     
      <div className="detail-image"></div>

      
      <div className="detail-content">

        <h2>Summer dress</h2>
        <p className="stars">★★★★★ (3)</p>
        <p className="price">$15.98</p>

       
        <div className="option-group">
          <p>Size</p>
          <div className="options">
            <span>XS</span><span>S</span><span className="active">M</span>
            <span>L</span><span>XL</span><span>XXL</span>
          </div>
        </div>

       

        <div className="option-group">
          <p>Color</p>
          <div className="colors">
            <span className="color red"></span>
            <span className="color blue"></span>
            <span className="color black active"></span>
          </div>
        </div>

       

        <div className="description">
          <p>
            Amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>


        <button className="primary-btn">ADD TO CART</button>

        

        <div className="reviews">
          <div className="section-header">
            <h3>Reviews (23)</h3>
            <span
                className="view-all clickable"
                onClick={() => goTo("reviews")}
                >
                view all
        </span>

          </div>

          <div className="review">
            <strong>Annette Black</strong>
            <p className="stars">★★★★★</p>
             <p>Great quality and fast delivery!</p>
          </div>


          <div className="review">
            <strong>Jenny Wilson</strong>
            <p className="stars">★★★★★</p>
            <p>Really comfortable and looks great.</p>
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default ProductDetail;
