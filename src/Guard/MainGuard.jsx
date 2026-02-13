import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { tokenContext } from "../Context/TokenContextProvider";

export default function MainGuard({ children }) {
  let { userToken } = useContext(tokenContext);
  if (userToken) {
    return children;
  } else {
    return <Navigate to="/auth/signin" />;
  }
}
