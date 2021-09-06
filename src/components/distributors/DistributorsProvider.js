import { createContext, useState, useContext } from "react";
import { NurseriesContext } from "../nurseries/NurseriesProvider";

export const DistributorsContext = createContext()

export const DistributorsProvider = (props) =>{
    const [distributors, setDistributors] = useState([])
    const [allDistFlowerOrders, setDistFlowerOrders] = useState([])
    const [salesToRetailers, setSalesToRetailers] = useState([])
    const {FindNurseryFlowers} = useContext(NurseriesContext)
    const FetchDistributors = () =>{
        return fetch("http://localhost:8088/distributors")
            .then(res => res.json())
            .then((data) => {
                setDistributors(data)
            })
    }
    const DistributorFlowers = (array, distId) =>{
        const map = new Map()
        const arr = []
        const filteredDist = array.filter((dist)=>dist.distributorId === distId)
        for (const nursery of filteredDist){
         const tryingStuff = FindNurseryFlowers(nursery.nurseryId)
         for (const item of tryingStuff){
             arr.push(item)
         }
        }
        console.log(arr) 
        for (const item of arr){
            if (map.has(item.flowerId)){
                map.get(item.flowerId).total ++
                map.get(item.flowerId).price = (map.get(item.flowerId).price + item.price) / map.get(item.flowerId).total
            }else{
                map.set(item.flowerId, {species:item.flower?.species, color: item.flower?.color, price: item.price, total: 1})
            }
        }
        return map
    }
    return (<DistributorsContext.Provider value={{
        distributors,allDistFlowerOrders, FetchDistributors,DistributorFlowers
    }}>

        {props.children}
    </DistributorsContext.Provider>)
}