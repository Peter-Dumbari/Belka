import React, {useState} from "react";
import Sidebar from "../Components/SideNav";
import { CDBIcon, CDBSelect } from "cdbreact";


export default function ProgrammesAttended() {

  const [option] = useState([
    {
      text: 'Mobile Computer Lab',
      value: '1'
    },
    {
      text: 'All Programme',
      value: '2'
    },
    {
      text: 'Option 3',
      value: '3'
    },
  ])
  return (
    <>
      <Sidebar />
      <div className="container-fluid programmeattended">
        <div className="d-flex ">
          <div className="me-auto p-2 userprofilename">
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
              <span className="d-flex p-2" style={{ color: "#fff" }}>
                 <CDBSelect options={option} selected="Choose an Option" style={{width: "100%", backgroundColor: "#028B2E", color: "#fff", fontWeight: "bold"}}/>

              </span>
            </div>
          </div>
        </div>
        <span className="d-flex flex-row-reverse" style={{ fontWeight: "bold", width:"100%", fontSize: "75%"}}>
              Registered on the 09 December, 2022
            </span>

            <div className="table-responsive">
            <table className="table table-striped table-hover">
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
      </div>
    </>
  );
}
