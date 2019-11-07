import request from "../../../service/";
const api = new request();

export const getUser = async () => {
  console.log("E finaliza no Service Requests sem nada populado");
  try {
    let response = await api.get(`pokemon/ditto/`);
    return response;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) return null;
      throw Error(error.response.data.message);
    }
    throw Error(error.message);
  }
};
