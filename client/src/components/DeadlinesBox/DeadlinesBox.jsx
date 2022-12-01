import React from 'react'
import './DeadlinesBox.css';
import variables from '../../utils/variables';
import DeadlineBoxItem from '../DeadlineBoxItem/DeadlineBoxItem';
const DeadlinesBox = () => {
  return (
    <div id="deadlines-box">
      <div style={{"padding":"15px 15px", "color":variables.text_color, "fontWeight":variables.font_weight_normal, "fontSize":variables.nav_elements_font_size}}>
        Deadlines
      </div>
      <DeadlineBoxItem/>
      <DeadlineBoxItem/>
      <DeadlineBoxItem/>
      <DeadlineBoxItem/>
    </div>
  )
}

export default DeadlinesBox