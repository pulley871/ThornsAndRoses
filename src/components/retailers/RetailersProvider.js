import { createContext, useState } from "react";

export const RetailersContext = createContext()

export const RetailersProvider = (props)=>{
    const [retailers, setRetailers] = useState([])

    const FetchRetailers = () =>{
        return fetch("http://localhost:8088/retailers")
            .then(res => res.json())
            .then((data) => {
                setRetailers(data)
            })
    }
    

    return(<RetailersContext.Provider value={{
        retailers, FetchRetailers
    }}>
        {props.children}
    </RetailersContext.Provider>)
}