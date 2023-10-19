import coffee from "./images/coffee.png";
import favorite from "./images/favorite.png";
import guarantee from "./images/guarantee.png";

export default function About() {
  return (
    <div id="about">
      <div className="container-fluid my-5">
        <h1 className="my-3 text-center display-5">About Us</h1>
        <div className="mx-auto container my-3 row">
          <div className="col-12 col-md-4 p-4 text-center">
            <div className="p-3 mx-auto">
              <img src={guarantee} alt="guarantee" style={{ height: "64px" }} />
            </div>
            <h3>Premium Quality</h3>
            <p className="text-muted pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              lacinia est eget arcu interdum, in venenatis nisi tempor.
            </p>
          </div>
          <div className="col-12 col-md-4 p-4 text-center">
            <div className="p-3 mx-auto">
              <img src={favorite} alt="guarantee" style={{ height: "64px" }} />
            </div>
            <h3>Made with Love</h3>
            <p className="text-muted pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              lacinia est eget arcu interdum, in venenatis nisi tempor.
            </p>
          </div>
          <div className="col-12 col-md-4 p-4 text-center">
            <div className="p-3 mx-auto">
              <img src={coffee} alt="guarantee" style={{ height: "64px" }} />
            </div>
            <h3>Awesome Taste</h3>
            <p className="text-muted pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              lacinia est eget arcu interdum, in venenatis nisi tempor.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            className="col-12 col-md-6 px-0"
            alt="about"
          />
          <div
            className="col-12 col-md-6"
            style={{ background: "#EFEBE9", color: "#3E2723" }}
          >
            <div className="p-4">
              <h1>We serve with love.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                neque ac leo suscipit aliquam eu ut mi. Maecenas lacinia est
                eget arcu interdum, in venenatis nisi tempor.
              </p>
              <p>
                Integer tempus lobortis nisl, ultricies hendrerit nisl tempus
                pretium. Fusce volutpat tellus ante, ut imperdiet lectus cursus
                ut.
              </p>
              <button
                className="btn btn-sm px-3 text-white"
                style={{ background: "#3E2723" }}
              >
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
