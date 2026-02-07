function OrderSuccess({ goTo }) {
  return (
    <div className="result-page success">

      <div className="result-icon success">✔</div>

      <h2>Thank you for your order!</h2>
      <p>Your order will be delivered on time.</p>

      <button
        className="primary-btn"
        onClick={() => goTo("order-history")}
      >
        VIEW ORDERS
      </button>

      <span
        className="secondary-link"
        onClick={() => goTo("products")}
      >
        Continue shopping
      </span>

    </div>
  );
}

export default OrderSuccess;
