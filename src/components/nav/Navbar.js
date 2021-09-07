import { Link } from "react-router-dom";


export const Navbar = () =>{
    return (<>
                <Link to="/nurseries">Nurseries</Link>
                <Link to="/distributors">Distributors</Link>
                <Link to="/retailers">Retailers</Link>
                <Link to="/purchases">Purchases</Link>
                <Link className="navbar_link" to="/login" onClick={()=>localStorage.removeItem("kandy_customer")}>Logout</Link>
            
            </>)
}