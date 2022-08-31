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
import Schedule from "./BelkaProject/Pages/Schedule";
import EventList from "./BelkaProject/Pages/EventList";
import CreateSchedule from "./BelkaProject/Pages/CreateSchedule";
import AdminProfile from "./BelkaProject/Pages/AdminProfile";
import EdithAdminProfile from "./BelkaProject/Pages/EdithAdminProfile";
import MyTeam from "./BelkaProject/Pages/MyTeam";
import FIlemanager from "./BelkaProject/Pages/FIlemanager";
import AcademicClassAssignment from "./BelkaProject/Pages/AcademicClassAssignment";
import HighSchoolAssistance from "./BelkaProject/Pages/HighSchoolAssistance";

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
          <Route path="/schedules" element={<Schedule />}></Route>
          <Route path="/registrations" element={<Registerations />}></Route>
          <Route path="/createschedule" element={<CreateSchedule />}></Route>
          <Route path="/scheduleeventlist" element={<EventList />}></Route>
          <Route path="/adminprofile" element={<AdminProfile />}></Route>
          <Route path="/myteam" element={<MyTeam />}></Route>
          <Route path="/filemanager" element={<FIlemanager />}></Route>
          <Route
            path="/highschoolassistance"
            element={<HighSchoolAssistance />}
          ></Route>
          <Route
            path="/academincclassassignment"
            element={<AcademicClassAssignment />}
          ></Route>
          <Route
            path="/editadminprofile"
            element={<EdithAdminProfile />}
          ></Route>
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
