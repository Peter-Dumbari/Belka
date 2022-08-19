import React from "react";
import Sidebar from "../Components/SideNav";
import { CDBInput, CDBContainer } from "cdbreact";

export default function UserLists() {
  return (
    <body style={{ backgroundColor: "#f1f1f2" }}>
      <Sidebar />
      <div className="container-fluid">
        <div className="d-flex mb-3">
          <div className="me-auto p-2">
            <h3>Users List </h3>
          </div>
          <div className="p-2" style={{width:"30%"}}>
            <CDBContainer>
              <CDBInput
                placeholder="Search"
                type="search"
                icon={<i style={{color:"gray"}} className="fa fa-search text-transparent"></i>}
                background=" #028B2E0D"
                style={{borderRadius: "10px", backgroundColor:"#028B2E0D"}}
              />
            </CDBContainer>
          </div>
        </div>
        <div className="row">
            <div className="col-8"></div>
            <div className="col-4"></div>
        </div>
      </div>
    </body>
  );
}
