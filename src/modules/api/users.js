import {
  Endpoint
} from "./Endpoint";

const userEndpoint = new Endpoint("http://localhost:8088/users");


export const users = {
  getUserByID: (id) => userEndpoint.read(`/${id}`),
  searchForUser: () => userEndpoint.read("?")
};