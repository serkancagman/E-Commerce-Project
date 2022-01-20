import React from "react";
import "./style/shopcart.css";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import cartImg from "../../images/cartImg.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import HeaderContext from "context/HeaderContext";
export const ShopCart = () => {
  const { shopCart, showCart } = React.useContext(HeaderContext);

  return (
    <aside
      id="shopCart"
      className={`position-fixed${shopCart ? " showShopCart" : " "}`}
    >
      <div className="cartMain ">
        <div className="cartInner">
          <div className="cartHeader bg-light text-center w-100">
            <h4 className="cartInnerText">SHOPPING CART</h4>
            <GrFormClose onClick={showCart} size={25} className="closeCart" />
          </div>
          <div className="cartProduct w-100 h-100" id="cartProduct">
            <div className="cartProductInfo">
              <Link className="cartProductImg" to="/">
                <img className="img-fluid" src={cartImg} />
              </Link>
              <div className="cartProductNames mx-1">
                <Link to="/"> Smart Watch for iOS Phones</Link>

                <div className="cartPrice">
                  
                  <span className="cartMainPrice">$26.95</span>
                  <span className="productQuantity"> x 1</span>
                </div>
              </div>
              <div className="deleteCartProduct">
                <RiDeleteBin6Line size={25} />
              </div>
            </div>
          </div>
          <div className="cartBottom">
            <p className="cartTotalProductInfo">
              There is 1 item in your cart.
            </p>
            <div className="cartSummarySubtotals">
              <div className="cartSummaryLine cartSubTotal">
                <label>Subtotal</label>
                <span className="sub-price">$26.95</span>
              </div>
              <div className="cartSummaryLine cartSubTotal">
                <label>Shipping</label>
                <span className="sub-price">$7.99</span>
              </div>
              <div className="cartSummaryLine cartTotalExcl">
                <label>Total (tax excl.)</label>
                <span className="total-price">$34.94</span>
              </div>
              <div className="cartSummaryLine cartTotalIncl">
                <label>Total (tax incl.)</label>
                <span className="total-price-bottom">$34.94</span>
              </div>
              <div className="text-end taxes-price">
                <span>Taxes: $0.00</span>
              </div>
              <div className="goCheck">
                <Link to="/" className="checkCart">
                  CHECKOUT <span>▸</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="cartCurrency text-center">
            <span className="currencyType">EUR</span>
            <span className="currencyType">USD</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
