import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <div className="h-screen overflow-clip w-screen">
      <div
        className="bg-center h-full w-full bg-cover
    bg-[url('./assets/huji13.jpg')]   
    "
      >
        <Navbar></Navbar>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
