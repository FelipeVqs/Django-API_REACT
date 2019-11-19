import { GET_USERS } from "../actions/types.js";

const initialState = {
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...setTimeout,
        users: action.payload
      };
    default:
      return state;
  }
}
