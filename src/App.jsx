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

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="post">
        <h2>Coding Today!</h2>
        <p>Started learning react</p>
        <img src="https://www.bairesdev.com/wp-content/uploads/2022/06/Picture6-1.svg"></img>
      </div>
      <div className="post">
        <h2>It is Hot Outside</h2>
        <p>The temp is 100 degrees</p>
        <img src="https://www.daytondailynews.com/resizer/bbWLB1p7NlcfG9qUvPLId8Xcjh8=/814x458/cloudfront-us-east-1.images.arcpublishing.com/coxohio/NW7C3XNSONEWZHANRP5YUS7IYQ.jpg"></img>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
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
