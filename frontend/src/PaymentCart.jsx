import { useState } from "react";

function PaymentCart({ goTo, cart }) {
  const [selected, setSelected] = useState("card2");

  const total = cart.reduce((sum, item) => sum + item.price, 0);


  return (
    <div className="payment-page">

      <header className="shop-header">
        <span onClick={() => goTo("shipping-details")}>←</span>
        <h1>Payment method</h1>
        <span></span>
      </header>

      <div className="payment-content">

        <h3>Credit cards</h3>

        <label className="payment-option">
          <span>7741 ****** 6644</span>
          <input
            type="radio"
            checked={selected === "card1"}
            onChange={() => setSelected("card1")}
          />
        </label>

        <label className="payment-option">
          <span>7674 ****** 1884</span>
          <input
            type="radio"
            checked={selected === "card2"}
            onChange={() => setSelected("card2")}
          />
        </label>

        <h3>Other</h3>

        <label className="payment-option">
          <span>Apple Pay</span>
          <input type="radio" />
        </label>

        <label className="payment-option">
          <span>PayPal</span>
          <input type="radio" />
        </label>

        <label className="payment-option">
          <span>Cash</span>
          <input type="radio" />
        </label>

        <button
  className="primary-btn"
  onClick={async () => {

    const order = {
      customerName: "Test Customer",
      total: total
    };

    await fetch("http://localhost:5098/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    });

    if (selected === "card1") {
      goTo("order-failed");
    } else {
      goTo("order-success");
    }
  }}
>
  PAY
</button>




      </div>
    </div>
  );
}

export default PaymentCart;
