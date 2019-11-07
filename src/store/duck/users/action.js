import { UserTypes } from "./types";

export const user = () => {
  console.log("Bate na Action com a Request");
  const result = {
    type: UserTypes.SYSTEM,
  };
  return result;
};
export const userSuccess = payload => {
  console.log("Volta na Action com Sucesso");
  const result = {
    type: UserTypes.SYSTEM_SUCCESS,
    payload,
  };
  return result;
};
export const userFailure = payload => ({
  type: UserTypes.SYSTEM_FAILURE,
  payload,
});
