import React from "react";
import exportIcon from "../../Assets/icon/ph_cloud-arrow-down-bold.png";

const TopHeading = () => {
  return (
    <>
      <div className="top-heading">
        <div className="container">
          <div className="inner-heading">
            <h3 className="m-0">Avengers Black Widow</h3>
            <button className="btn btn-md export-btn">
              <img src={exportIcon} alt="export-icon" /> Export
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeading;
