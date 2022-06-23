import { FaSignInAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./header.scss"

function div() {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className="logo">
                    <Link className='link' to='/' >Goalsetter</Link>
                </div>
                <ul>
                    <li className="item">
                        <Link className='link' to='/posts' >  <FaSignInAlt /> Posts </Link>
                    </li>
                    <li className="item">
                        <Link className='link' to='/login' >  <FaSignInAlt /> Login </Link>
                    </li>
                    <li className="item">
                        <Link className='link' to='/register' >  <FaUser /> Register  </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default div 
