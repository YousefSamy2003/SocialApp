import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const tokenContext = createContext();
export default function TokenContextProvider({ children }) {
  let [userToken, setUserToken] = useState(
    localStorage.getItem("userToken") || null,
  );
  let [userData, setUserData] = useState(null);

  function getInfoAboutLogin() {
    axios
      .get("https://linked-posts.routemisr.com/users/profile-data", {
        headers: {
          token: userToken,
        },
      })
      .then((response) => {
        console.log(response.data.user);
        setUserData(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getInfoAboutLogin();
  }, []);

  return (
    <>
      <tokenContext.Provider value={{ userToken, setUserToken, userData ,setUserData}}>
        {children}
      </tokenContext.Provider>
    </>
  );
}
