import React from 'react'
import Sidebar from '../Components/SideNav'
import { CDBIcon, CDBInput } from 'cdbreact'

export default function MyTeam() {
  return (
    <>
    <Sidebar/>
    <body className='container-fluid'>
    <div className="d-flex " style={{marginBottom: "2%"}}>
            <div className="me-auto p-2">
              <h3 style={{fontFamily: 'Poppins'}}>Admin Profile</h3>
            </div>
            
            <div className="p-2">
              <button className="btn btn-success" type='button'>
                    <span style={{marginRight: "15px"}}>My Team</span>
                    <CDBIcon icon="play" style={{ marginTop: "5px", rotate: "90deg" }} />
              </button>
            </div>
          </div>
          <div class="d-flex flex-row-reverse">
            <input type="search" className='form-control' placeholder='Search' style={{width: "40%", backgroundColor: "#edf5f8"}}/>
        </div>
        <table
              className="table  table-borderless"
              style={{ color: "#484848", fontSize: "80%" }}
            >
              <thead style={{ color: "#484848"}}>
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
                <tr>
                    <td><span className="d-inline-flex">
                      <img
                        src="https://th.bing.com/th/id/R.d268b238932809e18b85a7820184220f?rik=ahExR0U%2fu2zHyQ&riu=http%3a%2f%2ficon-library.com%2fimages%2fno-profile-picture-icon%2fno-profile-picture-icon-2.jpg&ehk=4X8pLfMkepeJcdTMZ8L033nQ2hfH0gJN3qGTpg62g00%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                        width="20px"
                        style={{ borderRadius: "10px", marginRight: "5px" }}
                      />
                      <span>John Mary</span>
                    </span></td>
                    <td>johnmary7@gmail.com</td>
                    <td>+33757005467</td>
                    <td><CDBIcon icon="envelope" style={{color: "#6dd0f7"}}/></td>
                    <td><CDBIcon icon="comment-alt" style={{color: "#6dd0f7"}}/></td>
                </tr>
              </tbody>
            </table>
    </body>
    
    </>
  )
}
