import { PRODUCTS } from "../../Products";
import Product from "./product";
import "./Home.css";

export const Home = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop Title</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
