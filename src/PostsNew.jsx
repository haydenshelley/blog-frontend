export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Title..."
        />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">
          Body
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Body..."
        />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
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
