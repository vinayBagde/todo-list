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
          id="inp"
        />
        <br />
        <button onClick={addNewTask} id="addBtn" class="btn">
          Add Task
        </button>
        <br />
        <br />
        <br /> <hr />
        <h4>Todo Tasks</h4>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                id="task"
                style={todo.isDone ? { textDecoration: " line-through" } : {}}
              >
                {todo.task}
              </span>

              <button onClick={() => deleteTodo(todo.id)} class="btn">
                delete
              </button>

              <button onClick={() => upperCaseOne(todo.id)} class="btn">
                UpperCase One
              </button>
              <button onClick={() => markAsOne(todo.id)} class="btn">
                Mark As Done
              </button>
            </li>
          ))}
        </ul>
        <br />
        <br /> <br />
        <button onClick={upperCaseAll} id="upperBtn" class="btn">
          upperCase All
        </button>
        <button onClick={markAsAll} class="btn">
          Mark All As Done
        </button>
      </div>
    </>
  );
}
