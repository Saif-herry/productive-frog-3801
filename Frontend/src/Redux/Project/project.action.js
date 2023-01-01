import axios from "axios";
import * as types from "./project.actionTypes";

export const getProjectAPI = (token) => (dispatch) => {
  dispatch({ type: types.GET_PROJECT_LOADING });
  return axios
    .get("https://determined-gaiters-deer.cyclic.app/project", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      dispatch({ type: types.GET_PROJECT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_PROJECT_FAILED });
    });
};

export const createProjectAPI = (project,token) => (dispatch) => {
  return axios.post(
    "https://determined-gaiters-deer.cyclic.app/project",
    project,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const updateProjectAPI = (id, updated_project, token) => (dispatch) => {
  return axios.patch(
    `https://determined-gaiters-deer.cyclic.app/project/${id}`,
    updated_project,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const deleteProjectAPI = (id, token) => (dispatch) => {
  return axios.delete(
    `https://determined-gaiters-deer.cyclic.app/project/${id}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};
