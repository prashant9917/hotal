import React from "react";
import { Link} from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import FeaturedRooms from "../Components/FeaturedRooms/FeaturedRooms";
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";



function Home() {

  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at Rs.1200">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

export default Home;

// import React from "react";
// import { Link } from "react-router-dom";
// import Hero from "../Components/Hero/Hero";
// import Banner from "../Components/Banner/Banner";
// import Services from "../Components/Services/Services";
// import FeaturedRooms from "../Components/FeaturedRooms/FeaturedRooms";

// export default function Home() {
//   return (
//     <>
//       <Hero>
//         <Banner
//           title="Luxurious Rooms"
//           subtitle="Deluxe rooms starting at Rs. 1200"
//         >
//           <Link to="/rooms" className="btn-primary">
//             Our Rooms
//           </Link>
//         </Banner>
//       </Hero>
//       <Services />
//       <FeaturedRooms />
//     </>
//   );
// }
