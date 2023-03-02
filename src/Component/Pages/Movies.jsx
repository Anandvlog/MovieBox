import React from "react";
import moviePoster from "../../Assets/img/MovieImage.png";
import Chart from "../AreaChart/Chart";
import InnerHeading from "../Common/InnerHeading";
import treadingIcon from "../../Assets/icon/ph_trend-up-bold.png";
import { Tab, Tabs } from "react-bootstrap";
import TopHeading from "../Common/TopHeading";
import AllMoviesTable from "./AllMoviesTable";

const Movies = () => {
  return (
    <>
      <TopHeading />
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="poster-img">
              <img src={moviePoster} alt="poster" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-12 col-lg-8">
            <div className="card custom-chart-card">
              <div className="card-body">
                <Chart />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="treading-heading">
              <InnerHeading
                heading="Movie Properties"
                title="A list of the details for this movie"
              />
              <button className="btn btn-md treading-btn">
                <img src={treadingIcon} alt="treading-icon" /> Treading
              </button>
            </div>
          </div>
          <div className="col-md-12">
            <div className="table-responsive movie-table">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Streams</th>
                    <th>Watchlists</th>
                    <th>Owner</th>
                    <th>Release Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="Category-chip">
                        <span className="chip-card">Action</span>
                        <span className="chip-card">Thriller</span>
                      </div>
                    </td>
                    <td>24,512,232</td>
                    <td>389,234</td>
                    <td>Sony Entertainment</td>
                    <td>21th May, 2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-12">
            <div className="interest-tracking-heading">
              <InnerHeading
                heading="Interest Tracking Insights"
                title="Keep track of the insights on this movie"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="table-responsive movie-table">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th>People Reached</th>
                    <th>Content Interactions</th>
                    <th>Impressions</th>
                    <th>Shares</th>
                    <th>Likes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>39,823,154</td>
                    <td>76,923,304</td>
                    <td>101,783,945</td>
                    <td>14,895</td>
                    <td>34,056,147</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="AllMovies"
              id="uncontrolled-tab-example"
              className="custom-tab"
            >
              <Tab eventKey="AllMovies" title="All Movies">
                <AllMoviesTable />
              </Tab>
              <Tab eventKey="trending" title="Trending"></Tab>
              <Tab eventKey="upcoming" title="Upcoming Premier"></Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
