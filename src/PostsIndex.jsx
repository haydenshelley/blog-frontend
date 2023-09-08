import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      <h2>Search:</h2>
      <input
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      ></input>
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">
          {props.posts
            .filter((post) =>
              post.title.toLowerCase().includes(searchFilter.toLowerCase())
            )
            .map((post) => (
              <div
                key={post.id}
                className="posts d-flex col-6 align-items-stretch"
              >
                <div className="card" style={{ width: "18rem" }}>
                  <img src={post.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <button
                      onClick={() => props.onShowPost(post)}
                      type="button"
                      className="btn btn-secondary"
                    >
                      More Info
                    </button>
                    {/* <a href={`/posts/${post.id}`}>More Info Again</a> */}
                  </div>
                </div>
                <br />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
