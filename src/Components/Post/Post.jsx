import axios from "axios";

import React, { useEffect, useState } from "react";
import HeaderPost from "../Shared/HeaderPost/HeaderPost";
import CommentPost from "./../Shared/CommentPost/CommentPost";
import CardPost from './../Shared/CardPost/CardPost';
import Loading from "../Shared/Loading/Loading";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  function getAllpost() {
    axios
      .get("https://linked-posts.routemisr.com/posts?limit=50", {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      })
      .then((response) => {
        console.log(response.data);
        setPosts(response.data.posts);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getAllpost();
  }, []);

  if (isLoading) {
   return <Loading />;
  }

  return posts.map((post) => {
    
    return (
      <>
      <CardPost post={post}></CardPost>
      </>
    );
  });
}
