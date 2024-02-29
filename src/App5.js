import React, { useEffect, useState } from "react";
import axios from "axios";
import "../src/App.css";

const App2 = () => {
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setUser(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchUser();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterUserBySearchTerm = (user) => {
    if (!searchTerm.trim()) {
      return true; // If no search term, include user
    }
    // Check if search term matches any field of the user object
    return Object.values(user).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    });
  };

  const filteredUser = user.filter(filterUserBySearchTerm);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <table>
            <thead className="handle">
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredUser.map(({ id, name, username, email }) => (
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
      )}
    </div>
  );
};

export default App2;
