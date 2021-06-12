import "./sidebar.css"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar">
            <span className="sidebareTitle">ABOUT ME</span>
            <img src="https://images.pexels.com/photos/728408/pexels-photo-728408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="sideImg" />
            <p>hhhhhhhhhhhhhhh</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebareTitle">CATEGORIES</span>
            <ul className="sidebarList">
        <li className="sidebarlistItem">Life</li>
        <li className="sidebarlistItem">Music</li>
        <li className="sidebarlistItem">Style</li>
        <li className="sidebarlistItem">Sport</li>
        <li className="sidebarlistItem">Tech</li>
        <li className="sidebarlistItem">Cinema</li>
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
        
    )
}
