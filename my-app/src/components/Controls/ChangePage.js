import React, { useContext } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { FaPagelines } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./ChangePage.css";

//Convert page into Number
export const ChangePage = ({ getData, currentPage, next, pageType }) => {
  let page = Number(currentPage);
  // console.log(page);
  return (
    <div className="control">
      <NavLink
        to={page !== 1 ? page - 1 + "" : page + ""}
        onClick={() => (page !== 1 ? getData(page - 1, pageType) : null)}
        className={page > 1 ? "" : "notVisible"}>
        <GrCaretPrevious className="next" />
        Back
      </NavLink>

      <div className="pageNum">
        <p>Page {page}</p>
        {/* <FaPagelines className="pageNum-icon" id="pageNum-icon" /> */}
      </div>

      <NavLink
        to={page + 1 + ""}
        onClick={() => getData(page + 1, pageType)}
        className={next === null ? "notVisible" : ""}>
        Next
        <GrCaretNext className="next" />
      </NavLink>
    </div>
  );
};

export default ChangePage;
