// import React from "react"
// import {useLocation, useNavigate} from 'react-router-dom';

// function Result (){
//     const location=useLocation()

//     return (
//         <div className="homepage">

//             <h1>Hello {location.state.id} and welcome to the home</h1>

//         </div>
//     )
// }

// export default Result

import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();

  const userId = location?.state?.id || "Guest";

  return (
    <div className="homepage">
      <h1>Hello {userId}, welcome to the home page</h1>
    </div>
  );
};

export default Result;
