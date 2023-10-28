import React from "react";

const Restaurant = () => {
  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th>Restaurant</th>
            <th>Location</th>
            <th>Price Range</th>
            <th>Ratings</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>mcdonalds</td>
            <td>fremont</td>
            <td>$$$</td>
            <td>***</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
          <tr>
            <td>randome 1</td>
            <td>fremont</td>
            <td>$$$</td>
            <td>***</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
          <tr>
            <td>randome 2</td>
            <td>fremont</td>
            <td>$$$</td>
            <td>***</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Restaurant;
