import React from 'react'
import { meet } from './constant'
import EventDropdown from './EventDropdown'
import { useState } from 'react'

function EventList() {

const[listOfUsers,setListOfUsers] = useState(meet.meetups)

const filterOnline=()=>{
const onlineEvent =  listOfUsers.filter((x)=>
    x.eventType === "online"
)
console.log(onlineEvent)
setListOfUsers(onlineEvent);
}

  return (
    <>
   
    <h3 style={{textAlign:"center"}}>EventList</h3>
    <div style={{display:"flex", justifyContent:"flex-end"}} width={500}>
    <EventDropdown filterOnline={filterOnline}/>
    </div>
   
    <ul style={{display:"flex", flexDirection:"row" , flexWrap:"wrap"}}>
    {listOfUsers.map((x) => (
      // console.log(x)
      <li key={x.id} style={{listStyleType:"none", margin:"2rem" , border:"1px solid black", padding:"5px",flexWrap:"wrap",justifyContent:"space-between"}}>
        
        <img src={x.eventThumbnail} alt={x.title} height={200} width={500}/>
        <h3 style={{textAlign:"center"}}>{x.title}</h3>
        <div>EventType : {x.eventType}</div>
        <div>Time : {x.eventStartTime}</div>
        
      </li>
    ))}
  </ul>
  </>
  )
}

export default EventList