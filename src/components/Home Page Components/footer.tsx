import React from "react";
import { Link } from "react-router-dom";
import Ventrix from "../../assets/ventrix_white_logo_100.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center gap-6 pt-8 pb-10 font-light">
        <Link to="/privacy">
          <p className="text-sm">Privacy Policy</p>
        </Link>
        <Link to="/terms">
          <p className="text-sm">Terms of Service</p>
        </Link>
      </div>
    </>
  );
};

export default Footer;
