// import React from "react";

// export default function Title({ title }) {
//   return (
//     <div className="section-title">
//       <h4>{title}</h4>
//       <div />
//     </div>
//   );
// }

import React from "react";
import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div />
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: "Default Title",
};

export default Title;
