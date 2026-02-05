function Reviews({ goTo }) {
  return (
    <div className="reviews-page">

      {/* Header */}
      <header className="shop-header">
        <button className="nav-btn" onClick={() => goTo("product-detail")}>
          ←
        </button>
        <h1>Reviews</h1>
        <span></span>
      </header>

      {/* Reviews list */}
      <div className="reviews-list">

        <div className="review-card">
          <div className="avatar"></div>
          <div>
            <strong>Cameron Williamson</strong>
            <p className="date">23 Jan 2022</p>
            <p className="stars">★★★★★</p>
            <p>Great product and fast delivery!</p>
          </div>
        </div>

        <div className="review-card">
          <div className="avatar"></div>
          <div>
            <strong>Theresa Webb</strong>
            <p className="date">23 Jan 2022</p>
            <p className="stars">★★★★★</p>
            <p>Comfortable and looks amazing.</p>
          </div>
        </div>

        <div className="review-card">
          <div className="avatar"></div>
          <div>
            <strong>Marvin McKinney</strong>
            <p className="date">23 Jan 2022</p>
            <p className="stars">★★★★★</p>
            <p>Very happy with this purchase.</p>
          </div>
        </div>

        <div className="review-card">
          <div className="avatar"></div>
          <div>
            <strong>Jacob Jones</strong>
            <p className="date">23 Jan 2022</p>
            <p className="stars">★★★★★</p>
            <p>Good quality for the price.</p>
          </div>
        </div>

            <button
            className="secondary-btn"
            onClick={() => goTo("leave-review")}
            >
            Leave review
            </button>

      </div>
    </div>

    
  );
}

export default Reviews;
