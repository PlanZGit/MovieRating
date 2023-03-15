import React, { useContext, useEffect, useState } from "react";
import { UpcomingContext } from "../API/UpcomingGet";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr"
import { FaPagelines } from "react-icons/fa"
import "./Upcoming.css"
import { useNavigate } from "react-router-dom";


export const Upcoming = () => {
  const { getData, page } = useContext(UpcomingContext);
  const { id } = useParams()
  const navigation = useNavigate()
  const maxPage = 32;
  const [errorInput, setErrorInput] = useState("")

  //use the Params for user url page num search
  useEffect(() => {
    getData(id ? id * 1 : 1)
    // eslint-disable-next-line
  }, []);

  const inputFocus = () => {
    document.getElementById("pageNum-icon").style.animation = "searchFocus .3s linear 0s 1 normal both "
  }
  const inputBlur = () => {
    document.getElementById("pageNum-icon").style.animation = "searchBlur .3s linear 0s 1 normal both "
  }

  //If user enter false input
  const enterInput = (e) => {
    if (e.key === "Enter") {
      const value = Number(e.target.value);
      value ? (value < 33 && value != 0) ? clearErrorChangePage(value)
        : setErrorInput("Number is to high or Low!")
        : setErrorInput("Letter is not allow!")
    }
  }

  const clearErrorChangePage = (value) => {
    getData(value)
    setErrorInput("")
  }

  //Create navigation, using NavLink for relative link, Outlet the data to page
  return (
    <div className="Upcoming">
      <div className="control">

        <NavLink to={page !== 1 ? (page - 1) + "" : page + ""}
          onClick={() => page !== 1 ? clearErrorChangePage(page - 1) : getData(1)}
          className={page > 1 ? "" : "notVisible"}
        >
          <GrCaretPrevious className="next" />Back
        </NavLink> :

        <div className="pageNum">
          <p>Page {page}</p>
          <div className="search">
            Enter
            <input type="text" className="inputNum" onFocus={inputFocus}
              placeholder="Max 32"
              onBlur={inputBlur} onKeyDown={(e) => enterInput(e)} maxLength="2" />
            <FaPagelines className="pageNum-icon" id="pageNum-icon" />
            Page

          </div>
        </div>

        <NavLink to={(page + 1) + ""} onClick={() => clearErrorChangePage(page + 1)}
          className={page === maxPage ? "notVisible" : ""}>
          Next
          <GrCaretNext className="next" />
        </NavLink>

        <div className="error">{errorInput ? errorInput : null}</div>
      </div>

      <Outlet />

    </div>
  )
};

export default Upcoming;
