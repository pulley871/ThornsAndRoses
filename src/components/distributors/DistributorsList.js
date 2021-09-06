import { useContext, useEffect } from "react";
import { DistributorsInventoryList } from "./DistributorsInventory";
import { DistributorsContext } from "./DistributorsProvider";
import { DistributorsSalesList } from "./DistributorsSales";

export const DistributorsList = ()=>{
    const {distributors ,FetchDistributors} = useContext(DistributorsContext)
    useEffect(() => {
        FetchDistributors()
        console.log(distributors)
    }, [])
    return (<>
    {distributors.map((distributor)=>{
        return(<div><h3>{distributor?.name}</h3>
        
        <DistributorsInventoryList distId = {distributor.id} distMarkup ={distributor.markup}/>
        <DistributorsSalesList  distId = {distributor.id}/>
        </div>)
    })}
    </>)
}