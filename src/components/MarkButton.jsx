import axios from "axios";
import React, { useContext, useReducer, useState } from "react";
import { TaskContext } from "./Task";
import { Button } from "antd";

export default function MarkButton(props) {
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      }, 6000);
    };


  const taskSort = useContext(TaskContext);

  // if(props) {
  //     const id = props.task.id;
  // }
  const id = props?.task.id;
  console.log(id);

  const updateSuccess = () => {
    let result = taskSort.map((task) => {
      if (task.id === id) {
        // console.log(task.id);

        return { ...task, completed: true };
      } else {
        return task;
      }
    });

    console.log(result);

    props.setTask(result);
  };

  const PatchRequest = () => {
    const result = axios
      .patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        completed: true,
      })
      .then((response) => {
        console.log(response.data);
        if (response.status == 200) {
          updateSuccess();
        }
      })
      .catch((error) => console.error(error));

    // fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
    //   method: "PATCH",
    //   body: JSON.stringify({ completed: true }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => { response.json() })
    //   .then((json) => console.log(json));

    console.log(result);
  };

  const handleClick = () => {
    enterLoading(0)
    console.log('clicked');
    PatchRequest();
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return state.map((task) => {
          if (task.id === props.id) {
            // console.log(task.id);

            return { ...task, completed: true };
          } else {
            return task;
          }
        });
      default:
        return state;
    }
  };

  return <Button loading={loadings[0]} onClick={handleClick}>Mark done</Button>;
}
