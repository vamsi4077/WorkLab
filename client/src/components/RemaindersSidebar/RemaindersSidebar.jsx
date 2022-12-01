import React from 'react';
import './RemaindersSidebar.css';
import DeadlinesBox from '../DeadlinesBox/DeadlinesBox'
import EventsBox from '../EventsBox/EventsBox'

const RemaindersSidebar = () => {
  return (
    <div id="remainders-sidebar-div">
        <EventsBox/>
        <DeadlinesBox/>
    </div>
  )
}

export default RemaindersSidebar