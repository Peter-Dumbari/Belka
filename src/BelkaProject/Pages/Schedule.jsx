import React, { useState } from "react";
import Sidebar from "../Components/SideNav";
import Calendar from "react-calendar";
import { CDBInput, CDBIcon } from "cdbreact";
import { Link } from "react-router-dom";

export default function Schedule() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Sidebar />
      <body
        className="container-fluid"
        style={{ backgroundColor: "#f1f1f2", height: "100vh" }}
      >
        <h4>Schedule/Program</h4>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-success"
            style={{ width: "10%", marginRight: "20px" }}
          >
            Day
          </button>
          <button
            className="btn btn-outline-success"
            style={{ width: "10%", marginRight: "20px" }}
          >
            Week
          </button>
          <button
            className="btn btn-outline-success"
            style={{ width: "10%", marginRight: "20px" }}
          >
            Month
          </button>
          <button className="btn btn-outline-success" style={{ width: "10%" }}>
            Year
          </button>
        </div>

        <div className="row">
          <div
            className="col-3 p-3 mt-5 mb-3"
            style={{
              marginRight: "20px",
              backgroundColor: "#fff",
              marginLeft: "20px",
              borderRadius: "10px",
            }}
          >
            <div className="mt-5" style={{ textAlign: "center" }}>
              <Link to="/createschedule" style={{textDecoration: "none"}}>
              <button className="btn btn-success mb-3">
                + Create Schedule/Programme
              </button>
              </Link>
            <Link to="/scheduleeventlist" style={{textDecoration: "none"}}><button className="btn btn-success"> Schedule/Event List</button></Link>
            </div>

            <div className="mt-3 p-3 mb-5">
              <span style={{ fontWeight: "bold" }}>Teams</span>
              <CDBInput
                icon={<CDBIcon icon="search" style={{ marginBottom: "4px" }} />}
                placeholder="Search People"
                type="search"
              />
              <div className="row pb-3" style={{ borderBottom: "1px solid" }}>
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
                <div className="col-10">
                  <span className="row">
                    <span style={{ fontWeight: "500" }}>Joan Baby</span>
                    <span style={{ fontSize: "80%" }}>
                      dummytwiz@gmail.yahoo
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-8 mb-3 mt-5"
            style={{ backgroundColor: "#fff", borderRadius: "10px" }}
          >
            <Calendar onChange={onChange} value={value} className="kalistus" />
          </div>
        </div>
      </body>
    </>
  );
}
