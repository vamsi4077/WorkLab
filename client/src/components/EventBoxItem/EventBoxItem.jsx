import React from 'react'
import './EventBoxItem.css';
import variables from '../../utils/variables.js';
const EventBoxItem = () => {
  return (
    <div id="event-box-item-div">
        <div id="event-box-item-event-div">
            <div style={{"fontSize":"14", "fontWeight":variables.font_weight_bold, "color":"#C4C7C7"}}>
                Prototyping Workshop
            </div>
            <div style={{"fontSize":"11", "fontWeight":"400", "color":"#FAFDFD"}}>
                Micheal Forbes, Adobe UX Lead
            </div>
        </div>
        <div id="event-box-item-date-div">
            5th Dec 2022
        </div>
    </div>
  )
}

export default EventBoxItem