export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
  };

  return (
    <div>
      <h2> {props.post.title} </h2>
      <p> {props.post.body} </p>
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
            defaultValue={props.post.title}
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
            defaultValue={props.post.body}
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
            defaultValue={props.post.image}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
}
