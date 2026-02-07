import { useState } from "react";

function Profile({ goTo }) {

  const [showLogout, setShowLogout] = useState(false);

  return (
    <div className="profile">

      <header className="shop-header">
        <span>☰</span>
        <h1>My profile</h1>
        <span></span>
      </header>

      <div className="profile-info">
        <div className="avatar"></div>
        <h3>Kristin Watson</h3>
        <p>kristinwatson@mail.com</p>
      </div>

      <div className="profile-menu">

        <div className="profile-item clickable" onClick={() => goTo("edit-profile")}>
          ✏️ Edit profile
        </div>

        <div className="profile-item clickable" onClick={() => goTo("order-history")}>
          📦 Order history
        </div>

        <div className="profile-item clickable" onClick={() => goTo("payment-methods")}>
          💳 Payment method
        </div>

        <div className="profile-item clickable" onClick={() => goTo("my-address")}>
          📍 My address
        </div>

        <div
          className="profile-item clickable"
          onClick={() => goTo("my-promocodes")}
        >
          🏷️ My promocodes
      </div>


        <div
          className="profile-item clickable"
          onClick={() => setShowLogout(true)}
        >
          🚪 Sign out
        </div>

      </div>

      <nav className="bottom-nav">
        <span onClick={() => goTo("products")}>🏠</span>
        <span onClick={() => goTo("categories")}>🔍</span>
        <span>🛍️</span>
        <span onClick={() => goTo("wishlist")}>❤️</span>
        <span className="active">👤</span>
      </nav>

      {/* POPUP */}
      {showLogout && (
        <div className="logout-overlay">
          <div className="logout-modal">
            <p>Are you sure you want to sign out?</p>

            <button
              className="primary-btn"
              onClick={() => goTo("login")}
            >
              SURE
            </button>

            <button
              className="cancel-btn"
              onClick={() => setShowLogout(false)}
            >
              CANCEL
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Profile;
