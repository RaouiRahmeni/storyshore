import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const getCats = async () => {
    const res = await axios.get("/categories");
    setCats(res.data);
  };
  useEffect(() => {
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar">
        <span className="sidebareTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/728408/pexels-photo-728408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="sideImg"
        />
        <p>hhhhhhhhhhhhhhh</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebareTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((ele) => (
            <Link to={`/?cat=${ele.name}`} className="link">
              <li className="sidebarlistItem">{ele.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebareTitle">FOLLOW US</span>
        <div className="SocialMedia">
          <i className="sidebarIcons fab fa-facebook"></i>
          <i className="sidebarIcons fab fa-instagram"></i>
          <i className="sidebarIcons fab fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}
