import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./components/Recipe";
import Nav from "./components/Nav";
import Items from "./components/Items";

function App() {
  return (
    <div className="">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recipe/:id" element={<Items />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
