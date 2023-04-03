import React, { useContext, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { ChangePage } from "../Controls/ChangePage";
import { MovieContext } from "../API/CustomAPI";

export const Title = () => {
  const params = useParams();
  const { state, getData } = useContext(MovieContext);

  // console.log(params);

  //use the Params for user url page num search
  useEffect(() => {
    getData(
      params.option,
      params.page ? params.page * 1 : 1,
      params.title != null ? params.title : null,
      params.pageType
    );
    // eslint-disable-next-line
  }, [params]);

  //Create navigation, using NavLink for relative link, Outlet the data to page
  return (
    <div>
      <h2>
        {params.title} {params.pageType} rating
      </h2>
      <ChangePage
        state={state}
        getData={getData}
        currentPage={state.latestPage}
        next={state.latestNext}
        option={params.option}
      />

      <Outlet />

      <ChangePage
        getData={getData}
        currentPage={state.latestPage}
        next={state.latestNext}
        option={params.option}
      />
    </div>
  );
};

export default Title;
