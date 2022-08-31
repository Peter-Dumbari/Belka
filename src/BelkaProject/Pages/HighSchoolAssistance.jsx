import { CDBIcon, CDBInput } from "cdbreact";
import React from "react";
import Sidebar from "../Components/SideNav";

export default function HighSchoolAssistance() {
  return (
    <>
      <Sidebar />
      <body className="container-fluid">
        <div className="d-flex " style={{ marginBottom: "2%" }}>
          <div className="me-auto p-2">
            <h3 style={{ fontFamily: "Poppins" }}>File Manager</h3>
          </div>
          <div className="p-2">
            <button className="btn btn-success">High School Assignment</button>
          </div>
        </div>
        <div className="d-flex " style={{ marginBottom: "2%" }}>
          <div className="me-auto p-2">
            <div className="d-inline-flex">
                <button className="btn btn-success" style={{marginRight: "8px"}}>10-06-2021 <CDBIcon icon="play" style={{rotate: "90deg"}}/> </button>
                <button className="btn btn-success">10-06-2021 <CDBIcon icon="play" style={{rotate: "90deg"}}/></button>
            </div>
          </div>
          <div style={{width: "50%"}}>
            <CDBInput type="search" placeholder="Search File" icon={<CDBIcon icon="search" style={{marginBottom: "12px"}}/>}/>
          </div>
        </div>
        <table
          className="table  table-hover"
          style={{ color: "#484848" }}
        >
          <thead style={{ color: "#484848" }}>
            <tr>
              <th>
                <div className="d-line-flex">
                User Name
                  <CDBIcon
                    icon="play"
                    style={{ rotate: " 90deg", fontSize: "10px" }}
                  />
                </div>
              </th>
              <th>
                <div className="d-line-flex">
                File Size
                  <CDBIcon
                    icon="play"
                    style={{ rotate: " 90deg", fontSize: "10px" }}
                  />
                </div>
              </th>
              <th>
                <div className="d-line-flex">
                Last Modified
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
                <td>John Mary</td>
                <td>2.8 MB</td>
                <td>Dec 13, 2022</td>
                <td><CDBIcon  icon="download"/></td>
                <td><button className="butting">View File</button></td>
                <td><CDBIcon icon="trash"/></td>
            </tr>
          </tbody>
          </table>
      </body>
    </>
  );
}
