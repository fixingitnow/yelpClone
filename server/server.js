require("dotenv").config();
const express = require("express");

const app = express();
const morgan = require("morgan");
const port = process.env.PORT || 5000;
const db = require("./db");

const data = {
  restaurants: [
    {
      name: "Restaurant 1",
      address: "Address 1",
      rating: 4.5,
      menu: [
        {
          name: "Menu 1",
          price: 10,
        },
        {
          name: "Menu 2",
          price: 20,
        },
      ],
    },
    {
      name: "Restaurant 2",
      address: "Address 2",
      rating: 4.0,
      menu: [
        {
          name: "Menu 1",
          price: 10,
        },
        {
          name: "Menu 2",
          price: 20,
        },
      ],
    },
    {
      name: "Restaurant 3",
      address: "Address 3",
      rating: 3.5,
      menu: [
        {
          name: "Menu 1",
          price: 10,
        },
        {
          name: "Menu 2",
          price: 20,
        },
      ],
    },
  ],
};

// gives us ability to access the json
app.use(express.json());
// Define middleware at the top so it catches everything
// if next is not used it's usually skipped
app.use(morgan("tiny"));

// create
app.post("/api/v1/restaurants", async (req, res) => {
  try {
    const result = await db.query(
      "INSERT INTO restaurants (name, price, on_sale) values ($1, $2, $3) returning *",
      [req.body.name, req.body.price, req.body.on_sale]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

// read all
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

// read one
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(`select * from restaurants where id=$1`, [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

// update
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, price = $2, on_sale = $3 where id = $4 returning *",
      [req.body.name, req.body.price, req.body.on_sale, req.params.id]
    );
    return res.status(200).json({
      status: "success",
      data: {
        restaurants: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// delete
app.delete("/api/v1/restaurants/:id", (req, res) => {
  try {
    db.query("DELETE FROM restaurants where id = $1", [req.params.id]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
