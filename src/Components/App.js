import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../Css/App.css";
import About from "./About";
import Contact from "./Contact";
import MyWork from "./MyWork";
import Nav from "./Nav";
import Main from "./Main";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Main />
              </>
            }
          />
          <Route
            path="/MyWork"
            element={
              <>
                <Nav />
                <MyWork />
              </>
            }
          />

          <Route
            path="/AboutMe"
            element={
              <>
                <Nav />
                <About />
              </>
            }
          />

          <Route
            path="/ContactMe"
            element={
              <>
                <Nav />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
