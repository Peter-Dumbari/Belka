import React, { useState } from "react";
import Sidebar from "../Components/SideNav";
import { CDBIcon, CDBContainer, CDBSlider } from "cdbreact";
import Calendar from "react-calendar";

export default function Registerations() {
  const [value, onChange] = useState(new Date());
  const [digit, setDigit] = useState("");

  const TableDatas = [
    {
      index: "0",
      TicketNo: "#833838",
      ProgramName: "Winter Camp",
      Date: "09 Dec, 2022",
      UserName: "John Barika",
      Gender: "Female",
      TotalRegistrations: "500",
    },
    {
      index: "1",
      TicketNo: "#876364",
      ProgramName: "Summer Camp",
      Date: "09 Dec, 2020",
      UserName: "John Mary",
      Gender: "Male",
      TotalRegistrations: "300",
    },
    {
      index: "2",
      TicketNo: "#876774",
      ProgramName: "Raining Camp",
      Date: "09 Oct, 2020",
      UserName: "Mary Mary",
      Gender: "Female",
      TotalRegistrations: "100",
    },
  ];
  return (
    <>
      <Sidebar />
      <body style={{ backgroundColor: "#f1f1f2", paddingRight: "6px" }}>
        <div className="container-fluid">
          <div className="d-flex ">
            <div className="me-auto p-2">
              <h3 style={{ fontFamily: "Poppins" }}>Registrations</h3>
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
                  <span className="me-auto" style={{ fontWeight: "bold" }}>
                    All Programmes
                  </span>
                  <CDBIcon
                    icon="play"
                    style={{ rotate: " 90deg", margin: "0 10px 0 10px" }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-3 mb-1 p-3"
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                marginRight: "20px",
                marginLeft: "20px",
              }}
            >
              <h5 className="mb-3" style={{ textAlign: "center" }}>
                Filter
              </h5>
              <Calendar onChange={onChange} value={value} />
              <div>
                <div  style={{marginTop:"7px"}}>
                <span>Age</span>
                <div style={{ backgroundColor: "#e7eef0" }}>
                  <CDBContainer>
                    <CDBSlider
                      value={digit}
                      setValue={setDigit}
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
                <div className="d-inline-flex p-2" style={{ width: "100%" }}>
                  <button
                    type="button"
                    className="btn btn-success m-2"
                    style={{ width: "45%" }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-success m-2"
                    style={{ width: "45%" }}
                  >
                    Apply
                  </button>
                </div>
                </div>
              </div>
            </div>
            <div
              className="col-8 p-3 mb-3 mt-3"
              style={{ backgroundColor: "#fff", borderRadius: "10px" }}
            >
              <table
                className="table table-striped table-hover  text-center"
                style={{ fontSize: "85%" }}
              >
                <thead style={{ color: "#484848" }}>
                  <tr>
                    <th>Ticket no</th>
                    <th>Program Name</th>
                    <th>Date </th>
                    <th>User Name</th>
                    <th>Gender</th>
                    <th>Total Registrations</th>
                  </tr>
                </thead>
                <tbody>
                  {TableDatas.map((users) => (
                    <tr key={users.index}>
                      <td>{users.TicketNo}</td>
                      <td>{users.ProgramName}</td>
                      <td>{users.Date}</td>
                      <td>{users.UserName}</td>
                      <td>{users.Gender}</td>
                      <td>{users.TotalRegistrations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
