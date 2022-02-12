import { getOrder } from "API/trendProductAPI";
import { FooterMain } from "components/Footer/FooterMain";
import { Header } from "components/Header/Header";
import { ShopCartContext } from "context/ShopCartContext";
import React from "react";

const Checkout = () => {
  const { cartItems, setCartItems } = React.useContext(ShopCartContext);

  const [address, setAddress] = React.useState("");

  const handleAdress = (e) => {
    setAddress(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const cartIds = cartItems.map((item) => item._id);

    const input = {
      address,
      items: JSON.stringify(cartIds),
    };

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const responseDB = await getOrder(input);
    console.log(responseDB);
    setCartItems([]);
  };

  return (
    <>
      <Header />
      <section className="checkoutMain">
        <div className="container-fluid">
          <div className="col-md-12">
            <h2>Write your adress</h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Your Adress"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  value={address}
                  onChange={(e) => handleAdress(e)}
                ></textarea>
                <label htmlFor="floatingTextarea2">Comments</label>
              </div>

              <button
                type="submit"
                onClick={submitForm}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <FooterMain />
    </>
  );
};

export default Checkout;
