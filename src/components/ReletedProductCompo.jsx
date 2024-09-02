import { NavLink, useParams } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";

const ReletedProduct = () => {
  const { products } = useProduct();
  const params = useParams();
  const findproduct = products.find((item) => item._id === params.id);
  const ReletedProducts = products.filter(
    (item) =>
      item.subCategory === findproduct.subCategory &&
      item.category === findproduct.category
  );

  return (
    <>
      <h2 className="releted-heading">RELETED PRODUCTS</h2>
      <div className="releted-product-container">
        <div className="releted-products">
          {ReletedProducts.slice(1, 5)?.map((item) => (
            <NavLink key={item._id} id="link" to={`/product/${item._id}`}>
              <div className="card">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
export default ReletedProduct;
