import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";

const CheckOut = () => {
  const [checkedone, setCheckedone] = useState("option3");
  const {
    setCartCount,
    setAllCartItems,
    allCartItems,
    sendingCartItems,
    total,
  } = useProduct();

  const navigate = useNavigate();
  let cartItems;
  const handleChange = (event) => {
    setCheckedone(event.target.value);
  };

  const handleSubmit = (e) => {
    cartItems = allCartItems;

    e.preventDefault(); // Prevent default form submission

    // Process formData or send it to a backend
    //console.log('Form Data:', formData);

    // Navigate to /order route after form submission
    sendingCartItems(cartItems);
    setCartCount(0);
    setAllCartItems([]);
    navigate("/order");
  };
  return (
    <>
      <div className="checkout">
        <div className="checkout-left">
          <h2>Delivery Information</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="input-field"
              type="text"
              placeholder="Enter Your Full Name"
              required={true}
            />
            <br />
            <br />
            <input
              className="input-field"
              type="email"
              placeholder="Enter Your Email "
              required={true}
            />
            <br />
            <br />
            <input
              className="input-field"
              type="text"
              placeholder="Street"
              required={true}
            />
            <br />
            <br />
            <span>
              <input
                className="input-class"
                type="text"
                placeholder="City"
                required={true}
              />

              <input
                className="input-class"
                type="text"
                placeholder="State"
                required={true}
              />
            </span>
            <br />
            <br />
            <span>
              <input
                className="input-class"
                type="number"
                placeholder="Zip code"
                required={true}
              />
              <input
                className="input-class"
                type="text"
                placeholder="Country"
                required={true}
              />
            </span>
            <br />
            <br />

            <Button type="submit" variant="contained" color="primary">
              Place Order
            </Button>
          </form>
        </div>
        <div className="checkout-right">
          <h2>Cart Total</h2>

          <p>
            Sub-Total <span className="total-amount">${total}</span>
          </p>
          <p>
            Shipping Fees <span className="total-amount"> ${10}</span>
          </p>
          <h3>
            Total <span className="total-amount"> ${total + 10}</span>
          </h3>
          <h2>Payment Method</h2>
          <div className="all-mode">
            <div className="stripe">
              <input
                type="radio"
                value="option1"
                checked={checkedone === "option1"}
                onChange={handleChange}
              />
              <img src={assets.stripe_logo} alt="" />
            </div>
            <div className="razorpay">
              <input
                type="radio"
                value="option2"
                checked={checkedone === "option2"}
                onChange={handleChange}
              />
              <img src={assets.razorpay_logo} alt="" />
            </div>
            <div className="razorpay">
              <input
                type="radio"
                value="option3"
                checked={checkedone === "option3"}
                onChange={handleChange}
              />
              <p>Cash On Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckOut;
