import './navbar.css';
import React from 'react'
import variables from '../../utils/variables';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Search from '../NavbarSearchbar/NavbarSearchbar';

const NavBar = () => {
  return (
        <Navbar expand="lg" fixed="top" style={{"backgroundColor":variables.background_darker, "padding":"0px 50px"}}>
        <Navbar.Brand href="/homepage" style={{"fontWeight":variables.font_weight_bold, "fontSize":variables.nav_brand_font_size, "color":variables.highlihgt_color}}>WorkLab</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Navbar.Text style={{"color":variables.text_color}}><Search/></Navbar.Text>&nbsp;&nbsp;
          <Navbar.Text style={{"color":variables.text_color}}><NotificationsIcon/></Navbar.Text>
          <Navbar.Text style={{"color":variables.text_color}}>&nbsp;&nbsp;&nbsp;<cust style={{"color":"#FAFDFD", "fontWeight":"100"}}>|</cust>&nbsp;&nbsp;&nbsp;</Navbar.Text>
            <NavDropdown title={<span><Navbar.Text style={{"fontWeight":variables.font_weight_semibold, "color":variables.text_color}}>Isaac Newton</Navbar.Text><span style={{"color":variables.highlihgt_color}}>&nbsp;&nbsp;<AccountCircleRoundedIcon/><ArrowDropDownIcon/></span></span>} id="basic-nav-dropdown">
              <div>
              <NavDropdown.Item className="nav-dropdown-item" style={{"color":"white"}} href="#action/3.1">
                <div style={{"display":"flex", "flexDirection":"row", "justifyContent":"left"}}>
                  <div>
                    <PermIdentityIcon style={{"color":variables.text_color}}/>
                  </div>
                <div>Profile</div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item" style={{"color":"white"}} href="#action/3.2">General settings</NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item" style={{"color":"white"}} href="#action/3.3">Privacy and Support</NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item" style={{"color":"white"}} href="#action/3.4">Logout</NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
   
  );
}

export default NavBar