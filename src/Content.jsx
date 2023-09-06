import { useState, useEffect } from "react";
import axios from "axios";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow.jsx";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      // handle success
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleDestroyPost = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}.json`).then((response) => {
      handleClose();
      setPosts(posts.filter((post) => id !== post.id));
    });
  };

  const handleUpdatePost = (id, params) => {
    axios
      .patch(`http://localhost:3000/posts/${id}.json`, params)
      .then((response) => {
        console.log(response.data);
        setCurrentPost(response.data);
        setPosts(
          posts.map((post) => {
            if (post.id === id) {
              return response.data;
            } else {
              return post;
            }
          })
        );
      });
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/post/new"
          element={<PostsNew onCreatePost={handleCreatePost} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/posts"
          element={<PostsIndex posts={posts} onShowPost={handleShowPost} />}
        />
      </Routes>

      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow
          post={currentPost}
          onUpdatePost={handleUpdatePost}
          onDestroyPost={handleDestroyPost}
        />
      </Modal>
    </div>
  );
}
