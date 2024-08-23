import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((previousTodos) => {
      return [...previousTodos, { task: newTodo, id: uuidv4() }];
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
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="add a task"
          value={newTodo}
          onChange={updateTodoValue}
        />
        <br />
        <button onClick={addNewTask}>Add Task</button>
        <br />
        <br />
        <br /> <hr />
        <h4>Tasks Todo</h4>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.task}</span>
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
            </li>
          ))}
        </ul>
        <br />
        <br /> <br />
        <button onClick={upperCaseAll}>upperCase All</button>
      </div>
    </>
  );
}
