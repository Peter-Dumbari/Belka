import React from "react";
import Sidebar from "../Components/SideNav";
import DashBoardCards from "./DashBoardCards";
import DashboardChart from "./DashboardChart";
import { NewRegistration } from "./NewRegistration";

export default function Dashboard() {
  return (
    <body>
      <Sidebar />
      <div  className="container-fluid dasboardbody pd-5" >
        <div className="col">
          <div className="d-flex " style={{marginBottom: "2%"}}>
            <div className="me-auto p-2">
              <h3 style={{fontFamily: 'Poppins'}}>Dashboard</h3>
            </div>
            <div className="p-2">
              <button className="btn btn-success col-sm-12 col-md-8 col-lg-12 dashboardbotton">10-06-2021</button>
            </div>
            <div className="p-2">
              <button className="btn btn-success col-sm-12 col-md-8 col-lg-12 dashboardbotton">10-06-2021</button>
            </div>
          </div>
        </div>
        <DashBoardCards/>
        <DashboardChart/>
        <NewRegistration/>
      </div>
    </body>
  );
}
