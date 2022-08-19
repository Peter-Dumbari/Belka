import React from "react";
import Sidebar from "../Components/SideNav";
import {
  CDBPane,
  CDBDropDownItem,
  CDBDropDown,
  CDBDropDownMenu,
  CDBDropDownToggle,
  CDBIcon,
  CDBBox,
  CDBInput,
  CDBContainer,
} from "cdbreact";
import "../../App.css";


export default function UserLists() {
  return (
    <body style={{ backgroundColor: "#f1f1f2", height: "100vh" }}>
      <Sidebar />
      <div className="container-fluid">
        <div className="d-flex mb-3">
          <div className="me-auto p-2">
            <h3>Users List </h3>
          </div>
          <div className="p-2" style={{ width: "30%" }}>
            <CDBContainer>
              <CDBInput
                placeholder="Search User"
                type="search"
                icon={
                  <i
                    style={{ color: "gray" }}
                    className="fa fa-search text-transparent"
                  ></i>
                }
                background=" #028B2E0D"
                style={{ borderRadius: "10px", backgroundColor: "#028B2E0D", }}
              />
            </CDBContainer>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <table className="table table-hover" style={{ color: "#484848" }}>
              <thead>
                <tr style={{ fontSize: "75%" }}>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: "#FFFFFF", borderRadius: "15px", marginBottom: "2%"}}>
                  <td  >
                    <span className="d-inline-flex p-2">
                      <img
                        src="https://th.bing.com/th/id/R.d268b238932809e18b85a7820184220f?rik=ahExR0U%2fu2zHyQ&riu=http%3a%2f%2ficon-library.com%2fimages%2fno-profile-picture-icon%2fno-profile-picture-icon-2.jpg&ehk=4X8pLfMkepeJcdTMZ8L033nQ2hfH0gJN3qGTpg62g00%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                        width="30px"
                        style={{ borderRadius: "10px", marginRight: "5px" }}
                      />
                      <span>John Mary</span>
                    </span>
                  </td>
                  <td>johnmary7@gmail.com</td>
                  <td>+33757005467</td>
                  <td><span style={{backgroundColor: "#e0f1f2", padding:"5px 15px 5px 15px", borderRadius: "10px", color: "#149FC8"}}>Male</span></td>
                  <td style={{ cursor: "pointer", fontWeight: "bold" }}>
                    {
                      <CDBContainer>
                        <CDBBox>
                          <CDBDropDown className="ml-auto">
                            <CDBDropDownToggle color="white">
                              <CDBIcon
                                className="text-muted"
                                fas
                                icon="ellipsis-h"
                                style={{backgroundColor:"transparent"}}
                              />
                            </CDBDropDownToggle>
                            <CDBDropDownMenu className="hi">
                              <CDBDropDownItem><span className="d-inline-flex p-2" style={{backgroundColor: "#e0f1f2", borderRadius: "15px", color: "#149FC8"}}>
                                <CDBIcon icon="pen"></CDBIcon>
                                User Profile
                                </span ></CDBDropDownItem>
                              <CDBDropDownItem>
                              <span className="d-inline-flex p-2" style={{backgroundColor: "#fbedf2", width: "100%", borderRadius: "15px", color: "#EA6354"}}>
                                <CDBIcon icon="trash"></CDBIcon>
                                Delete
                                </span >
                              </CDBDropDownItem>
                            </CDBDropDownMenu>
                          </CDBDropDown>
                        </CDBBox>
                      </CDBContainer>
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </body>
  );
}
