import React, { useState } from 'react';
import './MenuSidebar.css';
import MenuSidebarItem from '../MenuSidebarItem/MenuSidebarItem';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';

const MenuSidebar = () => {
  const [activeItem, setActiveItem] = useState([true, false, false, false, false]);
  const setFirst = (e) => {
    let arr = [true, false, false, false, false];
    setActiveItem(arr);
  }
  const setSecond = (e) =>{
    let arr = [false, true, false, false, false];
    setActiveItem(arr);
  }
  const setThird = (e) =>{
    let arr = [false, false, true, false, false];
    setActiveItem(arr);
  }
  const setFourth = (e) =>{
    let arr = [false, false, false, true, false];
    setActiveItem(arr);
  }
  const setFifth = (e) =>{
    let arr = [false, false, false, false, true];
    setActiveItem(arr);
  }
  return (
    <div id="menu-sidebar-div">
        <div onClick={setFirst}><Link style={{"textDecoration":"none"}} to = "/"><MenuSidebarItem label="For you" icon={<DynamicFeedIcon/>} selected={activeItem[0]}/></Link></div>
        <div onClick={setSecond}><Link style={{"textDecoration":"none"}} to = "/profile"><MenuSidebarItem label="Profile" icon={<PersonOutlineIcon/>} selected={activeItem[1]}/></Link></div>
        <div onClick={setThird}><Link style={{"textDecoration":"none"}} to = "/projects"><MenuSidebarItem label="Projects" icon={<Diversity3Icon/>} selected={activeItem[2]}/></Link></div>
        <div onClick={setFourth}><Link style={{"textDecoration":"none"}} to = "/chatbox"><MenuSidebarItem label="Chatbox" icon={<MarkUnreadChatAltIcon/>} selected={activeItem[3]}/></Link></div>
        <div onClick={setFifth}><Link style={{"textDecoration":"none"}} to = "/schedule"><MenuSidebarItem label="Schedule" icon={<CalendarMonthIcon/>} selected={activeItem[4]}/></Link></div>
    </div>
  )
}

export default MenuSidebar;