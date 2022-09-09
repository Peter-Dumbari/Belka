import React, { useState } from "react";
import Sidebar from "../Components/SideNav";
import Calendar from "react-calendar";
import { CDBInput, CDBIcon } from "cdbreact";
import { Link } from "react-router-dom";

export default function Schedule() {
  const [value, onChange] = useState(new Date());
  const datas = [
    { id: "0", email: "dummytwiz@teting.com", name: "Yellow Boy" },
    { id: "1", email: "ppeofif@teting.com", name: "Blue Boy" },
    { id: "2", email: "fdidfiifjf@teting.com", name: "Fire Boy" },
    { id: "3", email: "helloweii@teting.com", name: "Joe Boy" },
  ];

  const [dataSource, setDataSource] = useState(datas);
  const [tableFilter, setTableFilter] = useState([]);
  const [things, setThings] = useState("");


  const filterData = (e) => {
    if (e.target.value !=="") {
      setThings(e.target.value);
      const filterTable = dataSource.filter(o =>
        Object.keys(o).some(k =>
          String(o[k])
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else {
      setThings(e.target.value);
      setDataSource([...dataSource]);
    }
  };

  return (
    <>
      <Sidebar />
      <body
        className="container-fluid schedulebody"
        style={{ backgroundColor: "#f1f1f2" }}
      >
        <h4>Schedule/Program</h4>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-success col-2 col-md-2 calendarbuttons  "
            style={{ marginRight: "20px" }}
          >
            Day
          </button>
          <button
            className="btn btn-outline-success col-2 col-md-2 calendarbuttons"
            style={{ marginRight: "20px" }}
          >
            Week
          </button>
          <button
            className="btn btn-outline-success col-2 col-md-2 calendarbuttons"
            style={{ marginRight: "20px" }}
          >
            Month
          </button>
          <button className="btn btn-outline-success col-2 col-md-2 calendarbuttons">
            Year
          </button>
        </div>

        <div className="row schedulec">
          <div
            className="col-11   col-lg-3   col-md-8  0ffset-md-1    p-3 mt-5 mb-2"
            style={{
              marginRight: "20px",
              backgroundColor: "#fff",
              marginLeft: "20px",
              borderRadius: "10px",
            }}
          >
            <div className="mt-5 schedule-upper-buttons" style={{ textAlign: "center" }}>
              <Link to="/createschedule" style={{ textDecoration: "none" }}>
                <button className="btn btn-success mb-3 col-10 col-md-11 schedule-upper-buttons">
                  + Create Schedule/Programme
                </button>
              </Link>
              <Link to="/scheduleeventlist" style={{ textDecoration: "none" }}>
                <button className="btn btn-success schedule-upper-buttons">
                  {" "}
                  Schedule/Event List
                </button>
              </Link>
            </div>

            <div className="mt-3 p-3 mb-5">
              <span style={{ fontWeight: "bold" }}>Teams</span>
              <CDBInput
                icon={<CDBIcon icon="search" style={{ marginBottom: "4px" }} />}
                placeholder="Search People"
                type="search"
                value={things}
                onChange={filterData}
              />
              {things.length > 0
                ? tableFilter.map((users) => {
                    return (
                      <div
                        className="row pb-3"
                        style={{ borderBottom: "1px solid" }}
                      >
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
                          <span className="row" key={users.Id}>
                            <span style={{ fontWeight: "500" }}>
                              {users.name}
                            </span>
                            <span style={{ fontSize: "80%" }}>
                              {users.email}
                            </span>
                          </span>
                        </div>
                      </div>
                    )
                  })
                : dataSource.map((users) => {
                    return (
                      <div
                        className="row pb-3"
                        style={{ borderBottom: "1px solid" }}
                      >
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
                          <span className="row" key={users.Id}>
                            <span style={{ fontWeight: "500" }}>
                              {users.name}
                            </span>
                            <span style={{ fontSize: "80%" }}>
                              {users.email}
                            </span>
                          </span>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
          <div
            className="col-11 col-md-11 col-lg-8  mb-5 mt-5 schedulecalendar"
            style={{ backgroundColor: "#fff", borderRadius: "10px" }}
          >
            <Calendar onChange={onChange} value={value} className="kalistus" />
          </div>
        </div>
      </body>
    </>
  );
}
