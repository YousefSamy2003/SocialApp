import React, { createContext, useState } from "react";

export const tokenContext = createContext();
export default function TokenContextProvider({ children }) {
  let [userToken, setUserToken] = useState( (localStorage.getItem("userToken") || null) );
  return (                                                                                         
    <>
      <tokenContext.Provider value={{ userToken, setUserToken }}>{children}</tokenContext.Provider>
    </>
  );
}
