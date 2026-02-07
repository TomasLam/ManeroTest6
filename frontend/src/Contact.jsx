function Contact({ goTo }) {
  return (
    <div className="contact">

      <header className="shop-header">
        <button className="nav-btn" onClick={() => goTo("products")}>
          ←
        </button>
         <h1>Contact us</h1>
      </header>

        <div className="contact-content">

        <div className="contact-item">
          📍 27 Division St, New York,  
          NY 10002, USA
        </div>

        <div className="contact-item">
           ✉️ maneroshop@gmail.com  
          manerosupport@gmail.com
        </div>



        <div className="contact-item">
          📞 +17 123456789  
          +17 987654321
        </div>


        <div className="order-track">
          <p>Track your order</p>
          <div className="order-input">
             <input placeholder="Order number" />
            <button>→</button>
          </div>
       </div>

      </div>
    </div>
  );
}

export default Contact;
