import { createContext, useState } from "react";

export const PurchaseContext = createContext()

export const PurchaseProvider = (props)=>{
    const [purchaseObject, setPurchaseObject] = useState({})
    const [purchases, setPurchases] = useState([])

    const fetchPurchases = ()=>{
        return fetch(`http://localhost:8088/customerPurchases?customerId=${localStorage.getItem("thorns_customer")}`)
            .then(res => res.json())
            .then((data) => {
                setPurchases(data)
            })
    }
    const PurchaseFlower = ()=>{
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(purchaseObject)
        }
        
        return fetch("http://localhost:8088/customerPurchases", fetchOption)
            .then(() => {fetchPurchases()})
    }
    return(<PurchaseContext.Provider value={{
        purchaseObject, setPurchaseObject, purchases, fetchPurchases, PurchaseFlower
    }}>
        {props.children}
    </PurchaseContext.Provider>)
}