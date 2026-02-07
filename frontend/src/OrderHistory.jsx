import { useEffect, useState } from "react";

function OrderHistory({ goTo }) {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5098/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="order-history">

      <header className="shop-header">
        <button className="nav-btn" onClick={() => goTo("profile")}>
          ←
        </button>
        <h1>Order history</h1>
        <span></span>
      </header>

      <div className="orders">

        {orders.map(order => (
          <div key={order.id} className="order-item">
            <div className="order-top">
              <strong>#{order.id}</strong>
               <span className="status delivered">Completed</span>
            </div>

            <small>
              {new Date(order.created).toLocaleString()}
            </small>

            <p className="price">${order.total}</p>

            <span
              className="clickable"
             onClick={() => goTo("track-order")}
            >
              Track order
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}

export default OrderHistory;
