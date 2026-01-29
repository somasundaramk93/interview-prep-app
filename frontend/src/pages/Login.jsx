import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({});
  const nav = useNavigate();

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", data);
    localStorage.setItem("token", res.data.token);
    nav("/dashboard");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setData({...data, email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e => setData({...data, password:e.target.value})}/>
      <button onClick={login}>Login</button>
    </div>
  );
}
