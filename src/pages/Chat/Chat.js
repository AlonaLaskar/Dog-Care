
import StyledChat from "./StyledChat";
import MapG  from '../../GoogleMap/MapG';
import React, { useState } from 'react';


export default function Chat() {

  return (
    <StyledChat>
      <h1>Chat</h1>
   
      <MapG/> 
    </StyledChat>

  );
}
