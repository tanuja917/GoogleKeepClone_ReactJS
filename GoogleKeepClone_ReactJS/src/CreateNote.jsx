import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const [expand,setExpand] = useState(false);
    const[note, setNote] = useState({
        title:'',
        content:'',
    });

    const InputEvent = (event) =>{
        
        const{name,value}=event.target;

        setNote((prevData)=>{
            return {
                ...prevData,
                [name] : value,
                
            }
        })
    }

    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        });
    }

    const expandItem=()=>{
        setExpand(true);
    }

    const btoNormal = () =>{
        setExpand(false);
    }

    return(
    <>
        <div className="main_note" onDoubleClick={btoNormal}>
            <form>
                {expand?(
                <input type='text' name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>) :null}
                <textarea rows="" name="content" column="" value={note.content} onChange={InputEvent} onClick={expandItem} placeholder="Write a note..."></textarea>
                {expand?(<Button onClick={addEvent}>
                    <AddIcon className="plus_sign"/>
                </Button>):null}              
            </form>
        </div>
    </>
    )
};

export default CreateNote;