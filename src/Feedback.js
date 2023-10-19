export default function Feedback() {
  return (
    <div id="feedback">
      <div className="container-fluid my-5">
        <h1 className="my-3 text-center display-5">Customer Feedback</h1>
        <div className="mx-auto container my-3 row">
          <div className="col-12 col-md-4 p-2 text-center">
            <div className="shadow rounded-3 p-3">
              <div className="py-3 px-auto">
                <img
                  className="rounded-circle"
                  src="https://www.shefinds.com/files/2021/02/the-rock-shutter.jpg"
                  alt="the rock"
                  style={{ height: "150px" }}
                />
              </div>
              <h3 className="mb-0">Tasty Snacks</h3>
              <span>~The Rock</span>
              <p className="text-muted pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas lacinia est eget arcu interdum, in venenatis nisi
                tempor.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 p-2 text-center">
            <div className="shadow rounded-3 p-3">
              <div className="py-3 px-auto">
                <img
                  className="rounded-circle"
                  src="https://i1.sndcdn.com/artworks-000539105661-ksbnxk-t500x500.jpg"
                  alt="the rock"
                  style={{ height: "150px" }}
                />
              </div>
              <h3 className="mb-0">Best Quality</h3>
              <span>~Walter White</span>
              <p className="text-muted pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas lacinia est eget arcu interdum, in venenatis nisi
                tempor.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 p-2 text-center">
            <div className="shadow rounded-3 p-3">
              <div className="py-3 px-auto">
                <img
                  className="rounded-circle"
                  src="https://sm.mashable.com/mashable_in/photo/default/image-4_je8c.jpg"
                  alt="the rock"
                  style={{ height: "150px" }}
                />
              </div>
              <h3 className="mb-0">Best Services</h3>
              <span>~Jesse Pinkman</span>
              <p className="text-muted pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas lacinia est eget arcu interdum, in venenatis nisi
                tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
