import { Route } from "react-router";
import { Distributors } from "./distributors/Distributors";
import { DistributorsProvider } from "./distributors/DistributorsProvider";
import { Nurseries } from "./nurseries/Nurseries";
import { NurseriesProvider } from "./nurseries/NurseriesProvider";
import { Retailers } from "./retailers/Retailers";
import { RetailersProvider } from "./retailers/RetailersProvider";

export const ApplicationView = (props) =>{
    return (<>
    <NurseriesProvider>
        <DistributorsProvider>
                <RetailersProvider>

                <Route path="/nurseries">
                    <Nurseries />
                </Route>

                <Route path="/distributors">
                    <Distributors />
                </Route>
                <Route path="/retailers">
                    <Retailers />
                </Route>
            </RetailersProvider>
        </DistributorsProvider>
    </NurseriesProvider>
        </>
    )
}