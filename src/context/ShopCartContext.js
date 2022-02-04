import React from "react";

export const ShopCartContext = React.createContext();

export const ShopCartProvider = ({ children }) => {
  const baseCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartItems, setCartItems] = React.useState(baseCart);
  const [cartSub, setCartSub] = React.useState(0);
  const [shipping, setShipping] = React.useState(0);
  const [cartTotal, setCartTotal] = React.useState(0);

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (data, findCurrentItem) => {
    if (!findCurrentItem) {
      return setCartItems((cartItems) => [...cartItems, data]);
    }
    const filtered = cartItems.filter(
      (sameItem) => sameItem._id !== findCurrentItem._id
    );
    setCartItems(filtered);
  };

  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  React.useEffect(() => {
    let subTotal = 0;
    let shippingTotal = 0;

    subTotal += (totalPrice * 10) / 100;

    if (totalPrice > 200) {
      subTotal = 0;
    }
    shippingTotal = totalPrice + subTotal;

    setCartSub(Math.floor(totalPrice * 100) / 100);
    setShipping(Math.floor(subTotal * 100) / 100);
    setCartTotal(Math.floor(shippingTotal * 100) / 100);
  }, [cartItems, totalPrice]);

  const values = { addToCart, cartItems, cartSub, shipping, cartTotal };

  return (
    <ShopCartContext.Provider value={values}>
      {children}
    </ShopCartContext.Provider>
  );
};
