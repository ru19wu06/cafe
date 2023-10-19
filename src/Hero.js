export default function Hero() {
  return (
    <div
      className="container px-4"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <h1 className="display-5 fw-bold text-light">React Project</h1>
      <div className="col-lg-8 py-4">
        <p className="lead text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
          lacus quis turpis congue lacinia a at lacus. Aenean ultricies felis a
          sapien consectetur accumsan.
        </p>
        <div className="py-3 d-grid d-sm-flex">
          <a
            href="#menu"
            className="btn px-4 rounded-1 text-white explore-btn m-1"
            style={{ background: "#FF6347" }}
          >
            Explore Menu
          </a>
          <a
            href="#visit"
            className="btn px-4 rounded-1 btn-light explore-btn m-1"
            style={{ color: "#FF6347" }}
          >
            Visit Us
          </a>
        </div>
      </div>
    </div>
  );
}
