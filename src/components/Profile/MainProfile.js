import React from "react";
import { Link } from "react-router-dom";
import {MdPersonPin} from "react-icons/md";
import { BiLocationPlus } from "react-icons/bi";
import { BsCalendarMinus, BsFillFilePersonFill } from "react-icons/bs";
import { RiBillLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { AuthLoginContext } from "context/AuthLoginContext";
const MainProfile = () => {


    const {handleLogout} = React.useContext(AuthLoginContext);
  return (
    <div className="col-md-9 h-100 col-lg-9">
      <div className="profileContent">
        <div className="profileContentHeader">
          <h6 className="profileContentTitle">Your Account</h6>
        </div>
        <div className="row g-3 flex-wrap my-3">
            <div className="col-md-4 col-lg-4">
                <div className="profileItemNav">
                    <Link to="/" className="profileLinkNav"><MdPersonPin className="profileIcon" /> Information</Link>
                </div>
            </div>
            <div className="col-md-4 col-lg-4">
                <div className="profileItemNav">
                    <Link to="/" className="profileLinkNav"><BiLocationPlus className="profileIcon" /> Add first address</Link>
                </div>
            </div>
            <div className="col-md-4 col-lg-4">
                <div className="profileItemNav">
                    <Link to="/" className="profileLinkNav"><BsCalendarMinus className="profileIcon" /> Order history and details</Link>
                </div>
            </div>
            <div className="col-md-4 col-lg-4">
                <div className="profileItemNav">
                    <Link to="/" className="profileLinkNav"><RiBillLine className="profileIcon" /> Credit slips</Link>
                </div>
            </div>
            <div className="col-md-4 col-lg-4">
                <div className="profileItemNav">
                    <Link to="/" className="profileLinkNav"><BsFillFilePersonFill className="profileIcon" /> GDPR - Personal data</Link>
                </div>
            </div>
        </div>
      </div>
      <div className="profileFooter d-flex align-items-center justify-content-between p-3">
          <div className="returnProfile">
                <Link to="/" className="returnProfileLink">Back to your account</Link>
          </div>
          <div className="logoutArea">
                <span className="logoutLink" onClick={handleLogout}><FiLogOut/> Logout</span>
          </div>
      </div>
    </div>
  );
};

export default MainProfile;
