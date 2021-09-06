import { useState, createContext } from "react";


export const NurseriesContext = createContext()

export const NurseriesProvider = (props)=>{
    const [nurseries, setNurseries] = useState([])
    const [flowers, setFlowers]= useState([])
    const [nurseryToDist, setNurserToDist] = useState([])
    const [flowersWithNursery, setFlowerByNursery] = useState([])
    const FetchNurseries = () =>{
        return fetch("http://localhost:8088/nurseries")
            .then(res => res.json())
            .then((data) => {
                setNurseries(data)
            })
    }
    const FetchFlowers = () =>{
        return fetch("http://localhost:8088/flowers")
            .then(res => res.json())
            .then((data) => {
                setFlowers(data)
            })
    }
    const FetchFlowersByNursury = () =>{
        return fetch(`http://localhost:8088/flowersByNurseries?&_expand=nursery&_expand=flower`)
            .then(res => res.json())
            .then((data) => {
                setFlowers(data)
            })
    }
    const FetchNurseryToDist= ()=>{
        return fetch("http://localhost:8088/flowersSoldToDistributors?&_expand=nursery&_expand=distributor")
            .then(res => res.json())
            .then((data) => {
                setNurserToDist(data)
            })
    }
    const FindNurseryFlowers = (nurseryId)=>{
        const filteredFlowers = flowers.filter((flower)=> flower.nurseryId === nurseryId)
        return filteredFlowers
    }
    return(<NurseriesContext.Provider value={{
        FetchNurseryToDist, FetchFlowersByNursury, FetchFlowers, FetchNurseries, flowersWithNursery, nurseryToDist, flowers, nurseries,FindNurseryFlowers
    }}>{props.children}
    </NurseriesContext.Provider>)

    //http://localhost:8088/flowersByNurseries?nurseryId=1&_expand=flower
}