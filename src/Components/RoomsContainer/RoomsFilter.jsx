// import React from "react";
// import { useContext } from "react";
// import { RoomContext } from "../../Context/Context";
// import Title from "../Title/Title";

// // get all unique values
// const getUnique = (items, value) => {
//   return [...new Set(items.map((item) => item[value]))];
// };

// export default function RoomFilter({ rooms }) {
//   const context = useContext(RoomContext);

//   const {
//     handleChange,
//     type,
//     capacity,
//     price,
//     minPrice,
//     maxPrice,
//     minSize,
//     maxSize,
//     breakfast,
//     pets,
//   } = context;

//   // get unique types
//   let types = getUnique(rooms, "type");
//   // add all
//   types = ["all", ...types];
//   // map to jsx
//   types = types.map((item, index) => {
//     return (
//       <option value={item} key={index}>
//         {item}
//       </option>
//     );
//   });

//   // room guests filtering functionality
//   let people = getUnique(rooms, "capacity");
//   people = people.map((item, index) => {
//     return (
//       <option key={index} value={item}>
//         {item}
//       </option>
//     );
//   });

//   return (
//     <section className="filter-container">
//       <Title title="search rooms" />

//       <form className="filter-form">
//         {/* select type start */}
//         <div className="form-group">
//           <label htmlFor="type">rooms type</label>
//           <select
//             name="type"
//             id="type"
//             value={type}
//             className="form-control"
//             onChange={handleChange}
//           >
//             {/* <option value="single">single</option> */}
//             {types}
//           </select>
//         </div>
//         {/* select type end */}

//         {/* guests type start */}
//         <div className="form-group">
//           <label htmlFor="capacity">guests</label>
//           <select
//             name="capacity"
//             id="capacity"
//             value={capacity}
//             className="form-control"
//             onChange={handleChange}
//           >
//             {/* <option value="single">single</option> */}
//             {people}
//           </select>
//         </div>
//         {/* guests type end */}

//         {/* room price start */}
//         <div className="form-group">
//           <label htmlFor="price">room price Rs.{price}</label>

//           <input
//             type="range"
//             name="price"
//             min={minPrice}
//             max={maxPrice}
//             id="price"
//             value={price}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         {/* room price end */}

//         {/* size start */}
//         <div className="form-group">
//           <label htmlFor="size">room size</label>

//           <div className="size-inputs">
//             <input
//               type="number"
//               name="minSize"
//               id="size"
//               value={minSize}
//               onChange={handleChange}
//               className="size-input"
//             />
//             <input
//               type="number"
//               name="maxSize"
//               id="size"
//               value={maxSize}
//               onChange={handleChange}
//               className="size-input"
//             />
//           </div>
//         </div>
//         {/* size end */}

//         {/* extras start */}
//         <div className="form-group">
//           {/* breakfast checked */}
//           <div className="single-extra">
//             <input
//               type="checkbox"
//               name="breakfast"
//               id="breakfast"
//               checked={breakfast}
//               onChange={handleChange}
//             />
//             <label htmlFor="breakfast">breakfast</label>
//           </div>

//           {/* pets checked */}
//           <div className="single-extra">
//             <input
//               type="checkbox"
//               name="pets"
//               id="pets"
//               checked={pets}
//               onChange={handleChange}
//             />
//             <label htmlFor="pets">pets</label>
//           </div>
//         </div>
//         {/* extras end */}
//       </form>
//     </section>
//   );
// }

import React, { useContext, useMemo } from "react";
import { RoomContext } from "../../Context/Context";
import Title from "../Title/Title";

// Get unique values helper
const getUniqueValues = (items = [], key) => {
  return [...new Set(items.map((item) => item[key]))];
};

const RoomFilter = ({ rooms = [] }) => {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useContext(RoomContext);

  // Room types
  const types = useMemo(() => {
    return ["all", ...getUniqueValues(rooms, "type")];
  }, [rooms]);

  // Guest capacity
  const capacities = useMemo(() => {
    return getUniqueValues(rooms, "capacity");
  }, [rooms]);

  return (
    <section className="filter-container">
      <Title title="search rooms" />

      <form className="filter-form">
        {/* Room Type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
          >
            {types.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
          >
            {capacities.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="form-group">
          <label htmlFor="price">Room Price ₹{price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
          />
        </div>

        {/* Size */}
        <div className="form-group">
          <label>Room Size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Extras */}
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            Breakfast
          </label>

          <label>
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            Pets Allowed
          </label>
        </div>
      </form>
    </section>
  );
};

export default RoomFilter;
