// import React, { Component } from "react";
// import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
// import Title from "../Title/Title";

// export default class Services extends Component {
//   state = {
//     services: [
//       {
//         icon: <FaCocktail />,
//         title: "free cocktails",
//         info:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
//       },
//       {
//         icon: <FaHiking />,
//         title: "endless hiking",
//         info:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
//       },
//       {
//         icon: <FaShuttleVan />,
//         title: "free shuttle",
//         info:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
//       },
//       {
//         icon: <FaBeer />,
//         title: "storages beer",
//         info:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
//       },
//     ],
//   };

//   render() {
//     return (
//       <section className="services">
//         <Title title="services" />

//         <div className="services-center">
//           {this.state.services.map((item, index) => {
//             return (
//               <article key={index} className="services">
//                 <span>{item.icon}</span>
//                 <h6>{item.title}</h6>
//                 <p>{item.info}</p>
//               </article>
//             );
//           })}
//         </div>
//       </section>
//     );
//   }
// }


import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "../Title/Title";

const servicesData = [
  {
    id: 1,
    icon: <FaCocktail />,
    title: "Free Cocktails",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
  },
  {
    id: 2,
    icon: <FaHiking />,
    title: "Endless Hiking",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
  },
  {
    id: 3,
    icon: <FaShuttleVan />,
    title: "Free Shuttle",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
  },
  {
    id: 4,
    icon: <FaBeer />,
    title: "Beer Storage",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <Title title="services" />

      <div className="services-center">
        {servicesData.map((service) => (
          <article key={service.id}>
            <span>{service.icon}</span>
            <h6>{service.title}</h6>
            <p>{service.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
