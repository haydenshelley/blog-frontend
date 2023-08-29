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
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image}></img>
        </div>
      ))}
    </div>
  );
}

function Content() {
  let posts = [
    {
      id: 1,
      title: "Coding Today!",
      body: "Started learning react",
      image:
        "https://www.bairesdev.com/wp-content/uploads/2022/06/Picture6-1.svg",
    },
    {
      id: 2,
      title: "It is Hot Outside",
      body: "The temp is 100 degrees",
      image:
        "https://www.daytondailynews.com/resizer/bbWLB1p7NlcfG9qUvPLId8Xcjh8=/814x458/cloudfront-us-east-1.images.arcpublishing.com/coxohio/NW7C3XNSONEWZHANRP5YUS7IYQ.jpg",
    },
    {
      id: 3,
      title: "Going on a Hike",
      body: "Hiking in the mountains",
      image:
        "https://www.adorama.com/alc/wp-content/uploads/2018/08/san-juans-feature-825x465.jpg",
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
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
