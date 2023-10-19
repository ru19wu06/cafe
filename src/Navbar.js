import logo from "./images/logo.png";
import cart from "./images/cart.png";
import user from "./images/user.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo.png" style={{ height: "48px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#feedback">
                Feedback
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#visit">
                Visit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button
              style={{
                background: "transparent",
                border: "none"
              }}
            >
              <img
                src={user}
                alt="user.png"
                style={{
                  height: "32px",
                  padding: "4px"
                }}
              />
            </button>
            <button
              style={{
                background: "transparent",
                border: "none"
              }}
            >
              <img
                src={cart}
                alt="cart.png"
                style={{
                  height: "32px",
                  padding: "4px"
                }}
              />
            </button>
            <button
              className="btn btn-sm rounded-pill px-2 text-white"
              style={{ background: "#FF6347" }}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
