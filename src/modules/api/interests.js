import {
  Endpoint
} from "./Endpoint";



const interestsEndpoint = new Endpoint("http://localhost:8088/interests");


export const interests = {
  addNewInterest: (obj) => interestsEndpoint.create(obj),
  getInterests: (id) => interestsEndpoint.read(`/${id}`),
  editInterest: (obj, id) => interestsEndpoint.update(id, obj),
  searchForUser: () => interestsEndpoint.read("?"),
  deleteInterest: (id) => interestsEndpoint.delete(id)
};