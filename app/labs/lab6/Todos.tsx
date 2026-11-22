// The lab 6 todos practice every Mongoose CRUD call on one collection
"use client";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import * as client from "./client";
type Todo = {
  _id: string;
  title: string;
  completed: boolean;
};
export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("Learn Mongoose");
  const [errorMessage, setErrorMessage] = useState("");
  const findAllTodos = async () => {
    try {
      setTodos(await client.findAllTodos());
      setErrorMessage("");
    } catch {
      setErrorMessage("Unable to load the todos from the database.");
    }
  };
  const findCompletedTodos = async () => {
    setTodos(await client.findCompletedTodos());
  };
  const createTodo = async () => {
    const todo = await client.createTodo({ title });
    setTodos([...todos, todo]);
  };
  const updateTodo = async (todo: Todo) => {
    await client.updateTodo(todo);
    setTodos(todos.map((t) => (t._id === todo._id ? todo : t)));
  };
  const deleteTodo = async (todo: Todo) => {
    await client.deleteTodo(todo._id);
    setTodos(todos.filter((t) => t._id !== todo._id));
  };
  useEffect(() => {
    findAllTodos();
  }, []);
  return (
    <div id="wd-lab6-todos">
      <h3>Lab 6 Todos (Mongoose CRUD)</h3>
      {errorMessage && (
        <p id="wd-lab6-todos-error" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={findAllTodos}
          id="wd-find-all-todos"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Find all
        </button>
        <button
          type="button"
          onClick={findCompletedTodos}
          id="wd-find-completed-todos"
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Find completed
        </button>
        <button
          type="button"
          onClick={createTodo}
          id="wd-create-todo-mongo"
          className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Create
        </button>
        <input
          id="wd-new-todo-title"
          className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <ul id="wd-lab6-todo-list" className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
              />
              <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
            </label>
            <FaTrash
              onClick={() => deleteTodo(todo)}
              className="cursor-pointer text-red-600"
              title="Delete"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
