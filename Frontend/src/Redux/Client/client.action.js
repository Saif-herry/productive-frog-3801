import axios from "axios";
import * as types from "./client.actionTypes";

export const getClientAPI = (token) => (dispatch) => {
  dispatch({ type: types.GET_CLIENT_LOADING });

  return axios
    .get("https://determined-gaiters-deer.cyclic.app/client", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      console.log('resFROMSTORE:', res)
      dispatch({ type: types.GET_CLIENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CLIENT_FAILED });
    });
};

export const createClientAPI = (client,token) => (dispatch) => {
  console.log('tokenFromRedux:', token)
  console.log('clientFromRedux:', client)
  return axios.post("https://determined-gaiters-deer.cyclic.app/client",client, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const updateClientAPI = (id, updated_client, token) => (dispatch) => {
  return axios.patch(
    `https://determined-gaiters-deer.cyclic.app/client/${id}`,
    updated_client,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const deleteClientAPI = (id, token) => (dispatch) => {
  return axios.delete(
    `https://determined-gaiters-deer.cyclic.app/client/${id}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};
