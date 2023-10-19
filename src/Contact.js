import call from "./images/call.png";

export default function Contact() {
  return (
    <div id="contact">
      <div className="container my-5">
        <h1 className="display-5 my-3 text-center">Contact Us</h1>
        <div className="my-3 p-2">
          <form className="form-group">
            <input
              type="text"
              className="form-control my-2"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              className="form-control my-2"
              placeholder="Email Addess"
            />
            <input
              type="text"
              className="form-control my-2"
              placeholder="Enter Subject"
            />
            <textarea
              className="form-control"
              placeholder="Say What You Want"
              style={{ height: "120px" }}
            ></textarea>
            <input type="submit" className="btn btn-primary my-3" />
          </form>
          <div>
            <img src={call} alt="call" style={{ height: "36px" }} />
            <span style={{ lineHeight: "36px", padding: "4px" }}>
              +44 1632 960982
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
