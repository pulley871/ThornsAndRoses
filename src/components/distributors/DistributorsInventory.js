import { useContext, useEffect, useState } from "react";
import { NurseriesContext } from "../nurseries/NurseriesProvider";
import { DistributorsContext } from "./DistributorsProvider";

export const DistributorsInventoryList = (props)=>{
    const {DistributorFlowers} = useContext(DistributorsContext)
    const { FetchFlowersByNursury, nurseryToDist, FetchNurseryToDist, FindNurseryFlowers} = useContext(NurseriesContext)
    const [flowerArr, setFlowerArr] = useState(new Map())
    const {distId, distMarkup} = props
    useEffect(() => {
        FetchFlowersByNursury()
        FetchNurseryToDist()
        
        console.log(nurseryToDist)
        console.log(distMarkup)
    }, [])
    useEffect(()=>{
       
       setFlowerArr(DistributorFlowers(nurseryToDist, distId))
       console.log(flowerArr)
    },[nurseryToDist])

    return (<><h4>Inventory</h4>
    <ul>
    {[...flowerArr].map(([key,value])=>{
        return (<li>{value.species} || Color: {value.color} {(value.price * 1.10).toFixed(2)}</li>)
    })}
    </ul>
    </>)
}