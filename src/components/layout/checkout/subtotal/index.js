import React from "react";

const SubTotal = ({ totalprice }) => {
  return (
    <div>
      <h1>
        {totalprice}
        {/* {totalprice.map((num) => (
          <p>{num}</p>
        ))} */}
      </h1>
    </div>
  );
};

export default SubTotal;
