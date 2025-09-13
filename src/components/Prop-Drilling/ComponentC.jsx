import React from "react";

const ComponentC = (props)=> {
    console.log(props);
    return (
        <>
        <div className="border border-green-800">
            {""}
        <div>Component C</div>
        <p>{props.new_data}</p>
        </div>
        </>
    )
}

export default ComponentC