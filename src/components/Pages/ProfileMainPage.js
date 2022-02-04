import React from "react";
import ProfileNav from "components/Profile/ProfileNav";
import MainProfile from "components/Profile/MainProfile";
import { FooterMain } from "components/Footer/FooterMain";
import { Header } from "components/Header/Header";
const ProfileMainPage = () => {
  return (
    <>
    <Header />
      <section className="my-3" id="profileMain">
        <div className="container-fluid">
          <div className="row g-4 justify-content-center">
            <ProfileNav />
            <MainProfile />
          </div>
        </div>
      </section>
      <FooterMain />
    </>
  );
};

export default ProfileMainPage;
