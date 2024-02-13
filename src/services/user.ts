import axios from "axios";
import { requestHandler } from "./requestHandler";

export interface IUser {
  id: number;
  name: string;
}

interface GetUsersParams {
  limit?: number;
  page?: number;
}

export const getUsers = requestHandler<GetUsersParams, IUser[]>((params) =>
  axios.get("https://jsonplaceholder.typicode.com/users", { params })
);
