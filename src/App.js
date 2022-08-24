import "./App.css";
import SignUpPage from "./BelkaProject/Pages/SignUpPage";
import LoginPage from "./BelkaProject/Pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nopage from "./BelkaProject/Pages/Nopage";
import ForgetPassword from "./BelkaProject/Pages/ForgetPassword";
import ResetPassword from "./BelkaProject/Pages/ResetPassword";
import Dashboard from "./BelkaProject/Pages/Dashboard";
import UserLists from "./BelkaProject/Pages/UserLists";
import UserProfile from "./BelkaProject/Pages/UserProfile";
import ProgrammesAttended from "./BelkaProject/Pages/ProgrammesAttended";
import Chats from "./BelkaProject/Pages/Chats";
import Registerations from "./BelkaProject/Pages/Registerations";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUpPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/forgetPassord" element={<ForgetPassword />}></Route>
          <Route path="/forgetPassord" element={<ForgetPassword />}></Route>
          <Route path="/resetPassord" element={<ResetPassword />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/userlists" element={<UserLists />}></Route>
          <Route path="/userprofile" element={<UserProfile />}></Route>
          <Route path="/chats" element={<Chats />}></Route>
          <Route path="/registrations" element={<Registerations />}></Route>
          <Route
            path="/programsattended"
            element={<ProgrammesAttended />}
          ></Route>
          <Route path="*" element={<Nopage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
