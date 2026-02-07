function EditProfile({ goTo }) {
  return (
    <div className="edit-profile">  


    
      <header className="shop-header">
        <button className="nav-btn" onClick={() => goTo("profile")}>
          ←
        </button>
          <h1>Edit profile</h1>
        <span></span>
      </header>


      
      <div className="profile-info">
        <div className="avatar editable">
    
          </div>
      </div>

    
        <div className="edit-form">

        <div className="input-group">
          <label>Name</label>
          <input type="text" placeholder="Kristin Watson" />
        </div>

        <div className="input-group">
           <label>Email</label>
          <input type="email" placeholder="kristinwatson@mail.com" />
        </div>

        <div className="input-group">
          <label>Phone</label>
          <input type="tel" placeholder="+17 123456789" />
        </div>

        <div className="input-group">
          <label>Country</label>
          <input type="text" placeholder="USA" />
        </div>

        <button
          className="primary-btn"
          onClick={() => goTo("profile")}
        >
          SAVE CHANGES
        </button>

      </div>
    </div>
  );
}

export default EditProfile;
