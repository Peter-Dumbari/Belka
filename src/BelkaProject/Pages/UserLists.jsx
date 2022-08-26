import React, { useState } from "react";
import Sidebar from "../Components/SideNav";
import { Link } from "react-router-dom";
import {
  CDBPane,
  CDBDropDownItem,
  CDBDropDown,
  CDBDropDownMenu,
  CDBDropDownToggle,
  CDBIcon,
  CDBBox,
  CDBInput,
  CDBContainer,
  CDBSlider,
} from "cdbreact";
import "../../App.css";
import PerformanceChart from "./PerformanceChart";

export default function UserLists() {
  const [value, setValue] = useState("");

  return (
    <body style={{ backgroundColor: "#f1f1f2"}}>
      <Sidebar />
      <div className="container-fluid">
        <div className="d-flex mb-3">
          <div className="me-auto p-2">
            <h3>Users List </h3>
          </div>
          <div className="p-2" style={{ width: "30%" }}>
            <CDBContainer>
              <CDBInput
                placeholder="Search User"
                type="search"
                icon={
                  <i
                    style={{ color: "gray" }}
                    className="fa fa-search text-transparent"
                  ></i>
                }
                background=" #028B2E0D"
                style={{ borderRadius: "10px", backgroundColor: "#028B2E0D" }}
              />
            </CDBContainer>
          </div>
        </div>
        <div className="row">
          <div className="col- 11 col-md-8"  style={{ marginTop: "-30px" }}>
            <table className="table table-responsive table-hover " style={{ color: "#484848" }}>
              <thead>
                <tr style={{ fontSize: "75%" }}>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody style={{fontSize: "60%"}}>
                <tr
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "15px",
                    marginBottom: "2%",
                  }}
                >
                  <td>
                    <span className="d-inline-flex">
                      <img
                        src="https://th.bing.com/th/id/R.d268b238932809e18b85a7820184220f?rik=ahExR0U%2fu2zHyQ&riu=http%3a%2f%2ficon-library.com%2fimages%2fno-profile-picture-icon%2fno-profile-picture-icon-2.jpg&ehk=4X8pLfMkepeJcdTMZ8L033nQ2hfH0gJN3qGTpg62g00%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                        width="20px"
                        style={{ borderRadius: "10px", marginRight: "5px" }}
                      />
                      <span>John Mary</span>
                    </span>
                  </td>
                  <td>johnmary7@gmail.com</td>
                  <td>+33757005467</td>
                  <td>
                    <span
                      style={{
                        backgroundColor: "#e0f1f2",
                        padding: "5px 15px 5px 15px",
                        borderRadius: "10px",
                        color: "#149FC8",
                      }}
                    >
                      Male
                    </span>
                  </td>
                  <td style={{ cursor: "pointer", fontWeight: "bold" }}>
                    {
                      <CDBContainer>
                        <CDBBox>
                          <CDBDropDown className="ml-auto">
                            <CDBDropDownToggle color="white">
                              <CDBIcon
                                className="text-muted"
                                fas
                                icon="ellipsis-h"
                                style={{ backgroundColor: "transparent" }}
                              />
                            </CDBDropDownToggle>
                            <CDBDropDownMenu className="hi">
                              <CDBDropDownItem>
                                <Link to="/userprofile" style={{textDecoration: "none"}}>
                                <span
                                  className="d-inline-flex p-2"
                                  style={{
                                    backgroundColor: "#e0f1f2",
                                    borderRadius: "15px",
                                    color: "#149FC8",
                                  }}
                                >
                                  <CDBIcon icon="pen"></CDBIcon>
                                  User Profile
                                </span>
                                </Link>
                              </CDBDropDownItem>
                              <CDBDropDownItem>
                                <span
                                  className="d-inline-flex p-2"
                                  style={{
                                    backgroundColor: "#fbedf2",
                                    width: "100%",
                                    borderRadius: "15px",
                                    color: "#EA6354",
                                  }}
                                >
                                  <CDBIcon icon="trash"></CDBIcon>
                                  Delete
                                </span>
                              </CDBDropDownItem>
                            </CDBDropDownMenu>
                          </CDBDropDown>
                        </CDBBox>
                      </CDBContainer>
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-10 col-md-4 mb-3" style={{borderLeft: "1px solid", borderRadius:"10px 0 0 10px", borderColor: "#323333"}}>
            <form action="">
            <div>
                <center>
                  <h6>Filter</h6>
                </center>
                <span>Year</span>
                <div style={{ backgroundColor: "#e7eef0" }}>
                  <div className="d-flex mb-3 p-3">
                    <select
                      className="form-select me-auto p-2"
                      aria-label="Default select example"
                      style={{ width: "45%" }}
                    >
                      <option selected>10-06-2021</option>
                      <option value="1">10-06-2021</option>
                      <option value="2">10-06-2021</option>
                      <option value="3">10-06-2021</option>
                    </select>
                    <select
                      className="form-select p-2"
                      aria-label="Default select example"
                      style={{ width: "45%" }}
                    >
                      <option selected>10-06-2021</option>
                      <option value="1">10-06-2021</option>
                      <option value="2">10-06-2021</option>
                      <option value="3">10-06-2021</option>
                    </select>
                  </div>
                </div>
                <span>Age</span>
                <div style={{ backgroundColor: "#e7eef0" }}>
                  <CDBContainer>
                    <CDBSlider
                      value={value}
                      setValue={setValue}
                      style={{ width: "100%" }}
                    />
                  </CDBContainer>
                </div>
                <span>Gender</span>
                <div style={{ backgroundColor: "#e7eef0" }}>
                  <div className="d-inline-flex p-2">
                    <div class="form-check m-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Male
                      </label>
                    </div>
                    <div class="form-check m-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-inline-flex p-2" style={{width: "100%"}}>
                    <button type="button" className="btn btn-success m-2"style={{width: "45%", }}>Cancel</button>
                    <button type="button" className="btn btn-success m-2"style={{width: "45%"}}>Apply</button>
                  </div>
                  <span>Performance</span>
                  <PerformanceChart/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
