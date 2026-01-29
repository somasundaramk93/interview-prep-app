import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Questions() {
  const { role } = useParams();
  const [questions, setQuestions] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/questions/${role}`, {
      headers: { authorization: token }
    }).then(res => setQuestions(res.data));
  }, [role]);

  const markComplete = async (id) => {
    await axios.post(`http://localhost:5000/api/user/complete/${id}`, {}, {
      headers: { authorization: token }
    });
    alert("Marked complete");
  };

  return (
    <div className="container">
      <h2>{role} Questions</h2>
      {questions.map(q => (
        <div key={q._id} className="card">
          <h4>{q.question}</h4>
          <p><b>Answer:</b> {q.answer}</p>
          <button onClick={() => markComplete(q._id)}>Mark Complete</button>
        </div>
      ))}
    </div>
  );
}
