import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBBadge,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import "../../App.css"

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position:"absolute"}}>
      <CDBSidebar textColor="#333" backgroundColor="#ffff" style={{position: "fixed"}}>
        <CDBSidebarHeader prefix={<i style={{color: "#028B2E"}} className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color:  "#028B2E" , fontWeight: "bold", fontSize: "120%"}}>
          BELKA Admin
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" >
          <CDBSidebarMenu>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
               <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/userlists" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="table">List of Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/schedules" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="clock">Schedule/Program</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/chats" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="comment-alt" suffix={<CDBBadge color='danger' borderType="pill"><span style={{color: "#fff", fontWeight: "bold"}}>7</span></CDBBadge>}>Chats</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/registrations" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="pen">Registrations</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/filemanager" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="file">File Manager</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>

          <CDBSidebarMenu>
            <NavLink exact to="/adminprofile">
            <CDBSidebarMenuItem icon="user"  ClassName= "activeClicked">Admin Name</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            <CDBSidebarMenuItem style={{color: "red"}} icon="wrench">Logout</CDBSidebarMenuItem>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;