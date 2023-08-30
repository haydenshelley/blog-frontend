export function PostsNew() {
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
