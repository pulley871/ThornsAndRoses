import { ApplicationView } from "./ApplicationView"
import { Navbar } from "./nav/Navbar"
import { Route, Redirect} from "react-router"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
export const ThornsAndRoses = () =>{
    return(<>
    ``
            <Route render={()=>{
                if (localStorage.getItem("thorns_customer")){
                    return (
                        <>
                        <Navbar />
                        <h1>Thorns and Roses</h1>
                        
                        <ApplicationView />
                        </>
                    )
                }else{
                    return <Redirect to="/login"/>
                }
            }}/>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register />
            </Route>
    </>)
}