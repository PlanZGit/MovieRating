import React from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { NavLink } from "react-router-dom";

import "./ChangePage.css";

//Convert page into Number
export const ChangePage = ({ getData, currentPage, next, option, title }) => {
  const page = Number(currentPage);
  // console.log(page);

  return (
    <div className="control">
      <NavLink
        to={page !== 1 ? page - 1 + "" : page + ""}
        className={page > 1 ? "" : "notVisible"}>
        <GrCaretPrevious className="next" />
        Back
      </NavLink>

      <div className="pageNum">
        <p>Page {page}</p>
      </div>

      <NavLink to={page + 1 + ""} className={next === null ? "notVisible" : ""}>
        Next
        <GrCaretNext className="next" />
      </NavLink>
    </div>
  );
};

export default ChangePage;
