import { useState } from "react";
import axios from "axios";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> |{" "}
      <a href="#posts-new">New post</a>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <p>
          <label>Title: </label>
          <input />
        </p>
        <p>
          <label>Body: </label>
          <input />
        </p>
        <p>
          <label>Image: </label>
          <input />
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}

function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} alt="" />
        </div>
      ))}
    </div>
  );
}

function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    console.log("helloooooo");

    axios.get("http://localhost:3000/posts.json").then((response) => {
      // handle success
      console.log(response.data);
      setPosts(response.data);
    });
  };

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
      <button onClick={handleIndexPosts}>Show Posts</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
