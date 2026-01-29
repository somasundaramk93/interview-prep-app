import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const nav = useNavigate();
  return (
    <div className="container">
      <h2>Select Interview Role</h2>
      <button onClick={() => nav("/questions/frontend")}>Frontend</button>
      <button onClick={() => nav("/questions/backend")}>Backend</button>
      <button onClick={() => nav("/questions/fullstack")}>Full Stack</button>
      <button onClick={() => nav("/profile")}>Profile</button>
    </div>
  );
}
