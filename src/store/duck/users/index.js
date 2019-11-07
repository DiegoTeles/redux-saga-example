import { UserTypes } from "./types";

const INITIAL_STATE = {
  data: [],
  error: "",
  loading: true,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SYSTEM:
      console.log("Depois no Reducer", action.type);
      return {
        ...state,
      };
    case UserTypes.SYSTEM_SUCCESS:
      console.log(
        "Depois no Reducer com o sucesso populando a store",
        action.type,
      );

      return {
        ...state,
        data: action.payload || undefined,
        loading: false,
      };
    case UserTypes.SYSTEM_FAILURE:
      return {
        ...state,
        data: INITIAL_STATE,
        error: action.payload,
      };
    case UserTypes.CLEAR_STATUS:
      return {
        ...state,
        updated: false,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
