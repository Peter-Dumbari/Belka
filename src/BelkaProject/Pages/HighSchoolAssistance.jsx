import { CDBIcon, CDBInput } from "cdbreact";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Components/SideNav";

export default function HighSchoolAssistance() {
  const schoolsAssistance = [
    {
      id: 0,
      username: "Peter Dumbari",
      Filesize: "5mb",
      lastmodified: "2nd Oct 2001",
    },
    {
      id: 1,
      username: "Peter Kin",
      Filesize: "5mb",
      lastmodified: "3rd Oct 2001",
    },
    {
      id: 2,
      username: "Peter Love",
      Filesize: "5mb",
      lastmodified: "4th Oct 2001",
    },
    {
      id: 3,
      username: "Peter Lazk",
      Filesize: "5mb",
      lastmodified: "5th Oct 2001",
    },
  ];
  const [remove, setRemove] = useState(schoolsAssistance);
  const [messages, setMessages] = useState("");
  const [messsageFilter, setMessageFilter] = useState([]);

  const filterMessage = (e) => {
    if (e.target.value !== "") {
      setMessages(e.target.value);
      const searchMessages = setRemove.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k])
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase())
        )
      );
      setMessageFilter([...searchMessages]);
    } else {
      setMessages(e.target.value);
      setRemove([...remove]);
    }
  };

  const deleteTask = (id) => {
    setRemove(remove.filter((task) => task.id !== id));
  };

  useEffect(()=>{
      if (remove.length === 0){
        window.alert("The Table is empty, reload again!!!")
      }
    
  })

  return (
    <>
      <Sidebar />
      <body className="container-fluid high-school-assistance-container">
        <div className="d-flex " style={{ marginBottom: "2%" }}>
          <div className="me-auto p-2  highschoolassistance-header">
            <h3 style={{ fontFamily: "Poppins" }}>File Manager</h3>
          </div>
          <div className="p-2">
            <button className="btn btn-success high-school-assignment-button">High School Assignment</button>
          </div>
        </div>
        <div className="d-flex " style={{ marginBottom: "2%" }}>
          <div className="me-auto p-2 highschoolassistance">
            <div className="d-inline-flex">
              <button
                className="btn btn-success highschoolassignment-button"
                style={{ marginRight: "8px" }}
              >
                10-06-2021 <CDBIcon icon="play" style={{ rotate: "90deg" }} />{" "}
              </button>
              <button className="btn btn-success highschoolassignment-button">
                10-06-2021 <CDBIcon icon="play" style={{ rotate: "90deg" }} />
              </button>
            </div>
          </div>
          <div style={{ width: "50%" }}>
          
            <CDBInput
              type="search"
              placeholder="Search File"
              icon={
                <CDBIcon
                  icon="search"
                  style={{ marginBottom: "12px" }}
                />
              }
              value={messages}
              onChange={filterMessage}
            />
          </div>
        </div>
        <div className="table-responsive">
          
        <table className="table  table-hover" style={{ color: "#484848" }}>
          <thead style={{ color: "#484848" }}>
            <tr>
              <th>
                <div className="d-line-flex">
                  User Name
                  <CDBIcon
                    icon="play"
                    style={{ rotate: " 90deg", fontSize: "10px" }}
                  />
                </div>
              </th>
              <th>
                <div className="d-line-flex">
                  File Size
                  <CDBIcon
                    icon="play"
                    style={{ rotate: " 90deg", fontSize: "10px" }}
                  />
                </div>
              </th>
              <th>
                <div className="d-line-flex">
                  Last Modified
                  <CDBIcon
                    icon="play"
                    style={{ rotate: " 90deg", fontSize: "10px" }}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {messages.length > 0
              ? messsageFilter.map((names) => {
                  return (
                    <tr key={names.id}>
                      <td>{names.username}</td>
                      <td>{names.Filesize}</td>
                      <td>{names.lastmodified}</td>
                      <td>
                        <CDBIcon icon="download" className="downloadIcon" />
                      </td>
                      <td>
                        <button className="butting">View File</button>
                      </td>
                      <td>
                        <button
                          className="deleteButtonHighSchoolAssist"
                          onClick={() => deleteTask(names.id)}
                        >
                          <CDBIcon icon="trash" className="trashcanIcon" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              : remove.map((names) => {
                  return (
                    <tr key={names.id}>
                      <td>{names.username}</td>
                      <td>{names.Filesize}</td>
                      <td>{names.lastmodified}</td>
                      <td>
                        <CDBIcon icon="download" className="downloadIcon" />
                      </td>
                      <td>
                        <button className="butting">View File</button>
                      </td>
                      <td>
                        <button
                          className="deleteButtonHighSchoolAssist"
                          onClick={() => deleteTask(names.id)}
                        >
                          <CDBIcon icon="trash" className="trashcanIcon" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
        </div>
      </body>
    </>
  );
}
