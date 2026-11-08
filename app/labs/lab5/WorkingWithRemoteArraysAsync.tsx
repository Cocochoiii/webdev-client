// The todos load with axios and every button changes them on the server first
"use client";
import { useEffect, useState } from "react";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";
type Todo = {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
  editing?: boolean;
};
export default function WorkingWithRemoteArraysAsync() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const fetchTodos = async () => {
    try {
      setTodos(await client.fetchTodos());
      setErrorMessage(null);
    } catch {
      setErrorMessage("Unable to load the todos from the server.");
    }
    setLoading(false);
  };
  const removeTodo = async (todo: Todo) => {
    try {
      setTodos(await client.removeTodo(todo));
    } catch {
      setErrorMessage(`Unable to remove Todo with ID ${todo.id}`);
    }
  };
  const createNewTodo = async () => {
    try {
      setTodos(await client.createNewTodo());
    } catch {
      setErrorMessage("The server did not create the todo. Try again.");
    }
  };
  const postNewTodo = async () => {
    try {
      const newTodo = await client.postNewTodo({
        title: "New Posted Todo",
        completed: false,
      });
      setTodos([...todos, newTodo]);
    } catch {
      setErrorMessage("The server did not create the todo. Try again.");
    }
  };
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };
  const editTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };
  const updateTodo = async (todo: Todo) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      <h4 className="flex items-center gap-2">
        Todos
        <FaPlusCircle
          onClick={createNewTodo}
          id="wd-create-todo"
          className="cursor-pointer text-green-600"
          title="Create with GET"
        />
        <FaPlusCircle
          onClick={postNewTodo}
          id="wd-post-todo"
          className="cursor-pointer text-blue-600"
          title="Create with POST"
        />
      </h4>
      {errorMessage && (
        <p id="wd-todo-error-message" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      {loading && <p className="text-neutral-500">Loading the todos from the server...</p>}
      <ul id="wd-todo-list" className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
          >
            <span className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
              />
              {!todo.editing && (
                <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
              )}
              {todo.editing && (
                <input
                  className="rounded border border-neutral-300 px-2 py-0.5"
                  value={todo.title}
                  onChange={(e) =>
                    setTodos(
                      todos.map((t) =>
                        t.id === todo.id ? { ...todo, title: e.target.value } : t,
                      ),
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateTodo({ ...todo, editing: false });
                    }
                  }}
                />
              )}
            </span>
            <span className="flex items-center gap-2">
              <FaPencilAlt
                onClick={() => editTodo(todo)}
                className="cursor-pointer text-blue-600"
                title="Edit"
              />
              <FaTrash
                onClick={() => removeTodo(todo)}
                id="wd-remove-todo"
                className="cursor-pointer text-red-600"
                title="Remove with GET"
              />
              <TiDelete
                onClick={() => deleteTodo(todo)}
                id="wd-delete-todo"
                className="cursor-pointer text-2xl text-red-600"
                title="Delete with HTTP DELETE"
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
