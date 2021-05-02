import React from "react";
import BackspaceIcon from '@material-ui/icons/Backspace';

function Note(props){

  function handleEvent(){
    props.onDelete(props.id);
  }

  return(
    <div class="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleEvent}><BackspaceIcon /></button>
    </div>
  );
}

export default Note;
