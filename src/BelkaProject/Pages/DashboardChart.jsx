import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { CDBContainer, CDBIcon, CDBProgress } from "cdbreact";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// export const Progress = () => {
//   const percentage = 66;
//   return (
//     <CDBContainer>

//             <CircularProgressbar value={percentage} text={`${percentage}%`} />

//     </CDBContainer>
//   );
// };

export default function DashboardChart() {
  // ChartJS.register(
  //   CategoryScale,
  //   LinearScale,
  //   PointElement,
  //   LineElement,
  //   Title,
  //   Tooltip,
  //   Legend
  // )

  // const [data] = useState({
  //   labels: ['10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am'],
  //   datasets: [
  //     {
  //       label: 'My  dataset',
  //       backgroundColor: 'rgba(71, 225, 167, 0.5)',
  //       borderColor: 'rgb(71, 225, 167)',
  //       data: [0, 2, 4, 8, 10, 12, 14, 16, 18, 20]
  //     },
  //   ],
  // });

  return (
    // <div className="row " style={{marginTop: "2%" }}>
    //   <div className="col-11 col-md-7 bg-light m-3" style={{borderRadius: "15px"}}>
    //     <CDBContainer>
    //       <Line data={data} options={{ responsive: true }} />
    //     </CDBContainer>
    //   </div>
    //   <div className="col-11 col-md-4 bg-light m-2" style={{borderRadius: "15px", padding: "5%"}}>
    //    <Progress style={{width: "10%"}}/>
    //   </div>
    // </div>
    <div className="mt-4 p-3 col-12 col-md-12 col-lg-12" style={{ backgroundColor: "#028b2e0d"}}>
      <div className="row">
        <span> 1 day trip</span>

        <h4 className="mt-5">5 days to a </h4>

        <h1 style={{ color: "green" }}>Trip to Wonderland</h1>
        <div className="col">
          <div className="d-inline-flex">
            <CDBIcon icon="map-marker" style={{marginTop: "4px"}} />
            <span>Texas</span>

            <div className="row" style={{ marginLeft: "30%" }}>
              <div className="d-inline-flex">
                <CDBIcon icon="clock" style={{marginTop: "4px"}}/>
                <span>Tuesday 7th june 2022</span>
              </div>
              <span>08:00 Am (Meeting Time)</span>
            </div>
          </div>
        </div>

        <h4 className="mt-4">Profile pictures still working on</h4>
      </div>
    </div>
  );
}
