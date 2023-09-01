import axios from "axios";

const handleSubmit = (event) => {
  event.preventDefault();
  const params = new FormData(event.target);
  axios.post("http://localhost:3000/posts.json", params).then((response) => {
    window.location.href = "/";
  });
};

export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title-input"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <textarea
            type="text"
            name="body"
            className="form-control"
            id="body-input"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="text"
            name="image"
            className="form-control"
            id="image-input"
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
      <hr />
    </div>
  );
}
