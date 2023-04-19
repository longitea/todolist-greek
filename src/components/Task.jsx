import { Avatar, Divider, List } from "antd";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { CheckCircleTwoTone, MinusSquareTwoTone } from "@ant-design/icons";
import MarkButton from "./MarkButton";

export const TaskContext = createContext();

export default function Task({ id }) {
  const [tasks, setTasks] = useState([]);
  const long = tasks.filter((task) => task.completed).length
  console.log(long);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
        .then((response) => {
          setTasks(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  //   useEffect(() => {
  //     fetch(
  //         "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
  //       )
  //         .then((res) => res.json())
  //         .then((body) => {
  //           setData([...data, ...body.results]);
  //         //   setLoading(false);
  //         })
  //         .catch(() => {
  //         //   setLoading(false);
  //         });

  //   }, []);
  const sortArray = (taskList) => {
    return taskList.sort((a, b) => {
      return a.completed - b.completed;
    });
  };

  const taskSort = sortArray(tasks);
  const setTask = (taskList) => {
    console.log("Tôi nằm ở Task.jsx - " + taskList);
    setTasks(taskList);
  };

  return (
    <TaskContext.Provider value={taskSort}>
      <div
        id="scrollableDiv"
        style={{
          height: 400,
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
        }}
      >
        <List
          dataSource={taskSort}
          renderItem={(task) => (
            <List.Item key={task.id}>
              <List.Item.Meta
                style={{ flex: "none" }}
                // avatar={<CheckCircleTwoTone twoToneColor="#52c41a"/>}
                avatar = {
                    task.completed ?
                    <CheckCircleTwoTone twoToneColor="#52c41a"/> : 
                    <MinusSquareTwoTone twoToneColor="#ffa500" />
                }
              />
              <div style={{ flex: 1 }}>{task.title}</div>
              {!task.completed ? (
                <MarkButton setTask={(value) => setTask(value)} task={task} />
              ) : null}
            </List.Item>
          )}
        />
      </div>
      <div style={{ marginTop: 12 }}>Done {tasks.filter((task) => task.completed).length}/{tasks.length} tasks</div>
    </TaskContext.Provider>
  );
}
