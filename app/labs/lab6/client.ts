// Every lab 6 request to the server goes through this one file
import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const TODOS_API = `${HTTP_SERVER}/lab6/todos`;
export const fetchConnectionStatus = async () => {
  const response = await axios.get(`${HTTP_SERVER}/lab6/status`);
  return response.data;
};
export const findAllTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};
export const findCompletedTodos = async () => {
  const response = await axios.get(`${TODOS_API}?completed=true`);
  return response.data;
};
export const createTodo = async (todo: { title: string }) => {
  const response = await axios.post(TODOS_API, todo);
  return response.data;
};
export const updateTodo = async (todo: { _id: string }) => {
  const response = await axios.put(`${TODOS_API}/${todo._id}`, todo);
  return response.data;
};
export const deleteTodo = async (todoId: string) => {
  const response = await axios.delete(`${TODOS_API}/${todoId}`);
  return response.data;
};
