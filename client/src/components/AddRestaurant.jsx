import React from "react";

const AddRestaurant = () => {
  return (
    <form className="d-flex justify-content-center">
      <label> Name</label>
      <input></input>
      <label>Location</label>
      <input></input>
      <label>Price range</label>
      <select>
        <option>$</option>
        <option>$$</option>
        <option>$$$</option>
        <option value={"$$$$"}>$$$$</option>
      </select>
      <button>Add</button>
    </form>
  );
};

export default AddRestaurant;
