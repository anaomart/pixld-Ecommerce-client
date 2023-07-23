import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import NavBar from "./components/nav/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <div className="  md:m-auto md:w-10/12 ">
      <NavBar />
    </div>

    <App />

    <div className=" bottom-0  md:m-auto  md:w-10/12">
      <Footer />
    </div>
  </HashRouter>
);
