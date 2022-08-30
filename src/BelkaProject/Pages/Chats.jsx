import React, { useState } from "react";
import Sidebar from "../Components/SideNav";
import { CDBIcon, CDBInput, CDBContainer } from "cdbreact";

export default function Chats() {
  function CallChart() {
    return (
      <div className="sticky-bottom">
        <div className="d-flex mb-3">
          <div className="me-auto p-2">
            <span
              className="btn btn-outline position-relative"
              style={{ color: "#484848" }}
            >
              <CDBIcon icon="phone" style={{ rotate: "90deg" }} />
              <span>Calls</span>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                7
              </span>
            </span>
          </div>
          <div className="p-2">
            <button type="button" class="btn btn-outline position-relative">
              <CDBIcon icon="comment" /> Chat
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                7
              </span>
            </button>
          </div>
        </div>
      </div>
    );
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
    const [messages, setMessages] = useState("");
    const [messageStore, setMessageStore] = useState(Datas);
    const [messsageFilter, setMessageFilter] = useState([]);

    const filterMessage = (e) => {
      if (e.target.value !== "") {
        setMessages(e.target.value);
        const searchMessages = messageStore.filter((o) =>
          Object.keys(o).some((k) =>
            String(o[k])
              .toLocaleLowerCase()
              .includes(e.target.value.toLocaleLowerCase())
          )
        );
        setMessageFilter([...searchMessages]);
      } else {
        setMessages(e.target.value);
        setMessageStore([...messageStore]);
      }
    };
    return (
      <>
        <CDBInput
          type="search"
          placeholder="Search"
          icon={<CDBIcon icon="search" style={{ marginBottom: "7px" }} />}
          style={{ backgroundColor: "#f1f1f2" }}
          value={messages}
          onChange={filterMessage}
        />
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
            {messages.length > 0
              ? messsageFilter.map((users) => (
                  <div
                    className="message"
                    style={{ marginTop: "10px", cursor: "pointer" }}
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
                              style={{
                                borderRadius: "10px",
                                marginTop: "7px",
                                backgroundColor: "purple",
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
                ))
              : messageStore.map((users) => (
                  <div
                    className="message"
                    style={{ marginTop: "10px", cursor: "pointer" }}
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
                              style={{
                                borderRadius: "10px",
                                marginTop: "7px",
                                backgroundColor: "purple",
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
          <div className="col-11 col-md-4 mb-3" style={{ marginLeft: "20px" }}>
            <div className="row">
              <div
                className="p-4"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  marginLeft: "0px",
                }}
              >
                <FillExample />
              </div>
              <div
                style={{
                  backgroundColor: "rgb(245, 245, 245)",
                  marginLeft: "0px",
                  marginTop: "10px",
                }}
              >
                <CallChart />
              </div>
            </div>
            <div></div>
          </div>
          <div
            className="col-11 col-md-7 mb-3"
            style={{
              backgroundColor: "#fff",
              borderRadius: "5px",
              marginLeft: "40px",
            }}
          >
            <div className="d-flex">
              <div className="me-auto p-2">
                <div className="row">
                  <div className="me-auto p-2 mb-2">
                    <div className="row">
                      <div className="col-2">
                        <img
                          src="https://th.bing.com/th/id/R.d268b238932809e18b85a7820184220f?rik=ahExR0U%2fu2zHyQ&riu=http%3a%2f%2ficon-library.com%2fimages%2fno-profile-picture-icon%2fno-profile-picture-icon-2.jpg&ehk=4X8pLfMkepeJcdTMZ8L033nQ2hfH0gJN3qGTpg62g00%3d&risl=&pid=ImgRaw&r=0"
                          alt=""
                          width="30px"
                          className="position-relative"
                          style={{
                            borderRadius: "10px",
                            marginTop: "7px",
                            backgroundColor: "purple",
                          }}
                        />
                      </div>
                      <div className="col-10">
                        <span className="row">
                          <span style={{ fontWeight: "500" }}>Joan Baby</span>
                          <span style={{ fontSize: "80%" }}>Online</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2" style={{ width: "30%" }}>
                <div className="d-inline-flex" style={{ cursor: "pointer" }}>
                  <CDBIcon
                    icon="phone"
                    style={{
                      rotate: "90deg",
                      backgroundColor: "#F7F7F8",
                      padding: "10px",
                      marginRight: "20px",
                      borderRadius: "20px",
                    }}
                  />
                  <CDBIcon
                    icon="video"
                    style={{
                      backgroundColor: "#F7F7F8",
                      padding: "10px",
                      marginRight: "20px",
                      borderRadius: "20px",
                    }}
                  />
                  <CDBIcon
                    icon="ellipsis-h"
                    style={{
                      rotate: "90deg",
                      backgroundColor: "#F7F7F8",
                      padding: "10px",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              {/* sender_column */}
              <div className="col-6">
                <div
                  className="p-3"
                  style={{ backgroundColor: "#CCE089", borderRadius: "10px" }}
                >
                  <span>Hello, How are you today?</span>
                </div>
              </div>
              {/* receiver-column */}
              <div className="col-6"></div>
            </div>

            {/* Chat  input*/}
            <div className="row">
              <div
                className="d-inline-flex mb-3 p-"
                style={{ marginTop: "auto" }}
              >
                <div className="me-auto" style={{ width: "100%" }}>
                  <CDBInput
                    type="text"
                    placeholder="Type a message"
                    icon={
                      <CDBIcon
                        icon="paperclip"
                        style={{ marginBottom: "7px" }}
                      />
                    }
                    style={{ backgroundColor: "#f1f1f2", width: "100%" }}
                  />
                </div>
                <button className="btn btn-outline" style={{ paddingTop: "0" }}>
                  <CDBIcon icon="smile" />
                </button>
                <button className="btn btn-outline" style={{ paddingTop: "0" }}>
                  <CDBIcon icon="paper-plane" style={{ color: "green" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
