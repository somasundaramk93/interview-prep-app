import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/profile", {
      headers: { authorization: token }
    }).then(res => setUser(res.data));
  }, []);

  return (
    <div className="container">
      <h2>{user.name}'s Progress</h2>
      <p>Completed Questions: {user.completedQuestions?.length}</p>
    </div>
  );
}
