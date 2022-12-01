import React from 'react';
import './DeadlineBoxItem.css';
import variables from '../../utils/variables.js';
const DeadlineBoxItem = () => {
  return (
    <div id="deadline-box-item-div">
        <div id="deadline-box-item-deadline-div">
            <div style={{"fontSize":"14", "fontWeight":variables.font_weight_bold, "color":"#C4C7C7"}}>
                Prototyping Workshop
            </div>
            <div style={{"fontSize":"11", "fontWeight":"400", "color":"#FAFDFD"}}>
                Micheal Forbes, Adobe UX Lead
            </div>
        </div>
        <div id="deadline-box-item-date-div">
            5th Dec 2022
        </div>
    </div>
  )
}

export default DeadlineBoxItem