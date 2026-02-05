function LeaveReview({ goTo }) {
  return (
    <div className="leave-review">

      {/* Header */}
      <header className="shop-header">
        <button className="nav-btn" onClick={() => goTo("reviews")}>
          ←
        </button>
        <h1>Leave a review</h1>
        <span></span>
      </header>

      <div className="review-content">

        <div className="review-icon">💬</div>

        <h2>Please rate the quality of service for the order!</h2>

        <div className="rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>

        <div className="input-group">
          <label>Comment</label>
          <textarea placeholder="Enter your comment"></textarea>
        </div>

        <button
          className="primary-btn"
          onClick={() => goTo("reviews")}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default LeaveReview;
