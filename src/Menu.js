import data from "./API/data.json";
import Card from "./Card.js";

export default function Menu() {
  return (
    <div id="menu">
      <div className="container my-5">
        <h1 className="my-3 text-center display-5">Coffee Menu</h1>
        <div className="container row mx-auto">
          {data.coffee.map((coffee, i) => {
            return (
              <Card
                imgUrl={coffee.url}
                key={i}
                title={coffee.title}
                price={coffee.price}
              />
            );
          })}
        </div>
      </div>
      <div className="container my-5">
        <h1 className="my-3 text-center display-5">Snacks Menu</h1>
        <div className="container row mx-auto">
          {data.snacks.map((snacks, i) => {
            return (
              <Card
                imgUrl={snacks.url}
                key={i}
                title={snacks.title}
                price={snacks.price}
              />
            );
          })}
        </div>
      </div>
      <div className="container my-5">
        <h1 className="my-3 text-center display-5">Other Beverages</h1>
        <div className="container row mx-auto">
          {data.beverages.map((beverages, i) => {
            return (
              <Card
                imgUrl={beverages.url}
                key={i}
                title={beverages.title}
                price={beverages.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
