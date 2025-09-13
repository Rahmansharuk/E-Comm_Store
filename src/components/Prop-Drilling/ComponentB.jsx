import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = (props)=> {
    console.log(props)
    return (
    <>
    <div className="border border-red-800">
            {""}
        <div>Component B</div>
        {props.new_data}

        <ComponentC new_data={props.new_data}/>
    </div>
    </>
        
    )
}

export default ComponentB