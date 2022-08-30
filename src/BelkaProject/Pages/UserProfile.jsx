import React from "react";
import Sidebar from "../Components/SideNav";
import { CDBIcon } from "cdbreact";
import {Link} from "react-router-dom"


export default function UserProfile() {
  return (
    <>
      <Sidebar />
      <div className="container-fluid" style={{ backgroundColor: "#f1f1f2", height: "100vh" }}>
        <div className="d-flex ">
          <div className="me-auto p-2">
            <h3 style={{ fontFamily: "Poppins" }}>User Profile</h3>
          </div>
          <div className="p-2 m-3">
            <span className="d-inline-flex p-2">
              <CDBIcon
                icon="comment-alt"
                style={{ margin: "0 10px 0 10px" }}
              />
              <CDBIcon
                icon="envelope"
                style={{margin: "0 10px 0 10px" }}
              />
              <CDBIcon
                icon="trash"
                style={{  margin: "0 10px 0 10px" }}
              />
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 p-3" style={{ textAlign: "center" }}>
            <img
              src="https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172455/2B8_5801.jpg"
              alt=""
              width="40%"
              style={{ borderRadius: "200px" }}
            />
            <h4 style={{ color: "#028B2E" }}>John Mary</h4>
            <hr style={{border:"2px solid"}}/>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontWeight: "bold" }}>Further Information</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="8"
                className="form-control bg-light"
                value="I cannot swim, I am also afraid of the dark, I love dancing, I love crafting and I love music."
                disabled
              />
            </div>
          </div>
          <div className="col-12 col-md-6 mb-2">
            <span className="d-flex flex-row-reverse" style={{ fontWeight: "bold" }}>
              Registered on the 09 December, 2022
            </span>
            <div style={{ backgroundColor: "#e7eef0", borderRadius: "10px" }}>
              <div className="row p-3">
                <span style={{ fontWeight: "bold", marginBottom: "10px" }}>
                  User Info
                </span>
                <div className="col">
                  <div className="row" style={{ borderTop: "solid 1px" }}>
                    <span className="d-inline-flex p-2">
                      <CDBIcon icon="envelope" style={{ marginRight: "5px" }} />
                      <span>johnmary7@gmail.com</span>
                    </span>
                    <span className="d-inline-flex p-2">
                      <CDBIcon icon="phone" style={{ marginRight: "5px" }} />
                      <span>+333-39393-3939</span>
                    </span>
                    <span className="d-inline-flex p-2">
                      <CDBIcon icon="user" style={{ marginRight: "5px" }} />
                      <span>Male</span>
                    </span>
                    <span className="d-inline-flex p-2">
                      <CDBIcon icon="book" style={{ marginRight: "5px" }} />
                      <span>D.O.B: 12-12-2000</span>
                    </span>
                    <span className="d-inline-flex p-2">
                      <CDBIcon
                        icon="map-marker"
                        style={{ marginRight: "5px" }}
                      />
                      <span>No. 3 Afiikpo Diobu PortHarcourt</span>
                    </span>
                  </div>
                </div>
                <div
                  className="col"
                  style={{ borderTop: "solid 1px", borderLeft: "solid 1px" }}
                >
                  <div className="row">
                    <span className="d-inline-flex p-2">
                      <span style={{ color: "#028B2E", marginRight: "3px" }}>
                        Level of Educations:{" "}
                      </span>
                      <span>High School</span>
                    </span>
                    <span className="d-inline-flex p-2">
                      <span style={{ color: "#028B2E", marginRight: "3px" }}>
                        Blood Group:{" "}
                      </span>
                      <span>A+</span>
                    </span>
                    <span className="d-inline-flex p-2">
                      <span style={{ color: "#028B2E", marginRight: "3px" }}>
                        Programme:{" "}
                      </span>
                      <span>Summer Camp</span>
                    </span>
                    <span className="d-inline-flex p-2">
                      <span style={{ color: "#028B2E", marginRight: "3px" }}>
                        Allegies:{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col p-2"
              style={{
                backgroundColor: "#e7eef0",
                border: "2px solid",
                marginTop: "10px",
                borderColor: "green",
              }}
            >
              
              <span style={{marginTop: "10px", fontWeight: "bold", marginBottom: "0"}}>Performace</span>
              <hr style={{border:"2px solid", marginTop:"0"}}/>
              <div className="row">
                <div className="col">
                <div className="rol mb-2">
                  <div className="d-flex p-2" style={{backgroundColor: "#e7fff5", color: "skyblue", width:"100%"}}> 
                    <span className="me-auto" style={{marginRight: "3px"}}>Upcomming Programmes</span>
                    <CDBIcon icon="play" style={{marginTop: "5px"}}/>
                  </div>
                </div>
                <div className="rol mb-2">
                 <Link to="/programsattended" style={{textDecoration: "none"}}> <div className="d-flex p-2" style={{backgroundColor: "#e7fff5", color: "lightgreen", width:"100%"}}> 
                    <span className="me-auto" style={{marginRight: "3px"}}>Programmes Attended</span>
                    <CDBIcon icon="play" style={{marginTop: "5px"}}/>
                  </div>
                </Link>
                </div>
                <div className="rol mb-2">
                  <div className="d-flex p-2" style={{backgroundColor: "#e7fff5", color: "pink", width:"100%"}}> 
                    <span className="me-auto" style={{marginRight: "3px"}}>Programmes Missed</span>
                    <CDBIcon icon="play" style={{marginTop: "5px"}}/>
                  </div>
                </div>
                <div className="rol mb-2">
                  <div className="d-flex p-2" style={{backgroundColor: "#e7fff5", width:"100%"}}> 
                    <span className="me-auto" style={{marginRight: "3px"}}>File/Report/Images</span>
                    <CDBIcon icon="play" style={{marginTop: "5px"}}/>
                  </div>
                </div>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
