import { getOrder } from "API/trendProductAPI";
import checkoutStyle from "./style/checkout.module.css";
import { Button } from "antd";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { ShopCartContext } from "context/ShopCartContext";
import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

const Checkout = ({ setStep }) => {
  const { cartItems, addToCart, setCartItems, cartSub, shipping, cartTotal } =
    React.useContext(ShopCartContext);
  console.log(cartItems);
  return (
    <>
      <div className={checkoutStyle.BasketProductLength}>
        <h5 className={checkoutStyle.BasketProductLengthValue}>
          You have {cartItems.length} products in your cart.
        </h5>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="row g-3 flex-wrap">
            {cartItems.map((cartProduct, index) => {
              const findItem = cartItems.find(
                (item) => item._id === cartProduct._id
              );
              return (
                <div key={index} className="col-md-3">
                  <div className={checkoutStyle.basketProduct}>
                    <div className={checkoutStyle.basketProductImg}>
                      <img
                        className={checkoutStyle.basketImg}
                        src={cartProduct.photos[0]}
                        alt="product"
                      />
                    </div>
                    <div className={checkoutStyle.basketProductInfo}>
                      <Link
                        to={`/product/${cartProduct._id}`}
                        className={checkoutStyle.basketProductName}
                      >
                        {cartProduct.title}
                      </Link>
                      <p className={checkoutStyle.basketProductPrice}>
                        Price:{" "}
                        <span className={checkoutStyle.priceValue}>
                          ${cartProduct.price}
                        </span>
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className={checkoutStyle.basketProductQuantity}>
                          X 1{cartProduct.length}
                        </p>
                        <Button
                          onClick={() => addToCart(cartProduct, findItem)}
                          className={checkoutStyle.removeCartBtn}
                        >
                          <MdOutlineRemoveShoppingCart />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-4">
          <div className={checkoutStyle.checkoutSummary}>
            <h3 className={checkoutStyle.checkoutSummaryTitle}>Summary</h3>
            <div className={checkoutStyle.checkoutSummaryContent}>
              <div
                className={`d-flex justify-content-between ${checkoutStyle.summaryItem}`}
              >
                <p className={checkoutStyle.checkoutSummaryItemTitle}>
                  Subtotal
                </p>
                <p className={checkoutStyle.checkoutSummaryItemValue}>
                  ${cartSub}
                </p>
              </div>
              <div
                className={`d-flex justify-content-between ${checkoutStyle.summaryItem}`}
              >
                <p className={checkoutStyle.checkoutSummaryItemTitle}>
                  Shipping
                </p>
                <p className={checkoutStyle.checkoutSummaryItemValue}>
                  ${shipping}
                </p>
              </div>
              <div
                className={`d-flex justify-content-between ${checkoutStyle.summaryItem}`}
              >
                <p className={checkoutStyle.checkoutSummaryItemTotal}>TOTAL</p>
                <p className={checkoutStyle.checkoutSummaryItemTotalValue}>
                  ${cartTotal}
                </p>
              </div>
            </div>
            <div className="d-flex mt-5 justify-content-end">
              <Button
                onClick={() => setStep(1)}
                className={checkoutStyle.continueBtn}
              >
                Accept & Continue
              </Button>
            </div>
          </div>
        </div>
      </div>

   
    </>
  );
};

export default Checkout;
