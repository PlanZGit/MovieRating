import React, { useContext, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { ChangePage } from "../Controls/ChangePage";
import { MovieContext } from "../API/CustomAPI";

export const Option = () => {
  const params = useParams();
  const { state, getData } = useContext(MovieContext);

  useEffect(() => {
    getData(params.option, params.page ? params.page * 1 : 1, params.pageType);
    // eslint-disable-next-line
  }, [params]);

  //Create navigation, using NavLink for relative link, Outlet the data to page
  return (
    <div>
      <h2>
        {params.option} {params.pageType}
      </h2>
      <ChangePage
        getData={getData}
        currentPage={state[params.option + "Page"]}
        next={state[params.option + "Next"]}
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

export default Option;
