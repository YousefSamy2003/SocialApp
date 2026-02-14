import axios from "axios";
import { header } from "framer-motion/client";
import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardPost from "./../Shared/CardPost/CardPost";
import Loading from "../Shared/Loading/Loading";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  function getPostDetails() {
    axios
      .get(`https://linked-posts.routemisr.com/posts/${id}`, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      })
      .then((response) => {
        console.log(response.data.post);
        setPost(response.data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getPostDetails();
  }, []);

  return <>{post ? <CardPost post={post}></CardPost> : <Loading></Loading>}</>;
}
