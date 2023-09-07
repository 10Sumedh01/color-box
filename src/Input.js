import colorNames from 'colornames';
import React from "react";

const Input = ({ colorVal, setColorVal, setHexVal }) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name : </label>
        <input
          autoFocus
          type="text"
          placeholder="Add Color Name"
          required
          value={colorVal}
          onChange={(e) => {
            setColorVal(e.target.value);
            setHexVal(colorNames(e.target.value))
          }}
        />
      </form>
    </>
  );
};

export default Input;
