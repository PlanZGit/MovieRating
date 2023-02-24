import React from "react";
import { Link, Outlet } from "react-router-dom";
function Products() {
  return (
    <div>
      <nav>
        <Link to="feature">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Products;
