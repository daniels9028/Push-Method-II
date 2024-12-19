import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Errors from "./pages/Errors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Errors />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
