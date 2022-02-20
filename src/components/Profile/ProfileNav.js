import { AuthLoginContext } from "context";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./style/profile.css";

const Profile = () => {
  const { handleLogout } = React.useContext(AuthLoginContext);

  return (
    <>
      <div className="col-md-3 col-lg-3">
        <div className="profileMenu p-2">
          <div className="profileMenuHeader">
            <h6 className="profileMenuTitle">Your account</h6>
          </div>
          <ul className="profileNav">
            <li className="profileItem">
              <Link to="/" className="profileLink">
                Personal info
              </Link>
            </li>
            <li className="profileItem">
              <Link to="/" className="profileLink">
                Orders
              </Link>
            </li>
            <li className="profileItem">
              <Link to="/" className="profileLink">
                Credit slips
              </Link>
            </li>
            <li className="profileItem">
              <Link to="/" className="profileLink">
                Adresses
              </Link>
            </li>
            <li className="profileItem">
              <span onClick={handleLogout} className="logoutLink">
                <FiLogOut /> Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
