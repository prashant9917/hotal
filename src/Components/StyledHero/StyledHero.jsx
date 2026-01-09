// import styled from "styled-components";
// // import assets
// import defaultImg from "./../../assets/img/jpeg/room-1.jpeg";

// const StyledHero = styled.header`
//   min-height: 60vh;
//   background: url(${(props) => (props.img ? props.img : defaultImg)})
//     center/cover no-repeat;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export default StyledHero;

import styled from "styled-components";
import PropTypes from "prop-types";
import defaultImg from "../../assets/img/jpeg/room-1.jpeg";

const StyledHero = styled.header.attrs(({ img }) => ({
  style: {
    backgroundImage: `url(${img || defaultImg})`,
  },
}))`
  min-height: 60vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

StyledHero.propTypes = {
  img: PropTypes.string,
};

export default StyledHero;
