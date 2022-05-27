import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcons fab fa-facebook"></i>
        <i className="topIcons fab fa-instagram"></i>
        <i className="topIcons fab fa-youtube"></i>
      </div>
      <div className="topCenter">
        <ul className="toplist">
          <li className="toplistItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="toplistItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="toplistItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="toplistItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="toplistItem">
            <Link className="link" onClick={handleLogout}>
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topimage" src={user.profilePic} alt="img" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li>
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="searchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
