import React from 'react'
import star from '../Images/starboy.png'

export const NewRegistration = () => {
  return (
    <div className='row '>
        <div className="col-11 col-sm-11 col-md-7 bg-light m-3" style={{borderRadius: "15px"}}>
            <h5 style={{fontFamily: 'Poppins'}}>Recent Registrations</h5>
            <table className='table table-striped table-hover' style={{fontSize: "60%"}}>
                <thead>
                    <tr>
                        <th>Ticket no</th>
                        <th>Program Name</th>
                        <th>Date </th>
                        <th>Total Registrations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Adams457896</td>
                        <td>Summer Camp</td>
                        <td>09 Dec, 2020</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>Adams457896</td>
                        <td>Summer Camp</td>
                        <td>09 Dec, 2020</td>
                        <td>300</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-11 col-md-4 cols-md-12 bg-light m-3" style={{borderRadius: "15px"}}>
        <h5 style={{fontFamily: 'Poppins'}}>Top Programmes</h5>
           <div className='d-inline-flex p-2' style={{borderBottom: '1px solid',marginLeft: "25px"}}>
           <span className=''>
                <img src={star} alt="" width="50px" style={{marginRight: "20px"}}/>
            </span>
            <div className="row">
                <span style={{marginBottom: "-5px"}}>Summer Camp</span>
                <span className='d-inline-flex p-2' style={{color: "green", fontSize: "10px", marginTop: "-6px", marginLeft: "3px"}}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                </span>
                <span style={{marginTop: "-10px"}}>200+</span>
            </div>
           </div>
           <div className='d-inline-flex p-2' style={{borderBottom: '-10px solid', marginLeft: "25px"}}>
           <span className=''>
                <img src={star} alt="" width="50px" style={{marginRight: "20px"}}/>
            </span>
            <div className="row">
                <span style={{marginBottom: "-5px"}}>Summer Camp</span>
                <span className='d-inline-flex p-2' style={{color: "green", fontSize: "10px", marginTop: "-6px", marginLeft:"3px"}}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                </span>
                <span style={{marginTop: "-10px"}}>200+</span>
            </div>
           </div>
        </div>
    </div>
  )
}
