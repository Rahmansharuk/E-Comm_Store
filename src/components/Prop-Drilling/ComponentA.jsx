import React, { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = ()=> {
const [data, setData] = useState("Sam")

    return (
        <>
        <div className="border border-yellow-800">
            {""}
        <div>Component A</div>
        <ComponentB new_data={data}/>
        </div>
        </>
    )
}

export default ComponentA