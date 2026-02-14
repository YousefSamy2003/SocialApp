import React, { useContext } from "react";
import { tokenContext } from "../../Context/TokenContextProvider";
import { a, div } from "framer-motion/client";
import { Link } from "react-router-dom";
import Post from "./../../Components/Post/Post";

export default function Home() {
  const { userToken, setUserToken } = useContext(tokenContext);
  console.log(userToken);

  return (
    <div>
      <Post />
    </div>
  );
}
