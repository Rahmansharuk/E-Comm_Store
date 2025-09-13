import { useEffect, useState } from "react";

const Counter = ()=> {
    
    //Usestate Method
    //Local state variable
    let[value,setValue] = useState(10);

    //string method
    let[name,setName] = useState("Sharuk");

    //Boolean Method
    let[bool,setBool] = useState(true);

    useEffect(()=>{
        console.log("useEffect Called")
    },[name])
    

    return (
        <>
        Hooks - 1)UseState method
        <div className="flex flex-col items-start gap-3 p-5">
        <p>Counter</p>
        <p>{value}</p>
        
        <div className="flex flex-row gap-3">
        <button 
        className="px-6 py-1 bg-green-500 font-bold text-[28px] "

        onClick={()=> {
            setValue(value+1)
            console.log(value);
        }}
        
        >+</button>
        <button className="px-6 py-1 bg-green-500 font-bold text-[28px]"
        onClick={()=>{
            setValue(value-1)
            console.log(value);
        }}
        >
            -</button>
        </div>
        </div>

        <div className="p-5 flex flex-col items-start gap-2 ">
            <p>String Update</p>
            <p>{name}</p>
            <button className="px-2 py-1 bg-red-500 text-white"
            onClick={()=> {setName("Rahu")}}
            >Update</button>
        </div>

        <div className="p-5 flex flex-col items-start gap-2">
        <p>Boolean Update</p>
        <p>{bool? "true":"false"}</p>
        <button className="px-2 py-1 bg-blue-400"
        onClick={()=> setBool(false)}
        >Update</button>
        </div>
        </>
    )
};

export default Counter