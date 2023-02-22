import { Link } from "react-router-dom";

function Header()
{
    return(<header>
     <ul>
        <li><Link to={"/home"}>Home</Link> </li>
        <li><Link to={"/about"}>About us</Link> </li>
     </ul>

    </header>)
}
export default Header;