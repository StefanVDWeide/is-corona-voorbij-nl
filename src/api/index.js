import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `https://disease.sh/v3/covid-19`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};
