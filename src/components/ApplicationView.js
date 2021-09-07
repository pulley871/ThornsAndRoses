import { Route } from "react-router";
import { Distributors } from "./distributors/Distributors";
import { DistributorsProvider } from "./distributors/DistributorsProvider";
import { Nurseries } from "./nurseries/Nurseries";
import { NurseriesProvider } from "./nurseries/NurseriesProvider";
import { Retailers } from "./retailers/Retailers";
import { RetailersProvider } from "./retailers/RetailersProvider";
import { PurchaseProvider } from "./user/PurchaseProvider";
import { Purchases } from "./user/Purchases";

export const ApplicationView = (props) =>{
    return (<>
    <NurseriesProvider>
        <DistributorsProvider>
                <RetailersProvider>
                    <PurchaseProvider>
                <Route path="/nurseries">
                    <Nurseries />
                </Route>

                <Route path="/distributors">
                    <Distributors />
                </Route>
                <Route path="/retailers">
                    <Retailers />
                </Route>
                <Route>
                    <Purchases />
                </Route>
                </PurchaseProvider>
            </RetailersProvider>
        </DistributorsProvider>
    </NurseriesProvider>
        </>
    )
}