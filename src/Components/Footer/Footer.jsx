
// import React from "react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       <h2>Sagar Resort | Book Your Room</h2>

//       <p>
//         © {currentYear} HotelBooking.com. All Rights Reserved. Built by{" "}
//         <a
//           href="https://www.instagram.com/pras.hu3420/?hl=en"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Prashant Sagar
//         </a>
//       </p>
//     </footer>
//   );
// };

// export default Footer;






// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="resort-footer">

//       {/* Wave Effect */}
//       <div className="footer-wave">
//         <svg viewBox="0 0 1440 120">
//           <path
//             fill="#0f172a"
//             d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,0L0,0Z"
//           />
//         </svg>
//       </div>

//       <div className="footer-content">

//         {/* Brand */}
//         <div className="footer-brand reveal">
//           <h2>Sagar Resort</h2>
//           <p>
//             Where comfort meets luxury.  
//             A peaceful stay designed just for you.
//           </p>
//         </div>

//         {/* Feature Cards */}
//         <div className="footer-features reveal delay-1">
//           <div className="feature-card">
//             <span>🌐</span>
//             <h4>Free Wi-Fi</h4>
//             <p>High-speed internet in all rooms</p>
//           </div>

//           <div className="feature-card">
//             <span>🍽</span>
//             <h4>Restaurant</h4>
//             <p>Delicious food & dining experience</p>
//           </div>

//           <div className="feature-card">
//             <span>🛎</span>
//             <h4>24×7 Service</h4>
//             <p>Always available room assistance</p>
//           </div>
//         </div>

//         {/* Contact */}
//         <div className="footer-contact reveal delay-2">
//           <h3>Contact</h3>
//           <p>📍 MORADABAD </p>
//           <p>📞 +91 9917409800</p>
//           <p>✉ sagarresort@gmail.com</p>
//         </div>

//       </div>

//       {/* Bottom */}
//       <div className="footer-bottom">
//         © {year} HotelBooking.com • Built by{" "}
//         <a
//           href="https://www.instagram.com/pras.hu3420/?hl=en"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Prashant Sagar
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="resort-footer">

      {/* Wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120">
          <path
            fill="#020617"
            d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,0L0,0Z"
          />
        </svg>
      </div>

      <div className="footer-content">

        {/* Brand */}
        <div className="footer-brand reveal">
          <h2>Sagar Resort</h2>
          <p>
            Where comfort meets luxury.  
            A peaceful stay designed just for you.
          </p>
        </div>

        {/* Features */}
        <div className="footer-features reveal delay-1">
          <div className="feature-card">
            <span>🌐</span>
            <h4>Free Wi-Fi</h4>
            <p>High-speed internet access</p>
          </div>
          <div className="feature-card">
            <span>🍽</span>
            <h4>Restaurant</h4>
            <p>Premium dining experience</p>
          </div>
          <div className="feature-card">
            <span>🛎</span>
            <h4>24×7 Service</h4>
            <p>Round-the-clock assistance</p>
          </div>
        </div>

        {/* Contact + Social */}
        <div className="footer-contact reveal delay-2">
          <h3>Connect With Us</h3>
          <p>📍 Moradabad - 244001, India</p>
          <p>📞 +91 9917409800</p>
          <p>✉ prasahantsagar452@gmail.com</p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.instagram.com/pras.hu3420/?hl=en" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100011540371356" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/prashantsagar9800/" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {year} HotelBooking.com • Built by{" "}
        <a
          href="https://prashant-portfolio-in.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prashant Sagar
        </a>
      </div>
    </footer>
  );
};

export default Footer;
