function Profile({ goTo }) {
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
        <div
        className="profile-item clickable"
        onClick={() => goTo("edit-profile")}
        >
            ✏️ Edit profile
      </div>


        <div className="profile-item">📦 Order history</div>
        <div className="profile-item">💳 Payment method</div>
            <div
              className="profile-item clickable"
            onClick={() => goTo("my-address")}
            >
                📍 My address
        </div>

        <div className="profile-item">🏷️ My promocodes</div>
        <div className="profile-item">🚪 Sign out</div>
      </div>

      <nav className="bottom-nav">

        <span onClick={() => goTo("products")}>🏠</span>
        <span onClick={() => goTo("categories")}>🔍</span>
    <span>🛍️</span>
        <span onClick={() => goTo("wishlist")}>❤️</span>
         <span className="active">👤</span>
      </nav>
    </div>
  );
}

export default Profile;
