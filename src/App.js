import { useState } from "react";
import "../src/App.css";

const App = () => {
  const [FormData, setFormData] = useState({
    name1: "",
    email: "",
    address: "",
    mobile: "",
    description: "",
  });

  const [userList, setUserList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserList((prevState) => [...prevState, FormData]);
    setFormData({
      name1: "",
      email: "",
      address: "",
      mobile: "",
      description: "",
    });
  };

  return (
    <div className="flexst">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          name="name1"
          // value={FormData.name}
          value={FormData.name1}
          onChange={handleChange}
          placeholder="name"
          required
        />
        <input
          type="email"
          name="email"
          value={FormData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="address"
          value={FormData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          type="number"
          name="mobile"
          value={FormData.mobile}
          onChange={handleChange}
          placeholder="Mobile No"
          required
        />
        <textarea
          type="text"
          name="description"
          value={FormData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <button type="submit">Submit </button>
      </form>

      <table>
        <thead className="handle">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(
            ({ name1, email, address, mobile, description }, index) => (
              <tr className="handle2" key={index}>
                <td>{name1}</td>
                <td>{email}</td>

                <td>{address}</td>
                <td>{mobile}</td>
                <td>{description}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
