import React from "react";
import { Link } from "react-router-dom";
function Products() {
  return (
    <div>
      <nav>
        <Link to="feature">Featured</Link>
        <Link to="new">New</Link>
      </nav>
    </div>
  );
}

export default Products;
