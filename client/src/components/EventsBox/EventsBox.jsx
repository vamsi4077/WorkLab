import React from 'react'
import variables from '../../utils/variables';
import EventBoxItem from '../EventBoxItem/EventBoxItem';
import './EventsBox.css';
const EventsBox = () => {
  return (
    <div id="events-box">
      <div style={{"padding":"15px 15px", "color":variables.text_color, "fontWeight":variables.font_weight_normal, "fontSize":variables.nav_elements_font_size}}>
        Events
      </div>
      <EventBoxItem/>
      <EventBoxItem/>
      <EventBoxItem/>
      <EventBoxItem/>
    </div>
  )
}

export default EventsBox