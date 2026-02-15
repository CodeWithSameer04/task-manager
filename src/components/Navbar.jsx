import "./Navbar.css";
import { Search, Bell, Mail, User } from "lucide-react";

export default function Navbar() {
  const username = "Sameer";
  const userImage = "";

  return (
    <div className="navbar">

      {/* Search */}

      <div className="search-wrapper">
        <Search size={18} className="search-icon" />

        <input
          className="navbar-search"
          placeholder="Search..."
        />
      </div>

      {/* Right Section */}

      <div className="navbar-right">

        <button className="icon-btn">
          <Mail size={18} />
        </button>

        <button className="icon-btn">
          <Bell size={18} />
        </button>

        {/* Profile */}

        <div className="profile-box">
          {userImage ? (
            <img src={userImage} className="profile-img" />
          ) : (
            <div className="profile-fallback">
              <User size={16} />
            </div>
          )}

          <span>{username}</span>
        </div>

      </div>

    </div>
  );
}
