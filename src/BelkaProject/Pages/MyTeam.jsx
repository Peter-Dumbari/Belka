import React, { useState } from "react";
import Sidebar from "../Components/SideNav";
import { CDBIcon, CDBInput } from "cdbreact";

export default function MyTeam() {
  const Myteam = [
    {
      id: 0,
      name: "Peter Dumbari",
      email: "dummytwiz@gmail.com",
      phonenumber: "+234-804838282828",
    },
    {
      id: 1,
      name: "Peter Kinanee",
      email: "dummytwiz@gmail.com",
      phonenumber: "+234-804838282828",
    },
    {
      id: 2,
      name: "Peter Dumtee",
      email: "dummytwiz@gmail.com",
      phonenumber: "+234-804838282828",
    },
    {
      id: 3,
      name: "Peter Pitalazkid",
      email: "dummytwiz@gmail.com",
      phonenumber: "+234-804838282828",
    },
    {
      id: 4,
      name: "Peter Lazk",
      email: "dummytwiz@gmail.com",
      phonenumber: "+234-804838282828",
    },
    {
      id: 5,
      name: "Lazk Lazk",
      email: "dummytwiz@gmail.com",
      phonenumber: "+234-804838282828",
    },
    {
      id: 6,
      name: "Peloo Lazk",
      email: "dummytwiz@gmail.com",
      phonenumber: "+234-804838282828",
    },
  ];

  const [item, setItem] = useState("");
  const [itemStore, setItemStore] = useState(Myteam);
  const [itemFilter, setItemFilter] = useState([]);
  const HandleSearch = (e) => {
    if (e.target.value !== "") {
      setItem(e.target.value);
      const searchTeam = itemStore.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k])
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase())
        )
      );
      setItemFilter([...searchTeam]);
    } else {
      setItem(e.target.value);
      setItemStore([...itemStore]);
    }
  };

  return (
    <>
      <Sidebar />
      <body className="container-fluid myteam_container">
        <div className="d-flex " style={{ marginBottom: "2%" }}>
          <div className="me-auto p-2 myteam-header">
            <h3 style={{ fontFamily: "Poppins" }}>Admin Profile</h3>
          </div>

          <div className="p-2">
            <button className="btn btn-success myteam-name-displaying-buton" type="button">
              <span style={{ marginRight: "15px" }}>My Team</span>
              <CDBIcon
                icon="play"
                style={{ marginTop: "5px", rotate: "90deg" }}
              />
            </button>
          </div>
        </div>
        <div class="d-flex flex-row-reverse">
          <input
            type="search"
            className="form-control search-input-container"
            placeholder="Search"
            onChange={HandleSearch}
            value={item}
            style={{ width: "40%", backgroundColor: "#edf5f8" }}
          />
        </div>
        <div className="table-responsive">
        <table className="table  table-borderless" style={{ color: "#484848" }}>
          <thead style={{ color: "#484848" }}>
            <tr>
              <th>
                <div className="d-line-flex">
                  Name{" "}
                  <CDBIcon
                    icon="play"
                    style={{ rotate: " 90deg", fontSize: "10px" }}
                  />
                </div>
              </th>
              <th>
                <div className="d-line-flex">
                  Email{" "}
                  <CDBIcon
                    icon="play"
                    style={{ rotate: " 90deg", fontSize: "10px" }}
                  />
                </div>
              </th>
              <th>
                <div className="d-line-flex">
                  Phone Number{" "}
                  <CDBIcon
                    icon="play"
                    style={{ rotate: " 90deg", fontSize: "10px" }}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {item.length > 0
              ? itemFilter.map((users) => {
                  return (
                    <tr key={users.id}>
                      <td>
                        <span className="d-inline-flex">
                          <img
                            src="https://th.bing.com/th/id/R.d268b238932809e18b85a7820184220f?rik=ahExR0U%2fu2zHyQ&riu=http%3a%2f%2ficon-library.com%2fimages%2fno-profile-picture-icon%2fno-profile-picture-icon-2.jpg&ehk=4X8pLfMkepeJcdTMZ8L033nQ2hfH0gJN3qGTpg62g00%3d&risl=&pid=ImgRaw&r=0"
                            alt=""
                            width="20px"
                            style={{ borderRadius: "10px", marginRight: "5px" }}
                          />
                          <span>{users.name}</span>
                        </span>
                      </td>
                      <td>{users.email}</td>
                      <td>{users.phonenumber}</td>
                      <td>
                        <CDBIcon icon="envelope" style={{ color: "#6dd0f7" }} />
                      </td>
                      <td>
                        <CDBIcon
                          icon="comment-alt"
                          style={{ color: "#6dd0f7" }}
                        />
                      </td>
                    </tr>
                  );
                })
              : itemStore.map((users) => {
                  return (
                    <tr key={users.id}>
                      <td>
                        <span className="d-inline-flex">
                          <img
                            src="https://th.bing.com/th/id/R.d268b238932809e18b85a7820184220f?rik=ahExR0U%2fu2zHyQ&riu=http%3a%2f%2ficon-library.com%2fimages%2fno-profile-picture-icon%2fno-profile-picture-icon-2.jpg&ehk=4X8pLfMkepeJcdTMZ8L033nQ2hfH0gJN3qGTpg62g00%3d&risl=&pid=ImgRaw&r=0"
                            alt=""
                            width="20px"
                            style={{ borderRadius: "10px", marginRight: "5px" }}
                          />
                          <span>{users.name}</span>
                        </span>
                      </td>
                      <td>{users.email}</td>
                      <td>{users.phonenumber}</td>
                      <td>
                        <CDBIcon icon="envelope" style={{ color: "#6dd0f7" }} />
                      </td>
                      <td>
                        <CDBIcon
                          icon="comment-alt"
                          style={{ color: "#6dd0f7" }}
                        />
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
