import React from 'react';
import InnerHeading from '../Common/InnerHeading';
import img4 from "../../Assets/img/img-4.png";
import img from "../../Assets/img/img.png";
import img1 from "../../Assets/img/img-1.png";
import img6 from "../../Assets/img/img-6.png";
import img3 from "../../Assets/img/img-3.png";
import img5 from "../../Assets/img/img-5.png";
import treadingIcon from "../../Assets/icon/ph_trend-up-bold.png";

const AllMoviesTable = () => {
  return (
    <>
        <div className="user-search-data">
                  <InnerHeading
                    heading="Collection of all movies"
                    title="Keep track of all the movies on moviebox"
                  />
                  <input
                    className="form-control search-bar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
                <div className="table-responsive movie-table">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th className='heading-sorting'>Name</th>
                        <th>Category</th>
                        <th>Popularity/Interest</th>
                        <th>Watchlists</th>
                        <th>Streams</th>
                        <th colSpan="7">Release Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="movies-table-details">
                            <img src={img4} alt="avatar-img" />
                            <span>Avengers Black Widow</span>
                          </div>
                        </td>
                        <td>
                          <div className="Category-chip">
                            <span className="chip-card">Action</span>
                            <span className="chip-card">blockbuster</span>
                          </div>
                        </td>
                        <td>
                          <button className="btn btn-md treading-btn">
                            <img src={treadingIcon} alt="treading-icon" />
                            Treading
                          </button>
                        </td>
                        <td>590,972,542</td>
                        <td>21,452</td>
                        <td>21th May, 2003</td>
                        <td>
                          <button className="btn btn-md view-btn">view</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="movies-table-details">
                            <img src={img} alt="avatar-img" />
                            <span>After Hours</span>
                          </div>
                        </td>
                        <td>
                          <div className="Category-chip">
                            <span className="chip-card">horror</span>
                            <span className="chip-card">crime</span>
                          </div>
                        </td>
                        <td></td>
                        <td>88,458,892</td>
                        <td>32,892</td>
                        <td>21th May, 2003</td>
                        <td>
                          <button className="btn btn-md view-btn">view</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="movies-table-details">
                            <img src={img1} alt="avatar-img" />
                            <span>Ant-man</span>
                          </div>
                        </td>
                        <td>
                          <div className="Category-chip">
                            <span className="chip-card">horror</span>
                            <span className="chip-card">crime</span>
                          </div>
                        </td>
                        <td></td>
                        <td>22,008,901</td>
                        <td>345,321</td>
                        <td>21th May, 2003</td>
                        <td>
                          <button className="btn btn-md view-btn">view</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="movies-table-details">
                            <img src={img6} alt="avatar-img" />
                            <span>Captain Marvel</span>
                          </div>
                        </td>
                        <td>
                          <div className="Category-chip">
                            <span className="chip-card">action</span>
                            <span className="chip-card">fantasy</span>
                          </div>
                        </td>
                        <td></td>
                        <td>80,961</td>
                        <td>903</td>
                        <td>21th May, 2003</td>
                        <td>
                          <button className="btn btn-md view-btn">view</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="movies-table-details">
                            <img src={img3} alt="avatar-img" />
                            <span>Grimsby</span>
                          </div>
                        </td>
                        <td>
                          <div className="Category-chip">
                            <span className="chip-card">comedy</span>
                            <span className="chip-card">crime</span>
                          </div>
                        </td>
                        <td>
                          <button className="btn btn-md treading-btn">
                            <img src={treadingIcon} alt="treading-icon" />{" "}
                            Treading
                          </button>
                        </td>
                        <td>670,901</td>
                        <td>2,453</td>
                        <td>21th May, 2003</td>
                        <td>
                          <button className="btn btn-md view-btn">view</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="movies-table-details">
                            <img src={img5} alt="avatar-img" />
                            <span>Moonlight</span>
                          </div>
                        </td>
                        <td>
                          <div className="Category-chip">
                            <span className="chip-card">true story</span>
                            <span className="more-card">+2 more</span>
                          </div>
                        </td>
                        <td>
                          <button className="btn btn-md treading-btn">
                            <img src={treadingIcon} alt="treading-icon" />
                            Treading
                          </button>
                        </td>
                        <td>56,893</td>
                        <td>24,512,232</td>
                        <td>4th July, 2012</td>
                        <td>
                          <button className="btn btn-md view-btn">view</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
    </>
  )
}

export default AllMoviesTable;