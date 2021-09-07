import { useEffect, useState, useContext } from "react";
import { DistributorsContext } from "../distributors/DistributorsProvider";
import { NurseriesContext } from "../nurseries/NurseriesProvider";
import { PurchaseContext } from "../user/PurchaseProvider";
export const RetailerFlowerList = ({distId, retailId}) =>{
    const {DistributorFlowers} = useContext(DistributorsContext)
    const {purchaseObject, setPurchaseObject, PurchaseFlower} = useContext(PurchaseContext)
    const { FetchFlowersByNursury, nurseryToDist, FetchNurseryToDist} = useContext(NurseriesContext)
    const [flowerArr, setFlowerArr] = useState(new Map())
    
    useEffect(() => {
        FetchFlowersByNursury()
        FetchNurseryToDist()
        console.log(retailId)
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
                    return (<li>{value.species} || Color: {value.color} {(value.price * 1.15).toFixed(2)}
                    <button onClick={()=>{
                        let copy = {...purchaseObject}
                        copy.retailerId = retailId
                        copy.customerId = parseInt(localStorage.getItem("thorns_customer"))
                        copy.flowerId = key
                        copy.flowerColor = value.color
                        copy.price = parseInt((value.price * 1.15).toFixed(2))
                        setPurchaseObject(copy)
                        if (purchaseObject !== undefined){

                            PurchaseFlower()
                        }
                        
                    }}>Purchase</button>
                    </li>)

                    })}
            </ul>
    </div>)
}