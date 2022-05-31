import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/navbar-logo.svg";
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
    <>
      <nav
        class="navbar navbar-expand-lg bg-dark p-2 text-dark bg-opacity-75 navbar-dark fixed-top"
        id="mainNav"
      >
        <div class="container">
          <a class="navbar-brand" href="#page-top">
            <img src={logo} alt="yo yo yo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars ms-1"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Stories">
                  Stories
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/write">
                  Write
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/portfolio">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    //  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //     <div class="container-fluid ms-5">
    //       <a class="navbar-brand me-5" href="/">
    //         StoryShore
    //       </a>
    //       <button
    //         class="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li class="nav-item">
    //             <a class="nav-link" href="/about">
    //               ABOUT
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link " href="/contact">
    //               CONTACT
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link " href="/write">
    //               WRITE
    //             </a>
    //           </li>
    //         </ul>
    //         <form class="d-flex">
    //           <input
    //             class="form-control me-2"
    //             type="search"
    //             placeholder="Search"
    //             aria-label="Search"
    //           />
    //           <button class="btn btn-outline-success" type="submit">
    //             Search
    //           </button>
    //           {user ? (
    //             <Link to={"/settings"}>
    //               <img className="" src={user.profilePic} alt="img" />
    //             </Link>
    //           ) : (
    //             <ul className="me-5">
    //               <Link className="m-5" to={"/login"}>
    //                 LOGIN
    //               </Link>
    //               <Link className="" to={"/register"}>
    //                 REGISTER
    //               </Link>
    //             </ul>
    //           )}
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
  );
}
