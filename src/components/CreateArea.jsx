import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){

  const [exp,setExp]=useState(false);

  const [note,setNote]=useState({
    title:"",
    content:""
  });

  function handleEvent(event){
    const {name,value} = event.target;

    setNote(prevValue => {
      return{
        ...prevValue,
        [name]:value
      };
    })
  }

  function expand(){
    setExp(true);
  }

  function submitNote(event){
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    })
    event.preventDefault();
  }

  return(
    <div>
      <form className="create-note" >
        {exp ? <input onChange={handleEvent} name="title" placeholder="Title" value={note.title} autocomplete="off" /> : null}
        <textarea onClick={expand} onChange={handleEvent} name="content" placeholder="Take a note..." rows={exp ? "3" : "1"} value={note.content} />
        <Zoom in={exp}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  )
}

export default CreateArea;
