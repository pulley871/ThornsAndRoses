import { useState,useEffect,useContext } from "react";
import { NurseryFlowerList } from "./NurseriesFlowerList";
import { NurseriesContext } from "./NurseriesProvider";
import { NurseriesSalesList } from "./NurseriesSales";


export const NurseriesList = () =>{
    const {nurseries, FetchNurseries} = useContext(NurseriesContext)
    useEffect(()=>{
        FetchNurseries()
        console.log(nurseries)
    },[])
    useEffect(()=>{

    },[nurseries])
    return (<>
        {nurseries.map((nursery)=>{
            return (<div>
                        <h1>{nursery?.name}</h1>
                        <div>
                        <NurseryFlowerList nurseryId = {nursery?.id} />
                        <NurseriesSalesList nurseryId = {nursery?.id} />
                        </div>
                    </div>)
        })}
    </>)
}