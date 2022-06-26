import { Link } from "react-router-dom"
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import "./navbar.scss"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import { selectAllAuth } from "../../features/auth/authSlice";

function Navbar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(selectAllAuth);

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className="header">
            <div className="logo">
                <Link to='/'>Text input</Link>
            </div>
            <ul>
                {user ? (
                    <li>
                        <button className="btn" onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to="/login"> <FaSignInAlt />  Login </Link>
                        </li>
                        <li>
                            <Link to="/register"> <FaUser />  Register  </Link>
                        </li>
                    </>
                )}
            </ul >
        </header >
    )
}

export default Navbar