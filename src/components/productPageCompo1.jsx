import { useParams } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

const ProductCompoHero = () => {
  const { products, cartItems, selectSize, setSelectSize } = useProduct();
  const [isActive, setIsactive] = useState(null);

  const param = useParams();
  const item = products.find((item) => item._id === param.id);
  function handleSize(size, index) {
    setIsactive(index);
    setSelectSize(size);
  }

  function handleClick() {
    if (selectSize) {
      cartItems(item, selectSize);
    } else {
      toast.warning("please Select Size first");
    }
  }

  return (
    <>
      <div id="link" className="product-page-container">
        <div className="Product-page">
          <div className="img-div">
            <img src={item.image} alt="image" />
          </div>
          <div className="Product-Details">
            <h2 className="head">{item.name}</h2>
            <h2 className="head">${item.price}</h2>
            <p className="head">{item.description}</p>
            <span>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={3}
                  precision={4}
                  readOnly
                />
                <span>Reviews(333)</span>
              </Stack>
            </span>
            <p>Select Size</p>
            <div className="btn-div">
              {item.sizes.map((size, index) => (
                <span key={index}>
                  <button
                    className={`size-btn ${
                      isActive === index ? "active" : " "
                    }`}
                    value={size}
                    onClick={(e) => handleSize(e.target.value, index)}
                  >
                    {size}
                  </button>
                </span>
              ))}
            </div>

            <button onClick={() => handleClick()} className="add-cart">
              Add to cart
            </button>
            <br />
            <span style={{ fontSize: 10 }}>
              Note: Only 10 Quantity of perticular size to be ordered
            </span>
            <ToastContainer />
            <div className="border"></div>
            <p className="des">100% Original product.</p>
            <p className="des">
              Easy return and exchange policy within 7 days.
            </p>
            <p className="des">
              Cash on delivery is available on this product.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCompoHero;
