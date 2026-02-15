import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">

      <p className="sidebar-section">MENU</p>

      <div className="sidebar-item active">
        📊 <span>Dashboard</span>
      </div>

      <div className="sidebar-item">
        📝 <span>Tasks</span>
        <small className="badge">12+</small>
      </div>

      <div className="sidebar-item">
        📅 <span>Calendar</span>
      </div>

      <div className="sidebar-item">
        📈 <span>Analytics</span>
      </div>

      <div className="sidebar-item">
        👥 <span>Team</span>
      </div>

      <p className="sidebar-section">GENERAL</p>

      <div className="sidebar-item">
        ⚙️ <span>Settings</span>
      </div>

      <div className="sidebar-item">
        ❓ <span>Help</span>
      </div>

      <div className="sidebar-item logout">
        🚪 <span>Logout</span>
      </div>

    </div>
  );
}
