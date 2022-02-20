import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import "./style/productdetail.css";
import { getProductDetail } from "API/trendProductAPI";
import { ImEnlarge, ImTruck } from "react-icons/im";
import { Link } from "react-router-dom";
import { ProductContext, ShopCartContext } from "context";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import WriteReview from "./WriteReview";
import { BiMoviePlay } from "react-icons/bi";
import adsBanner from "images/adsImage.jpg";
import loaderImg from "images/loaderCircle.gif";
import { Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const ProductDetail = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [isShowReview, setIsShowReview] = React.useState(false);
  const { addToCart, cartItems } = React.useContext(ShopCartContext);
  const [currentPic, setCurrentPic] = React.useState();
  const [currentPicIndex, setCurrentPicIndex] = React.useState(0);

  const { quantity, setQuantity, handleQuantityChange } =
    React.useContext(ProductContext);
  const { product_id } = useParams();
  const findItem = cartItems.find((item) => item._id === product_id);

  const { data, isLoading, error } = useQuery(["product", product_id], () =>
    getProductDetail(product_id)
  );

  if (isLoading) {
    return (
      <div className="text-center">
        <img className="img-fluid" src={loaderImg} alt="..." />
      </div>
    );
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  const handleLittlePic = (index) => {
    if (index === 0) {
      setCurrentPic(data.photos[0]);
      setCurrentPicIndex(0);
    } else if (index === 1) {
      setCurrentPic(data.photos[1]);
      setCurrentPicIndex(1);
    } else if (index === 2) {
      setCurrentPic(data.photos[2]);
      setCurrentPicIndex(2);
    } else if (index === 3) {
      setCurrentPic(data.photos[3]);
      setCurrentPicIndex(3);
    } else if (index === 4) {
      setCurrentPic(data.photos[4]);
      setCurrentPicIndex(4);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showReview = () => {
    setIsShowReview(true);
  };

  const reviewOff = () => {
    setIsShowReview(false);
  };

  const handleCancelReview = () => {
    setIsShowReview(false);
  };

  return (
    <>
      <section id="productDetail">
        <div className="container-xxl">
          <div className="productDetailWrapper">
            <div className="row g-3 ">
              <div className="col-lg-4 col-md-6">
                <div className="productDetailImg position-relative">
                  <img
                    className="img-fluid showImage"
                    src={currentPic || data.photos[0]}
                    type="image/vnd.ms-photo"
                    alt="..."
                  />

                  <span onClick={showModal} className="enlargeIcon">
                    <ImEnlarge color="red" />
                  </span>
                </div>
                <div className="productDetailImages py-1 d-flex justify-content-center align-items-center">
                  {data.photos.map((photo, index) => (
                    <div
                      key={index}
                      onClick={() => handleLittlePic(index)}
                      className={`moreProductPictures ${
                        currentPicIndex === index && "currentPic"
                      }`}
                    >
                      <img
                        className="productLittleImg img-fluid"
                        width={100}
                        src={photo}
                        alt="..."
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="productDetailInfo">
                  <h3 className="productDetailHeader">{data.title}</h3>
                  <span className="productDetailPrice">${data.price}</span>
                  <div className="productDetailStockInfo">
                    <div className="attributeItem productBrand">
                      <label>Brand</label>
                      <Link to="/#">Unknown</Link>
                    </div>
                    <div className="attributeItem productReference">
                      <label>Reference</label>
                      <span>demo</span>
                    </div>
                    <div className="attributeItem productQuantity">
                      <label>In stock</label>
                      <span>599</span>
                    </div>
                    <p className="productDetailDescription">
                      Typi non habent claritatem insitam est usus legentis in
                      qui facit orum claritatem lectores legere me lius quod
                      legunt saepius. Sit amet conse ctetur adipisicing elit sed
                      do eiusmod tempor.
                    </p>
                    <div className="productDetailSize p-2">
                      <div className="sizeOptions row justify-content-center g-3">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                          <div className="sizeOption w-100 text-center currentSize">
                            <span className="sizePrice d-block">
                              ${data.price}
                            </span>
                            <span className="sizeWidth">40x60cm</span>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                          <div className="sizeOption w-100 text-center">
                            <span className="sizePrice d-block">
                              ${Number(data.price) + 10}
                            </span>
                            <span className="sizeWidth">40x60cm</span>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                          <div className="sizeOption w-100 text-center">
                            <span className="sizePrice d-block">
                              ${Number(data.price) + 30}
                            </span>
                            <span className="sizeWidth">40x60cm</span>
                          </div>
                        </div>
                      </div>
                      <div className="productQuantityWrapper">
                        <div className="productQuantityBottom d-flex align-items-center justify-content-center">
                          <span
                            onClick={() => setQuantity(quantity - 1)}
                            className="setQuantity"
                          >
                            -
                          </span>
                          <input
                            type="text"
                            onKeyPress={(e) => {
                              if (!/[0-9]/.test(e.key)) {
                                e.preventDefault();
                              }
                            }}
                            maxLength="2"
                            className="quantityInput"
                            value={quantity}
                            onChange={(e) => handleQuantityChange(e)}
                          />
                          <span
                            onClick={() => setQuantity(quantity + 1)}
                            className="setQuantity"
                          >
                            +
                          </span>
                        </div>

                        <button
                          onClick={() => addToCart(data, findItem, quantity)}
                          className={`btn addToCartButton ${
                            findItem && "removeFromBasket"
                          }`}
                        >
                          <RiShoppingCartFill
                            className="addCartIcon"
                            size={15}
                          />
                          {findItem ? "Remove from cart" : "Add to cart"}
                        </button>
                      </div>
                    </div>
                    <div className="shareProduct d-flex justify-content-center align-items-center my-2">
                      <span className="shareProductIcon">
                        <FaFacebookF className="fbIcon" color="#4267B2" /> Share
                      </span>
                      <span className="shareProductIcon">
                        <FaTwitter className="twIcon" color="#1DA1F2" /> Tweet
                      </span>
                      <span className="shareProductIcon">
                        <FaPinterest className="pnIcon" color="#E60023" />{" "}
                        Pinterest
                      </span>
                    </div>
                    <button className="writeRewiew" onClick={showReview}>
                      <HiPencil /> Write your review
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="productVideoWrapper">
                  <div className="productVideo d-flex align-items-center flex-start">
                    <BiMoviePlay size={35} />
                    <div className="productVideoTitle">PRODUCT VIDEO</div>
                  </div>
                  <div className="orderInfo">
                    <ImTruck /> FREE shipping on orders over <span>$25.00</span>{" "}
                    shipped by Amazon.{" "}
                    <Link className="orderInfoDetails" to="/#">
                      {" "}
                      Details{" "}
                    </Link>
                  </div>
                  <div className="webAdsenseArea text-end">
                    <Link className="adsLink " to="/#">
                      <img src={adsBanner} className="img-fluid" alt="..." />
                    </Link>
                    <span className="adsInfo">In-Store Advertising</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          footer={null}
          width={"80%"}
          title={data.title}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data.photos.map((photo, index) => (
              <SwiperSlide className="text-center" key={index}>
                <img
                  className="img-fluid bigProductImage"
                  src={photo}
                  alt="..."
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal>
        <WriteReview
          productData={data}
          isShowReview={isShowReview}
          showReview={showReview}
          reviewOff={reviewOff}
          handleCancelReview={handleCancelReview}
        />
      </section>
    </>
  );
};

export default ProductDetail;
