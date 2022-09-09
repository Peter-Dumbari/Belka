import React from "react";
import Sidebar from "../Components/SideNav";
import { CDBIcon } from "cdbreact";
import { Link } from "react-router-dom";

export default function FIlemanager() {
  return (
    <>
      <Sidebar />
      <body className="container-fluid filemanager-container">
        <div className="mt-2 filemanager-header" style={{ color: "#484848", fontWeight: "bold" }}>
          <h5>File Manager</h5>
        </div>
        <div
          class="d-flex flex-row-reverse"
          style={{
            color: "#149FC8",
            fontSize: "20px",
            marginTop: "0",
            marginBottom: "0",
          }}
        >
          <button className="btn btn-success filemanager-addfolder-button" style={{ fontWeight: "bold" }}>
            + Add New Folder
          </button>
        </div>
        <span style={{ fontWeight: "bold" }}>Assignments</span>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3  g-3 mt-2 mb-5">
          <Link to="/highschoolassistance" className="link">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="card-title">
                    <div className="d-inline-flex">
                      <CDBIcon
                        icon="folder"
                        style={{
                          fontSize: "20px",
                          padding: "10px",
                          backgroundColor: "#bed4c6",
                          color: "#028B2E",
                          borderRadius: "5px",
                        }}
                      />
                      <div
                        className="row text-center"
                        style={{ marginTop: "-20" }}
                      >
                        <span>High School Assignment</span>
                        <span style={{ fontSize: "80%" }}>
                          High School Program
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="card-text">
                    <table className="table  table-borderless">
                      <thead>
                        <tr>
                          <th>Shared Users</th>
                          <th>Inside Files</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ color: "#028B2E" }}>
                          <div className="d-inline-flex">
                            <img
                              src="https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172507/2B8_5802.jpg"
                              className="folderpicture"
                              alt=""
                            />
                            <img
                              src="https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172507/2B8_5802.jpg"
                              className="folderpicture"
                              alt=""
                            />
                            <img
                              src="https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172507/2B8_5802.jpg"
                              className="folderpicture"
                              alt=""
                            />
                            <span className="profileusersindicator">+3</span>
                          </div>
                          <td>
                            {" "}
                            <span
                              style={{
                                padding: "10px",
                                backgroundColor: "#fff",
                                borderRadius: "10px",
                              }}
                            >
                              1,225
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/academincclassassignment" className="link">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="card-title">
                    <div className="d-inline-flex">
                      <CDBIcon
                        icon="folder"
                        style={{
                          fontSize: "20px",
                          padding: "10px",
                          backgroundColor: "#bed4c6",
                          color: "#028B2E",
                          borderRadius: "5px",
                        }}
                      />
                      <div
                        className="row text-center"
                        style={{ marginTop: "-20" }}
                      >
                        <span>Academic Class Assignment</span>
                        <span style={{ fontSize: "80%" }}>
                          Summer Camp Program
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="card-text">
                    <table className="table  table-borderless">
                      <thead>
                        <tr>
                          <th>Shared Users</th>
                          <th>Inside Files</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ color: "#028B2E" }}>
                          <div className="d-inline-flex">
                            <img
                              src="https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172507/2B8_5802.jpg"
                              className="folderpicture"
                              alt=""
                            />
                            <img
                              src="https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172507/2B8_5802.jpg"
                              className="folderpicture"
                              alt=""
                            />
                            <img
                              src="https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172507/2B8_5802.jpg"
                              className="folderpicture"
                              alt=""
                            />
                            <span className="profileusersindicator">+3</span>
                          </div>{" "}
                          <td>
                            {" "}
                            <span
                              style={{
                                padding: "10px",
                                backgroundColor: "#fff",
                                borderRadius: "10px",
                              }}
                            >
                              256
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <span style={{ fontWeight: "bold" }}>Report</span>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3  g-3 mt-2">
          <div className="col">
            <Link to="/monteringprograme" className="link">
              <div className="card">
                <div className="card-body p-4">
                  <div className="card-title">
                    <div className="d-inline-flex">
                      <CDBIcon
                        icon="folder"
                        style={{
                          fontSize: "20px",
                          padding: "10px",
                          backgroundColor: "#bed4c6",
                          color: "#028B2E",
                          borderRadius: "5px",
                        }}
                      />
                      <div
                        className="row text-center"
                        style={{ marginTop: "-20" }}
                      >
                        <span>High School Assignment</span>
                        <span style={{ fontSize: "80%" }}>
                          High School Program
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="card-text">
                    <table className="table  table-borderless ">
                      <thead>
                        <tr>
                          <th>Shared Users</th>
                          <th>Inside Files</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ color: "#028B2E" }}>
                          <div className="d-inline-flex text-center">
                            <img
                              src="https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172507/2B8_5802.jpg"
                              className="folderpicture"
                              alt=""
                            />
                            <img
                              src="https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172507/2B8_5802.jpg"
                              className="folderpicture"
                              alt=""
                            />
                            <img
                              src="https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172507/2B8_5802.jpg"
                              className="folderpicture"
                              alt=""
                            />
                            <span className="profileusersindicator">+3</span>
                          </div>{" "}
                          <td> 1,225</td>
                        </tr>
                      </tbody>
                    </table>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </body>
    </>
  );
}
