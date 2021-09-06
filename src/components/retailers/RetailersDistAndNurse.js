import { useEffect, useContext, useState } from "react";
import { NurseriesContext } from "../nurseries/NurseriesProvider";
import { DistributorsContext } from "../distributors/DistributorsProvider";

export const RetailersDistributorandNurserys = ({distId}) =>{
    const {nurseries, FetchNurseries, nurseryToDist, FetchNurseryToDist} = useContext(NurseriesContext)
    const {distributors, FetchDistributors} =useContext(DistributorsContext)
    const [foundDistributor, setDistributor] = useState({})
    const [nurseriesArr, setNurseriesArr] = useState([])
    useEffect(()=>{
        FetchNurseryToDist()
        FetchNurseries()
        FetchDistributors()
    },[])
    useEffect(()=>{
        const foundItem = distributors.find((dist)=> dist.id === distId)
        setDistributor(foundItem)
    },[distributors])
    useEffect(()=>{
        const arr = []
        const filteredRelations = nurseryToDist.filter((item)=> item.distributorId === distId)
        for (const item of filteredRelations) {
            const foundItem = nurseries.find((nursery)=> nursery.id === item.nurseryId)
            if(foundItem !== undefined){
                arr.push(foundItem)
            }
        }
        setNurseriesArr(arr)
    },[foundDistributor])
    return (<div>
                <h5>{foundDistributor.name}'s Nurseries</h5>
                <ul>
                    {nurseriesArr.map((nursery)=>{
                        return (<li>{nursery.name}</li>)
                    })}
                </ul>
    </div>)
}