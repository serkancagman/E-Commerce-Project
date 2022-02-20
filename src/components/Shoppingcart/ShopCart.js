import React from "react";
import "./style/shopcart.css";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import HeaderContext from "context/HeaderContext";
import { ShopCartContext } from "context/ShopCartContext";
import { Button } from "antd";
export const ShopCart = () => {
  const { shopCart, showCart } = React.useContext(HeaderContext);
  const { cartItems, addToCart, cartSub, shipping, cartTotal } =
    React.useContext(ShopCartContext);
  return (
    <aside
      id="shopCart"
      className={`position-fixed${shopCart ? " showShopCart" : " "}`}
    >
      <div className="cartMain h-100">
        <div className="cartInner">
          <div className="cartHeader bg-light text-center w-100">
            <h4 className="cartInnerText">SHOPPING CART</h4>
            <GrFormClose onClick={showCart} size={25} className="closeCart" />
          </div>
          <div className="cartInnerWrapper d-flex flex-column justify-content-between">
            <div className="cartProductWrapper d-flex flex-column">
              {cartItems &&
                cartItems.map((cartProduct) => {
                  const findItem = cartItems.find(
                    (item) => item._id === cartProduct._id
                  );
                  return (
                    <div
                      key={cartProduct._id}
                      className="cartProduct w-100 h-100"
                      id="cartProduct"
                    >
                      <div className="cartProductInfo">
                        <Link
                          className="cartProductImg d-block mx-auto"
                          to={`/product/${cartProduct._id}`}
                        >
                          <img
                            className="cartItemImg"
                            src={cartProduct.photos[0]}
                            alt="..."
                          />
                        </Link>
                        <div className="cartProductNames mx-1">
                          <Link to={`/product/${cartProduct._id}`}>
                            {cartProduct.title}
                          </Link>

                          <div className="cartPrice">
                            <span className="cartMainPrice">
                              ${cartProduct.price}
                            </span>
                            <span className="productQuantity"> x 1</span>
                          </div>
                        </div>
                        <div
                          onClick={() => addToCart(cartProduct, findItem)}
                          className="deleteCartProduct me-2"
                        >
                          <RiDeleteBin6Line size={25} />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            {cartItems.length > 0 ? (
              <div className="cartBottomWrapper">
                <div className="cartBottom">
                  <p className="cartTotalProductInfo">
                    There is {cartItems.length} item in your cart.
                  </p>
                  <div className="cartSummarySubtotals">
                    <div className="cartSummaryLine cartSubTotal">
                      <label>Subtotal</label>
                      <span className="sub-price">${cartSub}</span>
                    </div>
                    <div className="cartSummaryLine cartSubTotal">
                      <label>Shipping</label>
                      <span className="sub-price">${shipping}</span>
                    </div>
                    <div className="cartSummaryLine cartTotalIncl">
                      <label>Total</label>
                      <span className="total-price-bottom">${cartTotal}</span>
                    </div>
                    <div className="text-end taxes-price">
                      <span>Taxes: $0.00</span>
                    </div>
                    <div className="goCheck">
                      <Link to="/cartcheckout" className="text-decoration-none ">
                       <Button  type="primary" className="btn-block">Checkout</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="noItemsCart">
                <div className="alert alert-warning" role="alert">
                  There are no more items in your cart.
                </div>
              </div>
            )}
            <div className="cartCurrency text-center">
              <Button className="bg-light mx-1">EUR €</Button>
              <Button className="bg-light mx-1">USD $</Button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
