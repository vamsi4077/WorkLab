import React from 'react'
import './MenuSidebarItem.css';

const MenuSidebarItem = (props) => {  
  let id;
  if(props.selected){
    id = "menu-sidebar-item-div-active";
  }else{
    id = "menu-sidebar-item-div-notactive";
  }
  return (
      <div id={id}>{props.icon}&nbsp;&nbsp;{props.label}</div>  
  )
}

export default MenuSidebarItem;