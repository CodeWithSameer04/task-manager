import "./Sidebar.css";
import {
  LayoutDashboard,
  ClipboardList,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="sidebar">

      <p className="sidebar-section">MENU</p>

      <div className="sidebar-item active">
        <LayoutDashboard size={18} />
        <span>Dashboard</span>
      </div>

      <div className="sidebar-item">
        <ClipboardList size={18} />
        <span>Tasks</span>
        <small className="badge">12+</small>
      </div>

      <div className="sidebar-item">
        <Calendar size={18} />
        <span>Calendar</span>
      </div>

      <div className="sidebar-item">
        <BarChart3 size={18} />
        <span>Analytics</span>
      </div>

      <div className="sidebar-item">
        <Users size={18} />
        <span>Team</span>
      </div>

      <p className="sidebar-section">GENERAL</p>

      <div className="sidebar-item">
        <Settings size={18} />
        <span>Settings</span>
      </div>

      <div className="sidebar-item">
        <HelpCircle size={18} />
        <span>Help</span>
      </div>

      <div className="sidebar-item logout">
        <LogOut size={18} />
        <span>Logout</span>
      </div>

    </div>
  );
}
