/* eslint-disable react/prop-types */
import cart from "../assets/cart.avif";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import { cartList } from "./Modal";
// import { getCartList as cartList } from "./Modal";
import { getCartList as cartList, setCartList } from "./Modal";
import ShopButton from "./Shopbutton";
import NumberInput from "./NumberInput";
import { useState } from "react";

const Cart = function () {
  return (
    <Link to="/cart" className="cartlink">
      <div className="cart">
        <img src={cart} alt="cart" />
        <div className="cartnumber">{cartList().length || null}</div>
      </div>
    </Link>
  );
};

const Checkout = function ({ handleCheckout }) {
  return (
    <>
      <Link className="shop-button" onClick={() => handleCheckout()}>
        Checkout
      </Link>
    </>
  );
};

const Cartdata = function ({ cartList, handleRemoveButton, plusItem, minusItem }) {
  return (
    <>
      {cartList.map((list) => (
        <tr key={list.id} className="list">
          <td>
            <img src={list.image} alt="item" className="cartimg" />
          </td>
          <td>{list.title}</td>
          <td>
            <NumberInput
              amount={list.quantity}
              plusItem = {() => plusItem(list.id)}
              minusItem = {() => minusItem(list.id)}
              removeItem={() => handleRemoveButton(list.id)}
            />
          </td>
          <td>${list.price}</td>
          <td>${(list.price * list.quantity).toFixed(2)}</td>
          <td>
            <button
              onClick={() => handleRemoveButton(list.id)}
              className="remove-button"
            >
              ×
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

const Cartpage = function () {
  const [refresh, setRefresh] = useState(true);
  const handleCheckout = function () {
    alert("The items will soon be delivered");
    localStorage.clear();
    // eslint-disable-next-line no-import-assign
    setCartList();
    //  = JSON.parse(localStorage.getItem("cartList"));
  };

  const handleRemoveButton = function (id) {
    const indexToRemove = cartList().findIndex((item) => item.id === id);
    cartList().splice(indexToRemove, 1);
    localStorage.setItem("cartList", JSON.stringify(cartList()));
    setRefresh(!refresh);
  };

  const plusItem = function (id) {
    const itemIndex = cartList.findIndex((item) => item.id === id);
    cartList[itemIndex].quantity += 1;
    localStorage.setItem("cartList", JSON.stringify(cartList()));
    setRefresh(!refresh);
  };

  const minusItem = function(id) {
    const itemIndex = cartList().findIndex((item) => item.id === id);
    cartList()[itemIndex].quantity -= 1;
    localStorage.setItem("cartList", JSON.stringify(cartList()));
    setRefresh(!refresh);
  }

  const rows = [];
  //cart not empty
  if (cartList().length != 0) {
    rows.push(
      <Cartdata
        key="cartdata"
        cartList={cartList}
        plusItem = {plusItem}
        minusItem = {minusItem}
        handleRemoveButton={handleRemoveButton}
      />
    );
    return (
      <>
        <Navbar />
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {rows}
            <tr>
              <td colSpan={4}>Total</td>
              <td>
                $
                {cartList()
                  .reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                  }, 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
        <Checkout handleCheckout={handleCheckout} />
      </>
    );
  }
  //cart empty
  else {
    return (
      <>
        <Navbar />
        <div className="empty-cart">Nothing in the cart :(</div>
        <div>Continue Shopping!</div>
        <ShopButton />
      </>
    );
  }
};

export default Cart;
export { Cartpage };
