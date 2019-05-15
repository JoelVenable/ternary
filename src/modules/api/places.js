import {
  Endpoint
} from "./Endpoint";


const placesEndpoint = new Endpoint("http://localhost:8088/places");


export const places = {
  getPlacesWithInterests: (optionalID) => {
    let id;
    if (!!optionalID) id = `/${id}`;
    else id = "";
    return placesEndpoint.read(`${id}?_embed=interests`);
  },
  searchForUser: () => placesEndpoint.read("?")
};