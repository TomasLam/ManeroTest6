function Filters({ goTo }) {
  return (
    <div className="filters-page">

  
      <header className="shop-header">
        <button className="nav-btn" onClick={() => goTo("best-sellers")}>
          ←
        </button>
        <h1>Filter</h1>
        <span></span>
      </header>

      <section>
        <h4>Size</h4>
        <div className="options">
          <span>XS</span><span>S</span><span>M</span>
          <span>L</span><span>XL</span><span>XXL</span>
        </div>
      </section>

      <section>
        <h4>Color</h4>
        <div className="colors">
          <span className="color red"></span>
          <span className="color blue"></span>
          <span className="color beige"></span>
          <span className="color navy"></span>
          <span className="color black"></span>
        </div>
      </section>

      
      <section>
        <h4>Price</h4>
        <input type="range" min="50" max="1500" />
      </section>

      <button
        className="primary-btn"
        onClick={() => goTo("best-sellers")}
      >
        APPLY FILTERS
      </button>

    </div>
  );
}

export default Filters;
