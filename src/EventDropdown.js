import React, { useState } from 'react';

function EventDropdown({filterOnline}) {
  const [selectedValue, setSelectedValue] = useState('both');

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
    if(event.target.value ==="Online"){
        filterOnline();
    }
  };

  return (
    <select value={selectedValue} onChange={handleDropdownChange} style={{width:"500px",height:"50px" ,textAlign:"center"}}>
      <option value="online" >Online</option>
      <option value="offline">Offline</option>
      <option value="both">Both</option>
    </select>
  );
}

export default EventDropdown;
