import {
  Endpoint
} from "./Endpoint";



const interestsEndpoint = new Endpoint("http://localhost:8088/interests");


export const interests = {
  addNewInterest: (obj) => interestsEndpoint.create(obj),
  getInterests: (id) => interestsEndpoint.read(`/${id}`),
  searchForUser: () => interestsEndpoint.read("?")
};