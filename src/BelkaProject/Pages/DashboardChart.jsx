import React, { useState } from "react";
import { CDBContainer } from "cdbreact";
import Template from '../Images/BG.png'

export default function DashboardChart() {

  return (
    <div className="row " style={{marginTop: "2%" }}>
      <div className="col-11 col-md-7 bg-light m-3" style={{borderRadius: "15px"}}>
        <CDBContainer>
          <h3 className="mt-5">Line chart</h3>
          
        </CDBContainer>
      </div>
      <div className="col-11 col-md-4 bg-light m-2" style={{borderRadius: "15px"}}>
        <img src={Template} alt="" width="60%"/>
      </div>
    </div>
  );
}
