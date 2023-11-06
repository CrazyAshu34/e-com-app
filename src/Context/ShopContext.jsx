import React, { createContext } from "react";

import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const mydata = { all_product };

  return (
    <ShopContext.Provider value={mydata}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider