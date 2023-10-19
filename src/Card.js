export default function Card(props) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
      <div className="card shadow border-0">
        <img src={props.imgUrl} className="card-img-top" alt={props.title} />
        <div className="card-body text-center">
          <h5 className="card-title mb-0">{props.title}</h5>
          <span className="fw-bold" style={{ color: "#E91E63" }}>
            {props.price}
          </span>
          <button className="btn btn-sm container-fluid btn-outline-dark mt-2 rounded-pill">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
