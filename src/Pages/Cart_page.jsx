import { NavLink } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

const Cart = () => {
  let acc = 10;
  let val;

  const {
    allCartItems,
    handleIncrease,
    decreaseQuantity,
    deleteFn,
    total,
    setTotal,
  } = useProduct();

  useEffect(() => {
    val = allCartItems.reduce(
      (amount, item) => item.price * item.quantity + amount,
      0
    );
    setTotal(val);
  }, [allCartItems]);

  return (
    <>
      <h2 className="cart-heading">Your Cart</h2>
      {allCartItems?.map((item) => (
        <div key={`${item._id}-${item.size}`} className="Cart_item ">
          <img src={item.image} alt="" />
          <div className="quantity">
            <button onClick={() => decreaseQuantity(item._id, item.size)}>
              -
            </button>
            <p>
              Qty: {item.quantity}
              <br />
              Size: {item.size}
            </p>
            <button onClick={() => handleIncrease(item._id, item.size)}>
              +
            </button>
            <ToastContainer />
          </div>
          <p>Price ${item.price * item.quantity}</p>
          <DeleteIcon
            style={{ color: "red" }}
            onClick={() => deleteFn(item._id, item.size, item.quantity)}
          />
        </div>
      ))}

      <div className="cart-total-container">
        <div className="cart-total">
          Cart Total Amount:$
          {
            (acc += allCartItems.reduce(
              (acc, item) => item.price * item.quantity + acc,

              0
            ))
          }{" "}
          <p>Shipping Charges: $10</p>
          <NavLink to={"/checkout"}>
            {acc > 10 ? <button>Proceed To checkout</button> : <></>}
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Cart;
