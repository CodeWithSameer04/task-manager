import "./Navbar.css";

export default function Navbar() {
  const username = "Sameer";

  // later this comes from backend
  const userImage = ""; // empty = fallback icon

  return (
    <div className="navbar">

      <input className="navbar-search" placeholder="Search..." />

      <div className="navbar-right">

        {/* Mail */}
        <button className="icon-btn">📩</button>

        {/* Notification */}
        <button className="icon-btn">🔔</button>

        {/* Profile */}
        <div className="profile-box">
          <div className="profile-fallback">👤</div>
          <span>Sameer</span>
        </div>

      </div>
    </div>
  );
}
