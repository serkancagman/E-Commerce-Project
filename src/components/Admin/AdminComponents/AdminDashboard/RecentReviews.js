import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import adminStyle from "./style/admindashboard.module.css";
import { Link } from "react-router-dom";
import SwiperCore, {
  Autoplay,
  FreeMode,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
const RecentReviews = () => {
    SwiperCore.use([FreeMode, Pagination, Navigation, Autoplay, Mousewheel]);
 const recentReviews = [
        {
          id: 1,
          name: "John Doe",
          stars: 5,
          profile:
            "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1385&q=80",
          date: "01 Feb",
          review: "Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          name: "Alice Smith",
          stars: 4,
          profile:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          date: "02 Feb",
          review: "Lorem ipsum dolor sit amet",
        },
      
        {
          id: 3,
          name: "Merry Alex",
          stars: 5,
          profile:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
          date: "03 Feb",
          review: "Lorem ipsum dolor sit amet",
        },
      ];
      
  return (
    <div className="col-md-6 col-lg-4">
      <div className={adminStyle.ordersValueWrapper}>
        <div className={adminStyle.ordersHeader}>
          <h5 className={adminStyle.ordersTitle}>Recent Reviews</h5>
          <Link to="/#" className={adminStyle.viewMoreData}>
            View All
          </Link>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{ delay: 2000 }}
          className="mySwiper"
        >
          {recentReviews.map((review) => {
            return (
              <SwiperSlide key={review.id}>
                <div className={adminStyle.recentReviews}>
                  <div className={adminStyle.recentReviewsInner}>
                    <img
                      className={adminStyle.reviewProfile}
                      src={review.profile}
                      alt="review"
                    />
                    <div className={adminStyle.reviewInfo}>
                      <span className={adminStyle.reviewName}>
                        {review.name}
                      </span>
                      <div className={adminStyle.reviewDate}>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className={adminStyle.reviewText}>{review.review}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentReviews;
