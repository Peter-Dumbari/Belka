import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import {CDBInput , CDBIcon} from "cdbreact";


export default function ForgetPassword() {
  return (
    <body className="signUP__body">
      <div className="row">
        <div className="col-12 col-md-5 forgotpassordheading">
          <Navbar />
          <br />
          <h5>Forgot your password?</h5>
          <h6>
            Enter the email associated with your account and we will send an
            instruction to reset your password.
          </h6>
          <br />
          <CDBInput type="email" placeholder="Your Email" icon={<CDBIcon icon="envelope" style={{marginBottom:"15px"}}/>}
          />
          <br />

          <center>
            <button
              className="btn btn-success"
              style={{ width: "50%",}}
            >
              SUBMIT
            </button>
          </center>
          <center style={{marginBottom: "10%"}}>
            <span>
              Back to{" "}
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "green" }}
              >
                Login?
              </Link>
            </span>
          </center>
        </div>
        <div className="col-12 col-md-7 p-7">
          <div class="row justify-content-start">
            <div class="col-4 mb-3">
              <img
                src="https://th.bing.com/th/id/R.68f0e50ba88bbd81ba0f753aa7079e08?rik=kXiqJXxBrxePqw&riu=http%3a%2f%2fwww.gettingsmart.com%2fwp-content%2fuploads%2f2017%2f02%2fDiverse-students-using-digital-content-on-their-tablets-in-a-library-Feature-Image.jpg&ehk=oRSdwW60Gdw8iJ1wBoP466nMXG7xYH6ZV0cBbXdNKPA%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                width="150%"
                style={{ borderRadius: "10%" }}
              />
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-4 mb-3">
              <img
                src="https://th.bing.com/th/id/R.92805b56d6adc5c33136f8204a5dde00?rik=CwxB9ouupSAqAQ&pid=ImgRaw&r=0"
                alt=""
                width="150%"
                style={{ borderRadius: "10%" }}
              />
            </div>
          </div>
          <div class="row justify-content-start">
            <div class="col-4 mb-3">
              <img
                src="https://th.bing.com/th/id/R.f635a1e91ed419316eabc75a17c49bfc?rik=mXynZnNMHmSUmg&pid=ImgRaw&r=0"
                alt=""
                width="150%"
                style={{ borderRadius: "10%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
