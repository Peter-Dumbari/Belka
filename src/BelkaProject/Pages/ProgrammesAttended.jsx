import React from "react";
import Sidebar from "../Components/SideNav";
import { CDBIcon } from "cdbreact";

export default function ProgrammesAttended() {
  return (
    <>
      <Sidebar />
      <div className="container-fluid">
        <div className="d-flex ">
          <div className="me-auto p-2">
            <h3 style={{ fontFamily: "Poppins" }}>User Profile</h3>
          </div>
          <div style={{ marginTop: "12px", width: "40%",}}>
            <div
              style={{
                width: "100%",
                backgroundColor: "#028B2E",
                borderRadius: "10px",
              }}
            >
              <span className="d-flex p-2" style={{ color: "#fff"}}>
                <span className="me-auto">Programmes Attended</span>
                <CDBIcon
                  icon="play"
                  style={{ rotate: " 90deg", margin: "0 10px 0 10px" }}
                />
              </span>
            </div>
          </div>
        </div>
        <span className="d-flex flex-row-reverse" style={{ fontWeight: "bold", width:"100%", fontSize: "75%"}}>
              Registered on the 09 December, 2022
            </span>
            <table className="table table-striped table-hover" style={{fontSize: "75%"}}>
        <thead>
            <tr>
                <th>Ticket  no</th>
                <th>Program Name</th>
                <th>Date </th>
                <th>Locations</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>#876364</td>
                <td>Summer Camp</td>
                <td>09 Dec, 2020</td>
                <td>Old Mill, New york</td>
            </tr>
            <tr>
                <td>#876364</td>
                <td>Summer Camp</td>
                <td>09 Dec, 2020</td>
                <td>Old Mill, New york</td>
            </tr>
            <tr>
                <td>#876364</td>
                <td>Summer Camp</td>
                <td>09 Dec, 2020</td>
                <td>Old Mill, New york</td>
            </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
