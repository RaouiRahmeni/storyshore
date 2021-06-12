import {Link} from "react-router-dom"
import "./topbar.css";
export default function TopBar(){
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcons fab fa-facebook"></i>
            <i className="topIcons fab fa-instagram"></i>
            <i className="topIcons fab fa-youtube"></i>
            </div>
            <div className="topCenter">
                <ul className="toplist">
                    <li className ="toplistItem"><Link className="link" to='/'>HOME</Link></li>
                    <li className ="toplistItem"><Link className="link" to='/'>ABOUT</Link></li>
                    <li className ="toplistItem"><Link className="link" to='/'>CONTACT</Link></li>
                    <li className ="toplistItem"><Link className="link" to='/write'>WRITE</Link></li>
                    <li className ="toplistItem"><Link className="link" to='/'>{user  && "LOGOUT" }</Link></li>

                </ul>
            </div>
            <div className="topRight">
            {user ?(
                <img className='topimage'  src='https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' alt="img"/>
            ):(
                <ul className="topList">
                    <li className="topListItem">
                    <Link className="link" to="/login">LOGIN</Link>
                    </li>
                    <li>
                    <Link className="link" to="/register">REGISTER</Link>
                    </li>
                </ul>
            )}
            
            <i className="searchIcon fas fa-search"></i>
            </div>

        </div>
    )
}