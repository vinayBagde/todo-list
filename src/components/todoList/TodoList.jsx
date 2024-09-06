import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((previousTodos) => {
      return [...previousTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((previousTodos) => {
      return previousTodos.filter((previousTodos) => previousTodos.id != id);
    });
  };

  let upperCaseAll = () => {
    setTodos((previousTodo) =>
      previousTodo.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() };
      })
    );
  };

  let markAsAll = () => {
    setTodos((previousTodo) =>
      previousTodo.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((previousTodo) =>
      previousTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsOne = (id) => {
    setTodos((previousTodo) =>
      previousTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <>
      <div id="todo">
        <input
          type="text"
          placeholder="add a task"
          value={newTodo}
          onChange={updateTodoValue}
        />
        <br />
        <button onClick={addNewTask} id="addBtn">Add Task</button>
        <br />
        <br />
        <br /> <hr />
        <h4>Tasks Todo</h4>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.task}</span>

              <button onClick={() => deleteTodo(todo.id)}>delete</button>

              <button onClick={() => upperCaseOne(todo.id)}>
                UpperCase One
              </button>
              <button>Mark As Done</button>
            </li>
          ))}
        </ul>
        <br />
        <br /> <br />
        <button onClick={upperCaseAll}id="upperBtn">upperCase All</button>
        <button onClick={markAsAll}>Mark All As Done</button>
      </div>
    </>
  );
}
