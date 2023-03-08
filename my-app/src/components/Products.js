import React from "react";
import { Link, Outlet } from "react-router-dom";
function Products() {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <Link to="feature">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Products;
