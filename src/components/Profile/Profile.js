import { AuthLoginContext } from "context/AuthLoginContext";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./style/profile.css";

const Profile = () => {
  const {handleLogout, user } = React.useContext(AuthLoginContext);
   
  
    

  return (
      <>
     <section className="my-3" id="profileMain">
        <div className="container-fluid">
          <div className="row g-4 justify-content-center">
            <div className="col-md-3 col-lg-3">
              <div className="profileMenu p-2">
                <div className="profileMenuHeader">
                  <h6 className="profileMenuTitle">
                    Your account
                  </h6>
                </div>
                <ul className="profileNav">
                  <li className="profileItem">
                    <Link to="/" className="profileLink">Personal info</Link>
                  </li>
                  <li className="profileItem">
                    <Link to="/" className="profileLink">Orders</Link>
                  </li>
                  <li className="profileItem">
                    <Link to="/" className="profileLink">Credit slips</Link>
                  </li>
                  <li className="profileItem">
                    <Link to="/" className="profileLink">Adresses</Link>
                  </li>
                  <li className="profileItem">
                    <span onClick={handleLogout} className="logoutLink"><FiLogOut/> Logout</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-9 col-lg-9">
              <div className="profileContent">
                <div className="profileContentHeader">
                  <h6 className="profileContentTitle">Your Account</h6>
                  </div>
              </div>
            </div>
          </div>
          </div>
    
  </section>
  </>
  );
};

export default Profile;
