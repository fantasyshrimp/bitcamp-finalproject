import React from "react";


function StyleButton(props) {

return (
  <div 
  onMouseDown={(event)=>{props.handleClick(event, props.setStyle)}}
  style={{position: 'absolute', left: '50px', top: props.hi,
    width: '50px', height: '50px', backgroundColor: 'white'
  }}>
  </div>
);

}

export default StyleButton;