import React from "react";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
    const [quantity, setQuantity] = React.useState(1);

    React.useEffect(() => {
        if (quantity < 0) {
          setQuantity(0);
        }
      }, [quantity]);
      const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
      };

    const values = {
        quantity,
        setQuantity,
        handleQuantityChange

    }




    return  <ProductContext.Provider value={values}>{children}</ProductContext.Provider>;
}