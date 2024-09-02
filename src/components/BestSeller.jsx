import { NavLink } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";

const BestSeller = () => {
  return (
    <>
      <div className="best-seller">
        <p>BEST SELLERS</p>
        <p className="best-selling">
          Here is a collection of our most selling products
        </p>
        <div className="card-container">
          {products.slice(2, 7).map((product) => (
            <NavLink
              key={product._id}
              className="card-nav"
              to={`/product/${product._id}`}
            >
              <div className="card">
                <img src={product.image} alt="" />
                <p>{product.name}</p>
                <p>${product.price}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
export default BestSeller;
