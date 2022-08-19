import React from "react";
import facebooklogo from "../Images/facebooklogo.png";
import googlelogo from "../Images/googlelogo.png";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import LoginImage from "../Images/Illustration.png";
import { CDBInput, CDBContainer, CDBIcon } from "cdbreact";
import "./Login.css";

export default function LoginPage() {
  return (
    <body className="signUP__body">
      <div className="row">
        <div className="col-12 col-md-5">
          <Navbar />
          <div style={{ marginTop: "7%" }}>
            <h5>Sign Up for Belka Admin</h5>
            <span>
              Dont have an account?
              <Link to="/" style={{ textDecoration: "none", color: "#028B2E" }}>
                Create your account
              </Link>
            </span>
          </div>

          <form style={{ marginTop: "3%" }}>
            <CDBContainer>
              <CDBInput
                placeholder="Enter Your E-mail"
                icon={<CDBIcon icon="envelope" />}
              />
              <CDBInput
                placeholder="Enter Password"
                icon={<CDBIcon icon="key" />}
              />
            </CDBContainer>
            <br />

            <center>
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <button
                  type="button"
                  className="btn btn-success"
                  style={{ width: "60%" }}
                >
                  LOGIN IN
                </button>
              </Link>
              <center style={{ width: "65%" }}>
                <div class="d-flex mb-3">
                  <div class="me-auto p-2">
                    <input class="form-check-input" type="checkbox" value="" />
                    <label htmlFor="">Remember Me</label>
                  </div>
                  <div class="p-2">
                    <Link
                      to="/forgetPassord"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      Forget Password?
                    </Link>
                  </div>
                </div>

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
                        }}
                      >
                        <img
                          src={facebooklogo}
                          width="30px"
                          height="30px"
                        ></img>
                        <p
                          style={{
                            color: "#000",
                            fontSize: "80%",
                            fontWeight: "bold",
                          }}
                        >
                          SignUp with Facebook
                        </p>
                      </div>
                      <div
                        className="col d-flex justify-content-around  p-2 mb-4 bg-body rounded"
                        style={{
                          cursor: "pointer",
                          border: "solid 1px",
                        }}
                      >
                        <img src={googlelogo} width="30px" height="30px"></img>
                        <p
                          style={{
                            color: "#000",
                            fontSize: "80%",
                            fontWeight: "bold",
                          }}
                        >
                          SignUp with Google
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </center>
            </center>
          </form>
        </div>
        <div className="col-12 col-md-7">
          <img
            src={LoginImage}
            alt=""
            width="70%"
            style={{ marginTop: "10%" }}
          />
        </div>
      </div>
    </body>
  );
}
