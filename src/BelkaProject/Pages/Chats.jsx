import React from "react";
import Sidebar from "../Components/SideNav";
import { CDBIcon, CDBInput, CDBContainer } from "cdbreact";

export default function Chats() {
  function CallChart() {
    return <div style={{position: "inherit"}}>
      <div className="d-flex mb-3">
          <div className="me-auto p-2">
            <span className="btn btn-outline position-relative" style={{color: "#484848"}}>
              <CDBIcon icon="phone" style={{rotate: "90deg"}}/>
              <span>Calls</span>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">7</span>
            </span>
          </div>
          <div className="p-2" >
          <button type="button" class="btn btn-outline position-relative">
  <CDBIcon icon="comment"/> Chat
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    7
  </span>
</button>
          </div>
        </div>
    </div>;
  }

  function FillExample() {
    const Datas = [
      {
        index: "1",
        Name: "Peter Dumbari",
        lastMessage: "How are you now",
        time: "2 hrs ago",
      },
      {
        index: "2",
        Name: "Gift John",
        lastMessage: "Am coming now",
        time: "1 hrs ago",
      },
      {
        index: "3",
        Name: "Young John",
        lastMessage: "How are guys now",
        time: "3 hrs ago",
      },
      {
        Name: "Barika John",
        lastMessage: "How are guys now",
        time: "3 hrs ago",
      },
    ];

    return (
      <>
        <ul className="nav nav-pills nav-fill" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              All
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              User
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Team
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            {Datas.map((users) => (
              <div
                className="message"
                style={{ marginTop: "10px" }}
                key={users.index}
              >
                <div className="d-flex " style={{ borderTop: "1px solid" }}>
                  <div className="me-auto p-2 mb-2">
                    <div className="row">
                      <div className="col-2">
                        <img
                          src="https://th.bing.com/th/id/R.d268b238932809e18b85a7820184220f?rik=ahExR0U%2fu2zHyQ&riu=http%3a%2f%2ficon-library.com%2fimages%2fno-profile-picture-icon%2fno-profile-picture-icon-2.jpg&ehk=4X8pLfMkepeJcdTMZ8L033nQ2hfH0gJN3qGTpg62g00%3d&risl=&pid=ImgRaw&r=0"
                          alt=""
                          width="30px"
                          className="position-relative"
                          style={{ borderRadius: "10px", marginTop: "7px", backgroundColor: "purple" 
                        }}
                        />
                      </div>
                      <div className="col-10">
                        <span className="row">
                          <span style={{ fontWeight: "500" }}>
                            {users.Name}
                          </span>
                          <span style={{ fontSize: "80%" }}>
                            {users.lastMessage}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2" style={{ width: "25%" }}>
                    <span style={{ fontSize: "65%" }}>{users.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            User
          </div>
          <div
            className="tab-pane fade"
            id="contact-tab-pane"
            role="tabpanel"
            aria-labelledby="contact-tab"
            tabindex="0"
          >
            Team
          </div>
        </div>
      </>
    );
  }

  return (
    <body>
      <Sidebar />
      <div
        className="container-fluid"
        style={{ paddingTop: "20px", backgroundColor: "#f1f1f2" }}
      >
        <h4 style={{ fontWeight: "bold" }}>Chats</h4>
        <div className="row">
          <div className="col-11 col-md-4 mb-3">
            <div className="row">
              <div
                className="p-4"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  marginLeft: "5px",
                }}
              >
                <CDBInput
                  type="search"
                  placeholder="Search"
                  icon={
                    <CDBIcon icon="search" style={{ marginBottom: "7px" }} />
                  }
                  style={{ backgroundColor: "#f1f1f2" }}
                />

                <FillExample />
              </div>
              <div style={{
                  backgroundColor: "rgb(245, 245, 245)",
                  marginLeft: "0px",
                  marginTop: "10px"
                }}>
                <CallChart/>
              </div>
            </div>
            <div>
            </div>
          </div>
          <div
            className="col-11 col-md-7 mb-3"
            style={{
              backgroundColor: "#fff",
              borderRadius: "5px",
              marginLeft: "20px",
            }}
          >
            <div className="d-flex">
              <div className="me-auto p-2">
                <div className="row">
                <div className="d-flex " style={{ borderTop: "1px solid" }}>
                  <div className="me-auto p-2 mb-2">
                    <div className="row">
                      <div className="col-2">
                        <img
                          src="https://th.bing.com/th/id/R.d268b238932809e18b85a7820184220f?rik=ahExR0U%2fu2zHyQ&riu=http%3a%2f%2ficon-library.com%2fimages%2fno-profile-picture-icon