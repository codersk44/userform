

import React, { useEffect, useState } from "react";
import axios from "axios";
import '../src/App.css'

const App2 = () => {
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchUser();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUser = user.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead className="handle">
          <tr>
          <th>id</th>
            <th>Name</th>
            <th>username</th>
            <th>Email</th>

          </tr>
        </thead>
        <tbody>
          {filteredUser.map(({ id, name, email,username  }) => (
            <tr className="handle2" key={id}>
            <td>{id}</td>
              <td>{name}</td>
              <td>{username}</td>
              <td>{email}</td>
             
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App2;


