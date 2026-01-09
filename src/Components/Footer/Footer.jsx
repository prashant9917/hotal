// import React from "react";

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       <h2>Sagar Resort | Book Your Room</h2>
//       <p>
//         &copy; <span>{year}</span> HotalBooking.com - All Rights Copyright
//         Reserved To{" "}
//         <a
//           target="_blank"
//           rel="noreferrer"
//           href="https://www.instagram.com/pecific602/PrashantSagar"
//         >
//           Prashant Sagar
//         </a>
//       </p>
//     </footer>
//   );
// }

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Sagar Resort | Book Your Room</h2>

      <p>
        © {currentYear} HotelBooking.com. All Rights Reserved. Built by{" "}
        <a
          href="https://www.instagram.com/pecific602/PrashantSagar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prashant Sagar
        </a>
      </p>
    </footer>
  );
};

export default Footer;
