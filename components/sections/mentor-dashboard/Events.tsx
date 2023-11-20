import MentorEvent from '@/components/card/mentor-event-card'
import { EventData } from '@/utils/data'
import React from 'react'

const Events = () => {
  return (
    <div className='flex justify-between gap-8 items-center flex-wrap'>
      {
        EventData.map((event) => (
          <MentorEvent key={event.id} title={event.title} content={event.content} start={event.start} end={event.end} date={event.date}location={event.location} id={event.id} />
          
        ))
      }
          
    </div>
  )
}

export default Events