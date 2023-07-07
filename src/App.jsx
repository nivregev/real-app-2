import "./App.css";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/about";
import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";
import MyCards from "./components/my-cards";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>

      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="my-cards" element={<MyCards />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
