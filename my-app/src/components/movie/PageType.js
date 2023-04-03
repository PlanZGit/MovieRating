import React from "react";
import { Outlet, useParams } from "react-router-dom";

export const PageType = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <Outlet />
    </div>
  );
};
