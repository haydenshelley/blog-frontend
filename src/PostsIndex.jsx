export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <div className="card" style={{ width: "18rem" }}>
            <img src={post.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <button
                onClick={() => props.onShowPost(post)}
                type="button"
                classNameName="btn btn-secondary"
              >
                More Info
              </button>
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
