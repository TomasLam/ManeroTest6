function OrderFailed({ goTo }) {
  return (
    <div className="result-page failed">

      <div className="result-icon failed">✖</div>


      <h2>Sorry! Your order has failed!</h2>
      <p>Something went wrong. Please try again.</p>

      <button
        className="primary-btn"
        onClick={() => goTo("payment-cart")}
      >
        TRY AGAIN
      </button>

      <span
        className="secondary-link"
        onClick={() => goTo("profile")}
      >
        Go to my profile
      </span>

    </div>

    
  );
}

export default OrderFailed;
