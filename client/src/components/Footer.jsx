import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <span className="footer-logo-text">ZavqFlix</span>
            </div>
            <p>Eng yaxshi kinolar va seriallarni bepul tomosha qiling</p>
          </div>
          
          <div className="footer-section">
            <h3>Sahifalar</h3>
            <ul>
              <li><a href="/">Bosh sahifa</a></li>
              <li><a href="/movies">Kinolar</a></li>
              <li><a href="/favorites">Sevimlilar</a></li>
              <li><a href="/bookings">Buyurtmalar</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Aloqa</h3>
            <ul>
              <li>Email: asrorqurbonazarov@gmail.com</li>
              <li>Tel: +998 33 200 26 08</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 ZavqFlix. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
