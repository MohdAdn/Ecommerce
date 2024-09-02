import { useProduct } from "../Context/ProductContext";

const Order = () => {
  const { orderItems } = useProduct();
  const date = new Date();

  return (
    <>
      <h2 className="order">Your Orders</h2>

      {orderItems.map((item) => (
        <div key={`${item._id}-${item.size}`} className="Cart_item ">
          <img src={item.image} alt="" />

          <p>{item.name}</p>

          <p>Order Placed</p>
          <p>
            Order Date
            <br />
            {date.getDay() + 1}/ {date.getMonth() + 1} / {date.getFullYear()}
            <br />
            {date.toLocaleTimeString()}
          </p>

          <p>Size: {item.size}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total price ${item.price * item.quantity}</p>
          <button className="track">Track Now</button>
        </div>
      ))}
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default Order;
