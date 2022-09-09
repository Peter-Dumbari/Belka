import React, { useState } from "react";
import Sidebar from "../Components/SideNav";
import { CDBIcon, CDBSelect } from "cdbreact";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";

export default function EventList() {
  const [value, onChange] = useState(new Date());
  const [option] = useState([
    {
      text: "Mobile Computer Lab",
      value: "1",
    },
    {
      text: "Option 2",
      value: "2",
    },
    {
      text: "Option 3",
      value: "3",
    },
  ]);

  return (
    <>
      <Sidebar />
      <body
        className="container-fluid scheduleevent"
        style={{ backgroundColor: "#f1f1f2"}}
      >
        <div className="d-flex eventlistcontainer">
          <div className="me-auto p-2 eventllist">
            <h3 style={{ fontFamily: "Poppins" }}>Schedule/Program List</h3>
          </div>
          <div style={{ marginTop: "12px", width: "40%" }}>
            <div
              style={{
                width: "100%",
                backgroundColor: "#028B2E",
                borderRadius: "10px",
              }}
            >
              <span className="d-flex p-2" style={{ color: "#fff" }}>
                <CDBSelect
                  options={option}
                  selected="Choose an Option"
                  style={{
                    width: "100%",
                    backgroundColor: "#028B2E",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-11  col-lg-3  col-md-10   bg-light pt-2  mb-5 mt-3"
            style={{
              textAlign: "center",
              marginLeft: "20px",
              marginRight: "20px",
              borderRadius: "10px",
            }}
          >
            <Link to="/createschedule" style={{ textDecoration: "none" }}>
              <button className="btn btn-success create_schedule-programme_btn">
                + Create Schedule/Program
              </button>
            </Link>
            <div
              className="p3 mt-3"
              style={{ marginBottom: "50px", outlineStyle: "dotted" }}
            >
              <Calendar
                onChange={onChange}
                value={value}
                className="kalistus"
              />
            </div>
            <div style={{ textAlign: "left" }}>
              <span style={{ fontWeight: "bold" }}>Teams</span>
            </div>
            <div>
              <div className="p-1">
                <button className="btn btn-success">
                  <CDBIcon icon="users" /> Add Teams
                </button>
                <div className="row pb-3 mt-2" style={{ textAlign: "left" }}>
                  <div className="col-2">
                    <img
                      src="https://th.bing.com/th/id/R.d268b238932809e18b85a7820184220f?rik=ahExR0U%2fu2zHyQ&riu=http%3a%2f%2ficon-library.com%2fimages%2fno-profile-picture-icon%2fno-profile-picture-icon-2.jpg&ehk=4X8pLfMkepeJcdTMZ8L033nQ2hfH0gJN3qGTpg62g00%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                      width="30px"
                      className="position-relative"
                      style={{
                        borderRadius: "10px",
                        marginTop: "7px",
                      }}
                    />
                  </div>
                  <div className="col-10 col-lg-10 col-md-12">
                    <span className="row">
                      <span style={{ fontWeight: "500", color: "#484848" }}>
                        Joan Baby
                      </span>
                      <span style={{ fontSize: "80%", color: "#484811" }}>
                        dummytwiz@gmail.yahoo
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" col-11 col-lg-8  col-md-12 mt-2 p-3 bg-light m-3"
            style={{ borderRadius: "10px" }}
          >
            <div className="table-responsive">
              <table className="table table-striped table-hover eventlisttable">
                <thead style={{ color: "#484848" }}>
                  <tr>
                    <th>
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th>
                      <div className="d-line-flex">
                        Date{" "}
                        <CDBIcon
                          icon="play"
                          style={{ rotate: " 90deg", fontSize: "10px" }}
                        />
                      </div>
                    </th>
                    <th>
                      <div className="d-line-flex">
                        Time{" "}
                        <CDBIcon
                          icon="play"
                          style={{ rotate: " 90deg", fontSize: "10px" }}
                        />
                      </div>
                    </th>
                    <th>
                      <div className="d-line-flex">
                        Location{" "}
                        <CDBIcon
                          icon="play"
                          style={{ rotate: " 90deg", fontSize: "10px" }}
                        />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>
                      <div me="d-line-flex">
                        <CDBIcon icon="calendar" style={{ color: "#028B2E" }} />
                        3 Dec, 2022{" "}
                      </div>
                    </td>
                    <td>
                      <div className="d-line-flex">
                        <CDBIcon icon="clock" style={{ color: "#028B2E" }} />
                        10.15AM
                      </div>
                    </td>
                    <td>
                      <div
                        className="d-line-flex"
                        style={{
                          color: "#028B2E",
                          padding: "5px",
                          borderRadius: "10px",
                          backgroundColor: "#c5e6d2",
                          textAlign: "center",
                          width: "70%",
                        }}
                      >
                        <CDBIcon icon="map-marker" />
                        king West Village{" "}
                      </div>
                    </td>
                    <td>
                      <div className="d-line-flex">
                        <CDBIcon
                          icon="pen"
                          style={{
                            marginRight: "20px",
                            color: "#028B2E",
                            backgroundColor: "#c5e6d2",
                            padding: "5px",
                            borderRadius: "10px",
                          }}
                        />
                        <CDBIcon
                          icon="trash"
                          style={{
                            color: "#d66d80",
                            padding: "5px",
                            borderRadius: "10px",
                            backgroundColor: "#e6c5c7",
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
