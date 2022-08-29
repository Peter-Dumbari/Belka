import React from "react";
import Sidebar from "../Components/SideNav";
import { CDBIcon } from "cdbreact";
import Image from "../Images/Illustration.png";
import { Link } from "react-router-dom";

export default function AdminProfile() {
  return (
    <>
      <Sidebar />
      <body className="container-fluid">
        <div className="mt-2" style={{ color: "#484848", fontWeight: "bold" }}>
          <h5>Admin Profile</h5>
        </div>
        <div
          class="d-flex flex-row-reverse"
          style={{
            color: "#149FC8",
            fontSize: "20px",
            marginTop: "0",
            marginBottom: "0",
          }}
        >
          <div class="p-2">
            <CDBIcon icon="envelope" />
          </div>
          <div class="p-2">
            <CDBIcon icon="comment-alt" />
          </div>
        </div>
        <div className="row" style={{ marginTop: "-10px" }}>
          <div className="col-11 col-md-10 col-lg-3">
            <img
              src="https://th.bing.com/th/id/R.daced5c5d9871280ca8e2de03bf8bee5?rik=sUyBpUyNvR6IqQ&pid=ImgRaw&r=0"
              alt=""
              width="100%"
              style={{ borderRadius: "10px" }}
            />
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

          <div className="col-11 col-md-10 col-lg-7 offset-lg-1 text-center">
            <div className="row">
              <div>
                <img
                  src={Image}
                  alt=""
                  style={{ width: "390px", marginBottom: "10px" }}
                />
              </div>
              <div
                className="p-4 mt-4"
                style={{ backgroundColor: "#f0f6f3", borderRadius: "10px" }}
              >
                <Link
                  to="/editadminprofile"
                  style={{ textDecoration: "none", color: "#484848" }}
                >
                  <div
                    className="d-flex p-2 mb-4"
                    style={{
                      backgroundColor: "#ecf2dd",
                      width: "100%",
                      borderRadius: "5px",
                    }}
                  >
                    <span className="me-auto" style={{ marginRight: "3px" }}>
                      Edith Profile
                    </span>
                    <CDBIcon icon="play" style={{ marginTop: "5px" }} />
                  </div>
                </Link>
                <Link to="/myteam" style={{textDecoration: "none",color: "#484848"}}>
                <div
                  className="d-flex p-2 mb-4"
                  style={{
                    backgroundColor: "#ecf2dd",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                >
                  <span className="me-auto" style={{ marginRight: "3px" }}>
                    My Team
                  </span>
                  <CDBIcon icon="play" style={{ marginTop: "5px" }} />
                </div>
                </Link>
                <div
                  className="d-flex p-2 mb-4"
                  style={{
                    backgroundColor: "#ecf2dd",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                >
                  <span className="me-auto" style={{ marginRight: "3px" }}>
                    All Admins{" "}
                  </span>
                  <CDBIcon icon="play" style={{ marginTop: "5px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
