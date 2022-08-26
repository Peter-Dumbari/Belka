import React,{useState} from "react";
import Sidebar from "../Components/SideNav";
import { CDBIcon, CDBSelect } from "cdbreact";

export default function CreateSchedule() {
  const [option] = useState([
    {
      text: 'Mobile Computer Lab',
      value: '1'
    },
    {
      text: 'Option 2',
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
      <body className="container-fluid" style={{backgroundColor: "#f1f1f2", height: "100vh"}}>
        <div className="d-flex ">
          <div className="me-auto p-2">
            <h3 style={{ fontFamily: "Poppins" }}>Create Schedule/Program</h3>
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
                 <CDBSelect options={option} selected="Choose an Option" style={{width: "100%", backgroundColor: "#028B2E", color: "#fff", fontWeight: "bold"}}/>

              </span>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-7">
            <div
              class="row justify-content-evenly p-3"
              style={{ backgroundColor: "#d7ebe0", borderRadius: "10px" }}
            >
              
              <div class="col-3">
                <button className="btn btn-success" style={{ width: "100%" }}>
                  Program
                </button>
              </div>
              <div class="col-3">
                <button
                  className="btn btn-outline"
                  disabled
                  style={{ width: "100%" }}
                >
                  Reminder
                </button>
              </div>
              <div class="col-3">
                <button
                  className="btn btn-outline"
                  disabled
                  style={{ width: "100%" }}
                >
                  Task
                </button>
              </div>
            </div>
          </div>
          <div className="col-5">
            <label>Program Supervisor/Councellor</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <form action="">
        <div className="row mt-3">
          <div className="col-1">
            <span style={{ fontWeight: "bold" }}>Title</span>
          </div>
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Arts and Crafts"
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Slots Available"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-1">
            <span style={{ fontWeight: "bold" }}> Start Time</span>
          </div>
          <div className="col-2">
            <input type="time" className="form-control" placeholder="9:00am" />
          </div>
          <div class="col-md-1 offset-md-1">
            <span style={{ fontWeight: "bold" }}>End Time</span>
          </div>
          <div className="col-2">
            <input type="time" className="form-control" placeholder="2:00pm" />
          </div>
          <div class="col-md-1 offset-md-1">
            <span style={{ fontWeight: "bold" }}>Date</span>
          </div>
          <div className="col-3">
            <input type="date" className="form-control" placeholder="Date" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-1">
            <span style={{ fontWeight: "bold" }}>Venue</span>
          </div>
          <div className="col-4">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label style={{ fontWeight: "bold" }}>Details</label>
            <textarea
              name=""
              id=""
              cols="5"
              rows="7"
              className="form-control"
            ></textarea>
          </div>
          <div className="col-6 p-3">
            <input type="file" />
            <button className="btn btn-success"style={{width:"10%"}}>Add</button>
          </div>
        </div>
        <div className="text-center mt-4" >
            <div style={{width: "100%"}}>
            <button className="btn btn-success" style={{width: "20%", marginRight: "10px"}}>Cancel</button>
            <button className="btn btn-success" style={{width: "20%"}}>Save</button>
            </div>
        </div>
              </form>
      </body>
    </>
  );
}
