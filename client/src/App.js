import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import Home from "./routes/Home";

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/restaurants/:id">RestaurantDetailPage</Link>
            </li>
            <li>
              <Link to="/restaurants/:id/update">UpdatePage</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
          <Route path="/restuaruants/:id/update" element={<UpdatePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
