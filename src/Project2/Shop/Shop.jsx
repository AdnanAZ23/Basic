import { PRODUCTS } from "../Products";
import { ShopItems } from "./ShopItems";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="products">
        {PRODUCTS.map((product) => (
          <ShopItems key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
