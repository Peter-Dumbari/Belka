import React from "react";
import Sidebar from "../Components/SideNav";
import { CDBIcon } from "cdbreact";

export default function EdithAdminProfile() {
  return (
    <>
      <Sidebar />
      <body className="container-fluid">
        <div className="d-flex ">
          <div className="me-auto p-2">
            <h3 style={{ fontFamily: "Poppins" }}>Admin Profile</h3>
          </div>
          <div style={{ marginTop: "12px"}}>
            <button
              className="btn btn-success"
              disabled
              style={{ width: "100%" }}
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-11 col-md-10 col-lg-3 mb-3">
          <div className="mt-4" style={{ position: "relative" }}>
              <img
                src="https://th.bing.com/th/id/R.daced5c5d9871280ca8e2de03bf8bee5?rik=sUyBpUyNvR6IqQ&pid=ImgRaw&r=0"
                alt=""
                width="100%"
                style={{ borderRadius: "10px", position: "relative" }}
              />
              <label htmlFor="file">
              <span class="position-absolute top-0 start-100 translate-middle btn btn-success pr-5 pl-5 pt-2  text-center" style={{borderRadius: "200px" }}>
                <h5>+</h5>
              </span>
              </label>
              
              <input type="file" id="file" style={{display: "none"}}/>
            </div>
            <h4
              className="mt-3 text-center"
              style={{ color: "green", fontWeight: "bold" }}
            >
              Loveth Charles
              <hr
                style={{
                  border: "2px solid",
                  color: "#484848",
                  marginBottom: "0",
                }}
              />
            </h4>
            <div
              className="row p-4"
              style={{ backgroundColor: "#f0f6f3", borderRadius: "10px" }}
            >
              <span style={{ fontWeight: "bold" }}>Admin Info</span>
              <hr />
              <div className="mt-2">
                <div classSName="d-inline-flex" style={{ marginBottom: "2%" }}>
                  <CDBIcon icon="envelope" />
                  <span>lovethcharles7@gmail.com</span>
                </div>
                <div classSName="d-inline-flex" style={{ marginBottom: "2%" }}>
                  <CDBIcon icon="phone" />
                  <span>+33757005467</span>
                </div>
                <div classSName="d-inline-flex" style={{ marginBottom: "2%" }}>
                  <CDBIcon icon="user" />
                  <span>Male</span>
                </div>
                <div classSName="d-inline-flex" style={{ marginBottom: "2%" }}>
                  <CDBIcon icon="calendar" />
                  <span>DOB: 12-12-2000</span>
                </div>
                <div classSName="d-inline-flex">
                  <CDBIcon icon="map-marker" />
                  <span>2239 Hog Camp Road Schaumburg</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 col-md-10 col-lg-7 offset-lg-1 p-3 mb-3" style={{ backgroundColor: "#f0f6f3", borderRadius: "10px" }}>
            <h5>Details</h5>
            <hr style={{ border: "2px solid" }} />
            <form action="">
              <div>
                <label>Name</label>
                <input type="text" className="form-control" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" className="form-control" />
              </div>
              <div>
                <label>Phone Number</label>
                <input type="number" className="form-control" />
              </div>
              <div>
                <label>Gender</label>
                <input type="text" className="form-control" />
              </div>
              <div>
                <label>Date of Birth</label>
                <input type="date" className="form-control" />
              </div>
              <div>
                <label>Address</label>
                <input type="text" className="form-control" />
              </div>
              <div
                className="text-center"
                style={{ width: "100%", marginTop: "50px" }}
              >
                <button
                  className="btn btn-success"
                  style={{ width: "20%", marginRight: "5px" }}
                >
                  Cancel
                </button>
                <button className="btn btn-success" style={{ width: "20%" }}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}
