import React from "react";
import { Header, FooterMain, ProfileNav, MainProfile } from "components";
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
