import React, { useState } from "react";
import axios from "axios";
import "../src/App.css";

const App2 = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      setComments(response.data);
    } catch (err) {
      console.error("Error", err);
    }
  };
  fetchComments();
  return (
    <div>
      <table>
        <thead className="handle">
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment, index) => (
            <tr className="handle2" key={index}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App2;
