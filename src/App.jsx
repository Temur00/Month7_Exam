import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer, Header } from "./components";

import { Details, Dishes, Home, Login, Register } from "./pages";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/details" element={<Details />} />
          <Route />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
