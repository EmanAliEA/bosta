// import { useState } from "react";

import { useProductContext } from "./ProductContext";

function Sort() {
  const { sortVal, dispatch } = useProductContext();
  // console.log(sortVal);
  return (
    // <div className=" w-[80%] sm:w-[60%] md:w-[40%]">
    <select
      onChange={(e) => dispatch({ type: "sortValue", payload: e.target.value })}
      value={sortVal}
      title="Sort by"
      className="m-auto w-[50%] rounded-xl bg-blue-500 px-6 py-2 text-white capitalize focus:outline-none"
    >
      <option value="" disabled selected>
        Sort By
      </option>
      <option>category</option>
      <option value="desc">price(desc)</option>
      <option value="asc">price(asc)</option>
    </select>
    // {/* <input
    //   type="text"
    //   placeholder="search"
    //   className="border border-blue-900 px-2 w-[80%] sm:w-[70%] py-1 rounded-xl focus:outline-none shadow-xl"
    // /> */}
    // </div>
  );
}

export default Sort;
