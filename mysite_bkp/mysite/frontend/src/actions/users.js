import axios from "axios";
import { GET_USERS } from "./types";

export const getUsers = () => dispatch => {
  axios
    .get("/api/usuario/")
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
