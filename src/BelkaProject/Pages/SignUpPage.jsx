import React from "react";
import Navbar from "../Components/Navbar";
import facebooklogo from "../Images/facebooklogo.png";
import googlelogo from "../Images/googlelogo.png";
import star from "../Images/starboy.png";
import { Link } from "react-router-dom";
import { CDBInput, CDBContainer, CDBIcon } from "cdbreact";

export default function SignUpPage() {
  return (
    <body className="signUP__body">
      <div className="row">
        <div className="col-12 col-md-6">
          <Navbar />
          <div className="signup-heading" style={{ marginTop: "4%" }}>
            <h5>Sign Up for Belka Admin</h5>
            <span>
              Have an account?{" "}
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#028B2E" }}
              >
                Login to your account
              </Link>
            </span>
          </div>

          <form className="signup-form" style={{ marginTop: "3%" }}>
            <div className="col-12 col-md-8 col-lg-8">
              <CDBContainer>
                <CDBInput
                  placeholder="Fullname"
                  icon={<CDBIcon icon="user" />}
                />
                <CDBInput
                  placeholder="Email"
                  type="email"
                  icon={<CDBIcon icon="envelope" />}
                />
                <CDBInput
                  placeholder="Password"
                  type="password"
                  icon={<CDBIcon icon="key" />}
                />
                <CDBInput
                  placeholder="Confirm Password"
                  type="password"
                  icon={<CDBIcon icon="key" />}
                />
              </CDBContainer>

              <br />
              <center>
                <button
                  type="button"
                  className="btn btn-success"
                  style={{ width: "60%" }}
                >
                  SIGN UP
                </button>
              </center>
              <br />
              <center>
                <input class="form-check-input" type="checkbox" value="" />
                <label htmlFor="">Remember Me</label>
                <div>
                  <div className="or_line">
                    <hr className="line" />
                    <p
                      className="hr_p"
                      style={{
                        color: "#000",
                        paddingLeft: "10%",
                        paddingRight: "10%",
                      }}
                    >
                      OR
                    </p>
                    <hr className="line" />
                  </div>
                  <div className="row">
                    <div className="col">
                      <div
                        className="col d-flex justify-content-around p-2 mb-2 bg-body rounded"
                        style={{
                          cursor: "pointer",
                          border: "solid 1px",
                          width: "80%",
                        }}
                      >
                        <img
                          src={facebooklogo}
                          width="30px"
                          height="30px"
                          alt=""
                        ></img>
                        <p style={{ color: "#000", fontSize: "80%" }}>
                          SignUp with Facebook
                        </p>
                      </div>
                      <div
                        className="col d-flex justify-content-around  p-2 mb-4 bg-body rounded"
                        style={{
                          cursor: "pointer",
                          border: "solid 1px",
                          width: "80%",
                        }}
                      >
                        <img src={googlelogo} alt="" width="30px" height="30px"></img>
                        <p style={{ color: "#000", fontSize: "80%" }}>
                          SignUp with Google
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </center>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6">
          <img src={star} alt=""className="col-12 col-md-6 col-lg-6" style={{ marginTop: "30%" }} />
        </div>
      </div>
    </body>
  );
}
