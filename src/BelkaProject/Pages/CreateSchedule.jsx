import React, { useState } from "react";
import Sidebar from "../Components/SideNav";
import { CDBIcon, CDBSelect } from "cdbreact";

export default function CreateSchedule() {
  const [option] = useState([
    {
      text: "Mobile Computer Lab",
      value: "1",
    },
    {
      text: "Option 2",
      value: "2",
    },
    {
      text: "Option 3",
      value: "3",
    },
  ]);

  return (
    <>
      <Sidebar />
      <body
        className="container-fluid"
        style={{ backgroundColor: "#f1f1f2", height: "100vh" }}
      >
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
                <CDBSelect
                  options={option}
                  selected="Choose an Option"
                  style={{
                    width: "100%",
                    backgroundColor: "#028B2E",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-8  col-md-12  col-sm-12">
            <div
              class="row justify-content-evenly p-3"
              style={{ backgroundColor: "#d7ebe0", borderRadius: "10px",  marginBottom :"1%"}}
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
          <div className="col-lg-4 col-12 col-md-5">
            <label>Program Supervisor/Councellor</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <form action="">
          <div className="row mt-3">
            <div className="col-1">
              <span style={{ fontWeight: "bold" }}>Title</span>
            </div>
            <div className="col-lg-5  col-md-5  col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Arts and Crafts"
              />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Slots Available"
              />
            </div>
          </div>
          <div className="row " style={{ marginBottom :"1%"}}>
            <div className="col-lg-1  col-md-2  col-sm-">
              <span style={{ fontWeight: "bold" }}> Start Time</span>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <input
                type="time"
                className="form-control"
                placeholder="9:00am"
              />
            </div>
            <div class="col-lg-1 col-md-2 offset-lg-1">
              <span style={{ fontWeight: "bold" }}>End Time</span>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <input
                type="time"
                className="form-control"
                placeholder="2:00pm"
              />
            </div>
            <div class="col-lg-1 col-md-1 offset-lg-1" >
              <span style={{ fontWeight: "bold" }}>Date</span>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <input type="date" className="form-control" placeholder="Date" />
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <span style={{ fontWeight: "bold" }}>Venue</span>
            </div>
            <div className="col-lg-5 col-md-4 col-sm-12">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row" >
            <div className="col-lg-6 col-md-10 col-sm-12" style={{marginTop: "2%"}}>
              <label style={{ fontWeight: "bold" }}>Details</label>
              <textarea
                name=""
                id=""
                cols="5"
                rows="10"
                className="form-control"
              ></textarea>
            </div>
            <div
              className="col-lg-4 col-md-8 col-sm-12 p-3 offset-md-1 text-center"
            >
              <div className="imageUploadingBox">
                <div className="row text-center">
                  <CDBIcon icon="upload" className="imageuploadericon" />
                  <span style={{ fontWeight: "bold" }}>
                    Add Program Pictures
                  </span>
                  <p>
                    Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word,
                    PPT
                  </p>
                  <div>
                    {" "}
                    <input type="file" />
                  </div>
                </div>
              </div>
              <button className="btn btn-success" style={{ width: "50%" }}>
                Add
              </button>
            </div>
          </div>
          <div className="text-center mt-4">
            <div style={{ width: "100%" }}>
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog p-5">
                  <div className="modal-content p-3">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                      Mobile Computer Lab Event has been created succesfully
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                    Please check schedule list for more details
                    </div>
                    <div className="modal-footer-centered">
                      <button
                        type="button"
                        className="btn btn-success"
                        data-bs-dismiss="modal"
                        style={{width: "20%"}}
                      >
                        Okay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-success"
                style={{ width: "20%", marginRight: "10px", marginTop :"1%" }}

              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ width: "20%",  marginTop :"1%" }}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </body>
    </>
  );
}
