import React from "react";
import Sidebar from "../Components/SideNav";
import { CDBIcon } from "cdbreact";

export default function AcademicClassAssignment() {
  return (
    <>
      <Sidebar />
      <body className="container-fluid academicclass-assignment"style={{backgroundColor: "#f1f1f2", height: "100vh"}}>
        <div className="d-flex " style={{ marginBottom: "2%" }}>
          <div className="me-auto p-2 academicclass-assignment-header">
            <h3 style={{ fontFamily: "Poppins" }}>File Manager</h3>
          </div>
          <div className="p-2">
            <button className="btn btn-success academicclass-assignment-button">
              Academic Class Assignment
            </button>
          </div>
        </div>
        <div className="table-responsive">
        <table
          className="table  table-borderless academicclassassignment-table"
          style={{ color: "#484848" }}
        >
          <thead style={{ color: "#484848" }}>
            <tr>
              <th>
                <div className="d-line-flex">
                  Academic Group
                  <CDBIcon
                    icon="play"
                    style={{ rotate: " 90deg", fontSize: "10px" }}
                  />
                </div>
              </th>
              <th>
                <div className="d-line-flex">
                  Councellor in Charge
                  <CDBIcon
                    icon="play"
                    style={{ rotate: " 90deg", fontSize: "10px" }}
                  />
                </div>
              </th>
              <th>
                <div className="d-line-flex">
                  Phone Number{" "}
                  <CDBIcon
                    icon="play"
                    style={{ rotate: " 90deg", fontSize: "10px" }}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light mb-2" style={{borderRadius: "5px"}}>
              <td>
                <div className="d-flex " style={{ marginBottom: "2%" }}>
                  <div className="d-inline" style={{marginRight: "6%"}}>
                    <CDBIcon icon="folder" style={{padding: "5px", color: "#028B2E", backgroundColor: "#b5d9c7", borderRadius: "5px"}}/> <span>1st Graders</span>
                  </div>
                  <div><button className="butting">Open Folder</button></div>
                </div>
              </td>
              <td>John Carilo</td>
              <td>+33757005467</td>
              <td ><CDBIcon icon="comment-alt" style={{color: "#028B2E"}}/></td>
              <td><CDBIcon icon="envelope"style={{color: "#149FC8"}}/></td>
            </tr>
          </tbody>
        </table>
        </div>
      </body>
    </>
  );
}
