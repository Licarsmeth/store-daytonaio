import { useState } from "react";
// let cartList = JSON.parse(localStorage.getItem("cartList"));
// eslint-disable-next-line react/prop-types
const NumberInput = ({ amount, removeItem,  plusItem, minusItem}) => {
  const [quantity, setQuantity] = useState(amount);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    //It did not work here, but works in Cart.jsx 82 :(
    // const itemIndex = cartList.findIndex((item) => item.id === id);
    // cartList[itemIndex].quantity += 1;
    // localStorage.setItem("cartList", JSON.stringify(cartList));
    plusItem();
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    //   const itemIndex = cartList.findIndex((item) => item.id === id);
    //   cartList[itemIndex].quantity -= 1;
    //   localStorage.setItem("cartList", JSON.stringify(cartList));
      minusItem();
    } else {
      removeItem();
    }
  };

  return (
    <div className="number-input">
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default NumberInput;
