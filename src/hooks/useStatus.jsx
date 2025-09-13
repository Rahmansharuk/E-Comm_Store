// online offine indicator link to header file
import { useEffect, useState } from "react"

const useStatus = ()=>{

    const [status, setStatus] = useState(navigator.onLine); //online-true offline-false

    useEffect(()=>{
        addEventListener("online",()=>{
        setStatus(true)
        })

        addEventListener("offline",()=>{
        setStatus(false)
        })

    },[])

    return status //True or False
}

export default useStatus