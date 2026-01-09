// import React from "react";

// function Banner({ children, title, subtitle }) {
//   return (
//     <div className="banner">
//       <h1>{title}</h1>
//       <div></div>
//       <p>{subtitle}</p>
//       {children}
//     </div>
//   );
// }

// export default Banner;


import React from "react";
import PropTypes from "prop-types";

const Banner = ({ title, subtitle, children }) => {
  return (
    <div className="banner">
      {title && <h1 className="banner-title">{title}</h1>}
      
      <div className="banner-divider"></div>
      
      {subtitle && <p className="banner-subtitle">{subtitle}</p>}
      
      {children}
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default Banner;
