import { useEffect, useContext, useState } from "react"
import { NurseriesContext } from "./NurseriesProvider"

export const NurseryFlowerList = ({nurseryId}) =>{

    const {flowers, FetchFlowersByNursury, FindNurseryFlowers} = useContext(NurseriesContext)
    const [nurseryFlowers, setNurseryFlowers] = useState([])
    useEffect(()=>{
        
        FetchFlowersByNursury()
    },[])
    useEffect(()=>{
        setNurseryFlowers(FindNurseryFlowers(nurseryId))
        
    },[flowers])
    return(<><h4>Flowers and Prices</h4>
            <ul>
                
                {nurseryFlowers.map((flower)=>{
                    return(<li>{flower?.flower.species} || Price: {flower?.price}</li>)
                })}
            </ul>
        
    </>)
}