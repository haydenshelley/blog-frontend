import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div id="page-container">
      <BrowserRouter>
        <div id="content-wrap">
          <Header />
          <Content />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
