import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Dashboard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("dashboard/")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        localStorage.clear();
        navigate("/");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/");
  };

  if (loading) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <div style={{ maxWidth: 600, margin: "50px auto" }}>
      <h1>Dashboard</h1>

      {/* Logout button */}
      <button onClick={handleLogout} style={{ marginBottom: 20 }}>
        Logout
      </button>

      <p>Total Tasks: {data.total_tasks}</p>
      <p>Completed Tasks: {data.completed_tasks}</p>
    </div>
  );
}

export default Dashboard;
