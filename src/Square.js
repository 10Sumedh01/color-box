import React from "react";

const Square = ({ colorVal, hexVal }) => {
  return (
    <>
      <div className="square" style={{ backgroundColor: colorVal }}>
        <p>{colorVal ? colorVal : "Empty Value"}</p>
        <p>{hexVal ? hexVal : null}</p>
      </div>
    </>
  );
};

Square.defaulfProps ={
    colorVal:"Empty Color Value"
}
export default Square;
