import {
  Endpoint
} from "./Endpoint";



const interestsEndpoint = new Endpoint("http://localhost:8088/interests");


export const users = {
  getInterests: (id) => interestsEndpoint.read(`/${id}`),
  searchForUser: () => interestsEndpoint.read("?")
};