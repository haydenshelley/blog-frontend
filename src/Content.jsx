import { useState, useEffect } from "react";
import axios from "axios";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleIndexPosts = () => {
    console.log("helloooooo");

    axios.get("http://localhost:3000/posts.json").then((response) => {
      // handle success
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>Posts Show</p>
      </Modal>
    </div>
  );
}
