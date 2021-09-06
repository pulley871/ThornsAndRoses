import { useEffect, useContext } from "react";
import { RetailersDistributorandNurserys } from "./RetailersDistAndNurse";
import { RetailerFlowerList } from "./RetailersFlowers";
import { RetailersContext } from "./RetailersProvider";

export const RetailersList = () =>{
    const {retailers, FetchRetailers} = useContext(RetailersContext)

    return (<> 
        {retailers.map(retail=>{
            return(<div>
                        <h3>{retail.name}</h3>
                        <p>{retail.address}</p>
                        <RetailerFlowerList distId = {retail.distributorId} />
                        <RetailersDistributorandNurserys distId = {retail.distributorId}/>
            </div>)
        })}
    </>)
}