import { products } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";

const Herosub = () => {
  return (
    <>
      <div className="sub-section">
        <p>LATEST COLLECTION</p>
        <div className="latest-col">
          <p>
            Explore our latest collection to take your stylling to the next
            level
          </p>
        </div>
        <div className="card-container">
          {products.slice(9, 19).map((product) => (
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
export default Herosub;
