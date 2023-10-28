import React from "react";

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form action="">
        <div className="row">
          <div className="col">
            <input placeholder="Name"></input>
          </div>
          <div className="col">
            <input placeholder="Location"></input>
          </div>
          <div className="col">
            <label>Price range</label>
            <select>
              <option value={1}>$</option>
              <option value={2}>$$</option>
              <option value={3}>$$$</option>
              <option value={4}>$$$$</option>
            </select>
          </div>
          <div className="col">
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
