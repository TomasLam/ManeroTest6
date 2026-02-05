function AddNewAddress({ goTo }) {
  return (
    <div className="add-address">

      
      <header className="shop-header">
        <button className="nav-btn" onClick={() => goTo("my-address")}>
          ←
        </button>
        <h1>Add a new address</h1>
        <span></span>
      </header>

      
      <div className="map-placeholder"></div>

      
      <div className="edit-form">

        <div className="input-group">
          <label>Title</label>
          <input type="text" placeholder="Mom" />
        </div>

        <div className="input-group">
          <label>Enter a new address</label>
          <input
            type="text"
            placeholder="3646 S 58th Ave, Cicero, IL 60804, USA"
          />
        </div>

        <label className="remember">
          <input type="checkbox" />
          Use current location
        </label>

        <button
          className="primary-btn"
          onClick={() => goTo("my-address")}
        >
          SAVE ADDRESS
        </button>

      </div>
    </div>
  );
}

export default AddNewAddress;
