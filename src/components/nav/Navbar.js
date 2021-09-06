import { Link } from "react-router-dom";


export const Navbar = () =>{
    return (<>
                <Link to="/nurseries">Nurseries</Link>
                <Link to="/distributors">Distributors</Link>
                <Link to="/retailers">Retailers</Link>

            </>)
}