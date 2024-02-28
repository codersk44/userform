// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App2 = () => {
//   const [comments, setComments] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
//         setComments(response.data);
//       } catch (error) {
//         console.error("Error fetching comments:", error);
//       }
//     };

//     fetchComments();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredComments = comments.filter(comment =>
//     comment.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by name..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <table>
//         <thead className="handle">
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Body</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredComments.map(({ id, name, email, body }) => (
//             <tr className="handle2" key={id}>
//               <td>{name}</td>
//               <td>{email}</td>
//               <td>{body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App2;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // Import CSS file for styles

const App2 = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/comments`
        );
        setComments(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead className="handle">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {comments.map(({ id, name, email, body }) => (
              <tr className="handle2" key={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App2;
