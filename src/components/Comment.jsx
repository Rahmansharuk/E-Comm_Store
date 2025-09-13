import { useState } from "react";

const Comment = ()=> {

    // LOcal State variable
    let[name,setName] = useState();
    let[msg,setMsg] = useState();

    //object to reduce the no of states
    const[comment,setComment] = useState({name:"", msg:""});
    
    // Array
    const[data,setData] = useState([]);

    console.log("Name:",name);
    console.log("msg:",msg);

    return (
        <>
        <div className="flex flex-col items-start gap-3 p-10">
        <p>Comment component</p>
        <input type="text" className="border border-green-400" 
        // onChange={(e)=> setName(e.target.value)}
        onChange={(e)=> setComment((prev)=>{
            return {...prev, name: e.target.value}
        })}
        /> {/*Name*/}

        <input type="text" className="border border-green-400" 
        // onChange={(e)=> setMsg(e.target.value)} //Direct Value method
        onChange={(e)=> setComment((prev)=>{
            return {...prev, msg: e.target.value} //Call Back method
        })}
        /> {/*Msg*/}

        <button className="px-3 py-3 rounded-lg bg-blue-400"
        onClick={()=> setData((prev)=>{
            return [...prev, comment];
        })}
        >Submit</button>
        </div>
        
        <p>Name:{name}</p>
        <p>Mesg:{msg}</p>
        <p>Comment:{JSON.stringify(comment)}</p>
        <p>Data:{JSON.stringify(data)}</p>
        
        </>
    )
};

export default Comment