import React from "react";
import "./MoniteringPrograme.css";
import Sidebar from "../../Components/SideNav";

export default function MoniteringPrograme() {
  return (
    <>
      <Sidebar />
      <body className="container-fluid">
        <div className="pt-3" style={{ color: "#484848", fontWeight: "bold" }}>
          <h5>File Manager</h5>
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
          <button className="btn btn-success" style={{ fontWeight: "bold" }}>
            Mentoring Programs Reports
          </button>
        </div>
        <form>
          <div className="row mt-3">
            <div className="col-sm-1 col-md-1 col-lg-1">
              <h6>Title</h6>
            </div>
            <div className="col-sm-12 col-md-10 col-lg-8">
              <input
                type="text"
                className="form-control"
                placeholder="my Mentoring Experience"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-2 col-md-2 col-lg-1">
              <h6>Start Time</h6>
            </div>
            <div className="col-12 col-md-10 col-lg-2">
              <input type="time" className="form-control" />
            </div>
            <div className="col-sm-3 col-md-2 col-lg-1 offset-lg-1">
              <h6>End Time</h6>
            </div>
            <div className="col-12 col-md-10 col-lg-2">
              <input type="time" className="form-control" />
            </div>
            <div className="col-sm-3 col-md-2 col-lg-1 offset-lg-1">
              <h6>Date</h6>
            </div>
            <div className="col-12 col-md-10 col-lg-3">
              <input type="date" className="form-control" />
            </div>
          </div>
          <textarea name="" id="" cols="30" rows="15" className="form-control mt-3" disabled value="Hello this a testing note, never mind the meaning"/>
            <div className="text-center mt-3">
            <button type="button" className="btn btn-success col-7 col-md-5 col-lg-4 mb-3" >Download</button>
            </div>
        </form>
      </body>
    </>
  );
}
