import { useEffect, useState, useContext } from "react";
import { DistributorsContext } from "../distributors/DistributorsProvider";
import { NurseriesContext } from "../nurseries/NurseriesProvider";
export const RetailerFlowerList = ({distId}) =>{
    const {DistributorFlowers} = useContext(DistributorsContext)
    const { FetchFlowersByNursury, nurseryToDist, FetchNurseryToDist} = useContext(NurseriesContext)
    const [flowerArr, setFlowerArr] = useState(new Map())
    
    useEffect(() => {
        FetchFlowersByNursury()
        FetchNurseryToDist()
        
        console.log(nurseryToDist)
    }, [])
    useEffect(()=>{
       
       setFlowerArr(DistributorFlowers(nurseryToDist, distId))
       console.log(flowerArr)
    },[nurseryToDist])
    return (<div>
            <h5>Flowers For Sale</h5>
            <ul>
                {[...flowerArr].map(([key,value])=>{
                    return (<li>{value.species} || Color: {value.color} {(value.price * 1.15).toFixed(2)}</li>)

                    })}
            </ul>
    </div>)
}