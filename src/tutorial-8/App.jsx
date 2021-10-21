import React from "react";
import "./App.css";

function App() {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    try {
      let response = await fetch(
        "https://61705cbb23781c00172899f4.mockapi.io/users"
      );
      let result = await response.json();
      setUsers(result);
    } catch (err) {
      console.log(err); // TypeError: failed to fetch
    }
  };

  return (
    <div>
      {users.length ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <div>
          <button onClick={getUsers}> получить юзеров</button>
        </div>
      )}
    </div>
  );
}

export default App;
