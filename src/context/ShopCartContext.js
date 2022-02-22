import React from "react";

const ShopCartContext = React.createContext();

export const ShopCartProvider = ({ children }) => {
  const baseCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartItems, setCartItems] = React.useState(baseCart);
  const [cartSub, setCartSub] = React.useState(0);
  const [shipping, setShipping] = React.useState(0);
  const [cartTotal, setCartTotal] = React.useState(0);

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (data, findCurrentItem, quantityInput) => {
    if (!findCurrentItem) {
      if (quantityInput !== undefined) {
        return setCartItems([
          ...cartItems,
          { ...data, quantity: quantityInput },
        ]);
      } else {
        return setCartItems([...cartItems, { ...data, quantity: 1 }]);
      }
    }
    // if the item is already in the cart, increase the quantity
    const newCart = cartItems.map((item) => {
      if (item._id === data._id) {
        if (item.quantity) {
          if (quantityInput !== undefined) {
            return { ...item, quantity: item.quantity + quantityInput };
          } else {
            return { ...item, quantity: item.quantity + 1 };
          }
        } else if (item.quantity === undefined) {
          if (quantityInput !== undefined) {
            item.quantity = 1;
            return { ...item, quantity: item.quantity + quantityInput };
          } else {
            return { ...item, quantity: item.quantity + 1 };
          }
        }
      } else {
        return item;
      }
      return item;
    });
    return setCartItems(newCart);
  };

  const removeFromCart = (data) => {
    const filtered = cartItems.filter((sameItem) => sameItem._id !== data._id);
    setCartItems(filtered);
  };

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

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

  const values = {
    addToCart,
    cartItems,
    cartSub,
    shipping,
    cartTotal,
    setCartItems,
    removeFromCart,
  };

  return (
    <ShopCartContext.Provider value={values}>
      {children}
    </ShopCartContext.Provider>
  );
};

export default ShopCartContext;
