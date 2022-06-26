import { Link } from "react-router-dom"
import { FaSignInAlt, FaUser } from 'react-icons/fa'
import "./navbar.scss"

function Navbar() {
    return (
        <header className="header">
            <div className="logo">
                <Link to='/'>Text input</Link>
            </div>
            <ul>
                <li>
                    <Link to="/login"> <FaSignInAlt />  Login </Link>
                </li>
                <li>
                    <Link to="/register"> <FaUser />  Register  </Link>
                </li>
            </ul>
        </header>
    )
}

export default Navbar