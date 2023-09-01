export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title-input"
          placeholder="Title..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <input
          type="text"
          className="form-control"
          id="body-input"
          placeholder="Body..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          id="image-input"
          placeholder="Image Url..."
        />
      </div>
      <button type="submit" className="btn btn-secondary">
        Submit
      </button>
      <hr />
    </div>
  );
}
