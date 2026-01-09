import React from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// imports components
import Hero from "../Components/Hero/Hero";
import Banner from "../Components/Banner/Banner";
import RoomContainer from "../Components/RoomsContainer/RoomsContainer";

function Room() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>

      <RoomContainer />
    </>
  );
}

export default Room;

// import React from "react";
// import { Link } from "react-router-dom";

// // Import components
// import Hero from "../Components/Hero/Hero";
// import Banner from "../Components/Banner/Banner";
// import RoomContainer from "../Components/RoomsContainer/RoomsContainer";

// export default function Room() {
//   return (
//     <>
//       <Hero hero="roomsHero">
//         <Banner title="Our Rooms">
//           <Link to="/" className="btn-primary">
//             Return Home
//           </Link>
//         </Banner>
//       </Hero>

//       <RoomContainer />
//     </>
//   );
// }
