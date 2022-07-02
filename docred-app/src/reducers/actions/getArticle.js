import { types } from "../types/types";
import { peticionGET } from "../../helpers/fetch";

export const getArticle = () => {
    return async (dispatch) => {
      const endpoint = 'obtenerArticulo';
      const resp = await peticionGET(endpoint, "GET");
      const body = await resp.json();
      console.log(body)
      dispatch({
        type: types.article,
        payload: body,
      });
    };
  };
  