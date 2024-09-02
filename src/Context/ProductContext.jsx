import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [selectSize, setSelectSize] = useState("");
  const [allCartItems, setAllCartItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  function cartItems(item, selectSize) {
    setAllCartItems((prevCartItems) => {
      if (!item.sizes.includes(selectSize)) {
        toast.warning("Selected size is not available for this item.");
        return prevCartItems;
      }

      const existingItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem._id === item._id && cartItem.size === selectSize
      );

      const updatedCartItems = [...prevCartItems];

      if (existingItemIndex !== -1) {
        const currentQuantity = updatedCartItems[existingItemIndex].quantity;

        if (currentQuantity < 10) {
          updatedCartItems[existingItemIndex] = {
            ...updatedCartItems[existingItemIndex],
            quantity: Math.min(currentQuantity + 1, 10),
          };
        } else {
          return prevCartItems;
        }
      } else {
        updatedCartItems.push({
          _id: `${item._id - selectSize}`,
          ...item,
          size: selectSize,
          quantity: 1,
        });
      }

      const newCartCount = updatedCartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );

      setCartCount(newCartCount);

      return updatedCartItems;
    });
  }
  const handleIncrease = (itemId, selectSize) => {
    let limit = false;
    setAllCartItems((prevCartItems) => {
      return prevCartItems.map((item) => {
        if (item._id === itemId && item.size === selectSize) {
          if (item.quantity < 10) {
            // Increase quantity if less than 10
            setCartCount(cartCount + 1);
            return { ...item, quantity: item.quantity + 1 };
          } else {
            limit = true;
            return item; // Return the item as is
          }
        }
        return item; // Return unchanged item if it doesn’t match itemId
      });
    });
  };

  const decreaseQuantity = (itemId, selectSize) => {
    setAllCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) => {
        if (item._id === itemId && item.size === selectSize) {
          // Decrease quantity but prevent it from going below 1
          const newQuantity = Math.max(item.quantity - 1, 1);
          return { ...item, quantity: newQuantity };
        }
        return item; // Return unchanged items
      });

      // Calculate the new total cart count
      const newCartCount = updatedCartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );

      // Update state with new cart items and count
      setCartCount(newCartCount);
      return updatedCartItems;
    });
  };
  function deleteFn(itemId, selectSize, quantity) {
    // Update the cart items
    setAllCartItems((prevCartItems) => {
      // Filter out items that match both itemId and selectSize
      const updatedCartItems = prevCartItems.filter(
        (item) => !(item._id === itemId && item.size === selectSize)
      );

      // Update the cart count
      const updatedCartCount = updatedCartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );

      setCartCount(updatedCartCount);

      return updatedCartItems;
    });
  }

  function sendingCartItems(items) {
    setOrderItems(items);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        toast,
        cartCount,
        cartItems,
        allCartItems,
        handleIncrease,
        decreaseQuantity,
        setCartCount,
        setAllCartItems,
        sendingCartItems,
        orderItems,
        selectSize,
        setSelectSize,
        deleteFn,
        ToastContainer,
        setTotal,
        total,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
