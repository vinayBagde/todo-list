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
      if (newTodo == "") {
        return [...previousTodos];
      } else {
        return [
          ...previousTodos,
          { task: newTodo, id: uuidv4(), isDone: false },
        ];
      }
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
    setTodos((previousTodo) => {
      return previousTodo.map((todo) => {
        if (todo.task == todo.task.toLowerCase()) {
          return { ...todo, task: todo.task.toUpperCase() };
        } else {
          return { ...todo, task: todo.task.toLowerCase() };
        }
      });
    });
  };

  let markAsAll = () => {
    setTodos((previousTodo) => {
      return previousTodo.map((todo) => {
        if (todo.isDone == false) {
          return { ...todo, isDone: true };
        } else {
          return { ...todo, isDone: false };
        }
      });
    });
  };

  let upperCaseOne = (id) => {
    setTodos((previousTodo) =>
      previousTodo.map((todo) => {
        if (todo.id == id && todo.task == todo.task.toLowerCase()) {
          return { ...todo, task: todo.task.toUpperCase() };
        } else if (todo.id == id && todo.task == todo.task.toUpperCase()) {
          return { ...todo, task: todo.task.toLowerCase() };
        } else {
          return todo;
        }
      }),
    );
  };

  let markAsOne = (id) => {
    setTodos((previousTodo) =>
      previousTodo.map((todo) => {
        if (todo.id == id && todo.isDone == false) {
          return { ...todo, isDone: true };
        } else if (todo.id == id && todo.isDone == true) {
          return { ...todo, isDone: false };
        } else {
          return todo;
        }
      }),
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
        <button onClick={addNewTask} id="addBtn" className="btn">
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

              <button onClick={() => deleteTodo(todo.id)} className="btn">
                delete
              </button>

              <button onClick={() => upperCaseOne(todo.id)} className="btn">
                UpperCase One
              </button>
              <button onClick={() => markAsOne(todo.id)} className="btn">
                Mark As Done
              </button>
            </li>
          ))}
        </ul>
        <br />
        <br /> <br />
        <button onClick={upperCaseAll} id="upperBtn" className="btn">
          upperCase All
        </button>
        <button onClick={markAsAll} className="btn">
          Mark All As Done
        </button>
      </div>
    </>
  );
}
