import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();
  const changePath = (path) => {
    navigate(path);
  };
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid ms-5">
        <a class="navbar-brand me-5" href="/">
          StoryShore
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/about">
                ABOUT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/contact">
                CONTACT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/write">
                WRITE
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
            {user ? (
              <Link to={"/settings"}>
                <img className="" src={user.profilePic} alt="img" />
              </Link>
            ) : (
              <ul className="me-5">
                <Link className="m-5" to={"/login"}>
                  LOGIN
                </Link>
                <Link className="" to={"/register"}>
                  REGISTER
                </Link>
              </ul>
            )}
          </form>
        </div>
      </div>
    </nav>
    // <div className="top">
    //   <div className="topLeft">
    //     <i className="topIcons fab fa-facebook"></i>
    //     <i className="topIcons fab fa-instagram"></i>
    //     <i className="topIcons fab fa-youtube"></i>
    //   </div>
    //   <div className="topCenter">
    //     <ul className="toplist">
    //       <li className="toplistItem">
    //         <Link className="link" to={"/"}>
    //           HOME
    //         </Link>
    //       </li>
    //       <li className="toplistItem">
    //         <Link className="link" to={"/"}>
    //           ABOUT
    //         </Link>
    //       </li>
    //       <li className="toplistItem">
    //         <Link className="link" to={"/"}>
    //           CONTACT
    //         </Link>
    //       </li>
    //       <li className="toplistItem">
    //         <Link className="link" to={"/write"}>
    //           WRITE
    //         </Link>
    //       </li>
    //       <li className="toplistItem">
    //         <Link className="link" to={"#"} onClick={handleLogout}>
    //           {user && "LOGOUT"}
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="topRight">
    //     {user ? (
    //       <Link to={"/settings"}>
    //         <img className="topimage" src={user.profilePic} alt="img" />
    //       </Link>
    //     ) : (
    //       <ul className="topList">
    //         <li className="topListItem">
    //           <Link className="link" to={"/login"}>
    //             LOGIN
    //           </Link>
    //         </li>
    //         <li>
    //           <Link className="link" to={"/register"}>
    //             REGISTER
    //           </Link>
    //         </li>
    //       </ul>
    //     )}

    //     <i className="searchIcon fas fa-search"></i>
    //   </div>
    // </div>
  );
}
