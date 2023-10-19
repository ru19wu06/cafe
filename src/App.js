import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import "bootstrap/dist/js/bootstrap.js";
import arrow from "./images/up-arrow.png";

import Navbar from "./Navbar.js";
import Hero from "./Hero.js";
import About from "./About.js";
import Menu from "./Menu.js";
import Feedback from "./Feedback.js";
import Visit from "./Visit.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Poppins"
      />
      <div
        className="bgImg"
        style={{
          backgroundImage: "url(" + require("./images/background.jpg") + ")"
        }}
      >
        <div className="wrapper" id="top">
          <Navbar />
          <Hero />
          <a
            href="#top"
            className="position-fixed text-white end-0 bottom-0 m-3 rounded-circle shadow"
            style={{
              background: "#FF6347",
              textDecoration: "none",
              zIndex: "100"
            }}
          >
            <img
              src={arrow}
              alt="scroll to top"
              style={{ height: "64px", padding: "8px" }}
            />
          </a>
        </div>
      </div>
      <About />
      <Menu />
      <Feedback />
      <Visit />
      <Contact />
      <Footer />
    </div>
  );
}
