export default function Visit() {
  return (
    <div
      id="visit"
      style={{
        backgroundImage:
          'url("https://www.bystored.com/blog/wp-content/uploads/2019/02/The-22-Best-Places-to-Live-in-London-in-2019.jpg")'
      }}
    >
      <div
        className="container-fluid my-5 text-light"
        style={{
          background: "rgba(0, 0, 0, 0.5)"
        }}
      >
        <div className="container p-4">
          <h1
            className="display-5 py-3 text-center"
            style={{ borderBottom: "2px solid #FF6347" }}
          >
            Visit Us
          </h1>
          <div className="text-center p-4">
            <h2>Address</h2>
            <p style={{ lineHeight: "32px" }}>
              React-Cafe
              <br />
              5 Park Avenue
              <br />
              London N13 5DQ
              <br />
              United Kingdom
            </p>
          </div>
          <div className="text-center p-4">
            <h2>Opening Hours</h2>
            <p>
              <span style={{ fontSize: "24px", fontFamily: "poppins" }}>
                10AM-8PM
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
