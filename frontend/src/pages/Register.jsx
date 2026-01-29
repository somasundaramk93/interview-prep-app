import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [data, setData] = useState({});

  const register = async () => {
    await axios.post("http://localhost:5000/api/auth/register", data);
    alert("Registered successfully");
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setData({...data, name:e.target.value})}/>
      <input placeholder="Email" onChange={e => setData({...data, email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e => setData({...data, password:e.target.value})}/>
      <button onClick={register}>Register</button>
    </div>
  );
}
