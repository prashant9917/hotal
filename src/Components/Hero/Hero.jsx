// import React from "react";

// function Hero({ children, hero }) {
//   return <header className={hero}>{children}</header>;
// }

// Hero.defaultProps = {
//   hero: "defaultHero",
// };

// export default Hero;
import React from "react";
import PropTypes from "prop-types";

const Hero = ({ hero, children }) => {
  return <header className={hero}>{children}</header>;
};

Hero.defaultProps = {
  hero: "defaultHero",
};

Hero.propTypes = {
  hero: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
