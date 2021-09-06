import { useState, useEffect, useContext} from "react";
import { NurseriesContext } from "./NurseriesProvider";


export const NurseriesSalesList = ({nurseryId}) =>{
    const { FetchNurseryToDist, nurseryToDist, flowers, FetchFlowersByNursury} = useContext(NurseriesContext)
    const [sales, setSales] = useState([])
    useEffect(()=>{
        FetchNurseryToDist()
        FetchFlowersByNursury()
    },[])
    useEffect(()=>{
        const filteredSales = nurseryToDist.filter((sale)=> sale.nurseryId === nurseryId)

            
        setSales(filteredSales)
    },[nurseryToDist])
    return (<div><h4>Sales</h4>
        <ul>
            {sales.map((sale)=> {
                return (<li>{sale.distributor.name} </li>)
            })}
        </ul>
    </div>)
}