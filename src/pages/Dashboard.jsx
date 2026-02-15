import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import "./dashboard.css";

function Dashboard() {

  const tasks = [
    { id: 1, status: "completed" },
    { id: 2, status: "pending" },
    { id: 3, status: "in-progress" },
    { id: 4, status: "completed" },
    { id: 5, status: "pending" },
  ];

  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "completed").length;
  const inProgress = tasks.filter(t => t.status === "in-progress").length;
  const pending = tasks.filter(t => t.status === "pending").length;

  // Timer
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [isClock, setIsClock] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    let interval;

    if (running && !isClock) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running, isClock]);

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  const formatTime = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  const handleReset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div className="dashboard">

      <h2>Dashboard</h2>
      <p className="subheading">This Month</p>

      {/* STAT CARDS */}
      <div className="stats-grid">

        <div className="card highlight">
          <h3>{total}</h3>
          <p>Total Tasks</p>
        </div>

        <div className="card">
          <h3>{completed}</h3>
          <p>Completed Tasks</p>
        </div>

        <div className="card">
          <h3>{inProgress}</h3>
          <p>In Progress</p>
        </div>

        <div className="card">
          <h3>{pending}</h3>
          <p>Pending Tasks</p>
        </div>

      </div>

      {/* LOWER GRID */}
      <div className="lower-grid">

        <div className="card large">
          <h4>Task Analytics</h4>
          <p>Weekly completion overview</p>
        </div>

        <div className="card">
          <h4>Reminders</h4>
          <p>Meeting at 6:00 PM</p>
        </div>

        <div className="card">
          <h4>Quick Actions</h4>
          <button className="primary-btn">+ Add Task</button>
        </div>

        <div className="card">
          <h4>Task Progress</h4>
          <h2>{Math.round((completed / total) * 100)}%</h2>
          <p>Completed</p>
        </div>

        <div className="card timer-card">
          <h4>{isClock ? "Live Clock" : "Time Tracker"}</h4>

          {/* Display AREA */}
          
          <div className="timer-display">
            {!isClock && (
              <div className="time-box-wrapper">
                <div className="time-box">
                  <span className="time-number">
                    {String(Math.floor(seconds / 3600)).padStart(2, "0")}
                  </span>
                  <span className="time-label">hours</span>
                </div>

                <span className="colon">:</span>

                <div className="time-box">
                  <span className="time-number">
                    {String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")}
                  </span>
                  <span className="time-label">minutes</span>
                </div>

                <span className="colon">:</span>

                <div className="time-box">
                  <span className="time-number">
                    {String(seconds % 60).padStart(2, "0")}
                  </span>
                  <span className="time-label">seconds</span>
                </div>
              </div>
            )}

            {isClock && (
              <div className="clock-text">
                {currentTime.toLocaleTimeString()}
              </div>
            )}
          </div>

          <div className="timer-buttons">
            {!isClock && (
              <>
                <button onClick={() => setRunning(true)}>
                  <Play size={18} />
                </button>
                <button onClick={() => setRunning(false)}>
                  <Pause size={18} />
                </button>
                <button onClick={handleReset}>
                  <RotateCcw size={18} />
                </button>
              </>
            )}

            <button onClick={() => setIsClock(!isClock)}>
              {isClock ? "Timer" : "Clock"}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
