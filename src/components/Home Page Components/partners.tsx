import React from "react";
import GreenhouseLogo from "../../assets/greenhouse.png";

const Partner = () => {
  return (
    <div
      className="flex flex-col items-center justify-center p-10 rounded-lg"
      style={{ backgroundColor: '#111111' }}
    >


      <h2 className="text-2xl font-medium mb-4 text-white">Our Partners</h2>
      <img src={GreenhouseLogo} alt="Greenhouse" className="w-48 h-auto" />
    </div>
  );
};

export default Partner;
