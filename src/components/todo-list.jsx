import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TodoList() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  useEffect(() => {
    if (selectedUserId) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users/${selectedUserId}/todos`
        )
        .then((response) => {
          setTasks(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedUserId]);

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
  };
  return (
    <div>
      <div>
        <h2>Select user:</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => handleUserSelect(user.id)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedUserId && (
        <div>
          <h2>Tasks:</h2>
          <ul>
            {tasks
              .sort((a, b) =>
                a.completed === b.completed ? 0 : a.completed ? 1 : -1
              )
              .map((task) => (
                <li key={task.id} className={task.completed ? "completed" : ""}>
                  {task.title}
                </li>
              ))}
          </ul>
          <div>
            Completed: {tasks.filter((task) => task.completed).length} /{" "}
            {tasks.length}
          </div>
          <button onClick={() => markAllTasksDone()}>Mark All Done</button>
        </div>
      )}
    </div>
  );
}
