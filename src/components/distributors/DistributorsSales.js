import { useContext, useEffect, useState } from "react";
import { RetailersContext} from "../retailers/RetailersProvider";
import { DistributorsContext } from "./DistributorsProvider";
import { NurseriesContext } from "../nurseries/NurseriesProvider";
export const DistributorsSalesList = ({distId})=>{
    const {retailers, FetchRetailers} = useContext(RetailersContext)
    const {allDistFlowerOrders, FetchDistributorsFlowers} = useContext(DistributorsContext)
    const {flowers, FetchFlowersByNursury} = useContext(NurseriesContext)
    const [distRetailers, setDisRetailers] = useState([])
    useEffect(() => {
        FetchRetailers()
        
        
        FetchFlowersByNursury()
    }, [])
    useEffect(()=>{
        const foundRetailers = retailers.filter((retailer)=> retailer.distributorId === distId)
        setDisRetailers(foundRetailers)
    },[retailers])
    useEffect(()=>{
        
    },[flowers])
    return (<><h4>Retail Stores that buy from Us</h4>
    {distRetailers.map(item =>{
        return (<p>{item.name}</p>)
    })}</>)
}