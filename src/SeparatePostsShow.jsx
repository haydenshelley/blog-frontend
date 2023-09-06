import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function SeparatePostsShow() {
  const [post, setPost] = useState({});
  const params = useParams();

  const getPostData = () => {
    axios
      .get(`http://localhost:3000/posts/${params.id}.json`)
      .then((response) => {
        setPost(response.data);
      });
  };

  useEffect(getPostData, []);

  return (
    <div id="separatePost">
      <h1>{post.title}</h1>
      <img src={post.image} />
      <p>{post.body}</p>
    </div>
  );
}
