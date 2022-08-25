import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/";
const characterUrl = baseUrl + "character/";

export const getMorty = () => {
  return axios.get(characterUrl + "2").then((res) => res.data);
};
