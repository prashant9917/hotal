// import React from "react";
// import { Link } from "react-router-dom";
// import defaultImg from "../../assets/img/jpeg/room-1.jpeg";
// import PropTypes from "prop-types";export default function Room({ room }) {
//   const { name, slug, images, price } = room;

//   return (
//     <article className="room">
//       <div className="img-container">
//         <img src={images[0] || defaultImg} alt="single room" />

//         <div className="price-top">
//           <h6>Rs. {price}</h6>
//           <p>per night</p>
//         </div>

//         <Link to={`/rooms/${slug}`} className="btn-primary room-link">
//           Feature
//         </Link>
//       </div>
//       <p className="room-info">{name}</p>
//     </article>
//   );
// }

// Room.prototype = {
//   room: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     images: PropTypes.arrayOf(PropTypes.string).isRequired,
//     price: PropTypes.number.isRequired,
//   }),
// };


import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import defaultImg from "../../assets/img/jpeg/room-1.jpeg";

const Room = ({ room }) => {
  const {
    name = "Room",
    slug = "",
    images = [],
    price = 0,
  } = room || {};

  const image = images.length > 0 ? images[0] : defaultImg;

  return (
    <article className="room">
      <div className="img-container">
        <img src={image} alt={name} />

        <div className="price-top">
          <h6>₹ {price}</h6>
          <p>per night</p>
        </div>

        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          View Details
        </Link>
      </div>

      <p className="room-info">{name}</p>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Room;
