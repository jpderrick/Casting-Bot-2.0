import { actionTypes } from "./actionTypes";

export const createNewPlay = (response) => {
  return {
    type: actionTypes.CREATE_NEW_PLAY,
    data: response,
  };
};

export const setPlaysData = (response) => {
  return {
    type: actionTypes.GET_PLAYS_OK,
    data: response,
  };
};

export const setPlaysFailed = (response) => {
  return {
    type: actionTypes.GET_PLAYS_FAIL,
    data: response,
  };
};

export const setSeasonsData = (response) => {
  return {
    type: actionTypes.GET_SEASONS_DATA,
    data: response,
  };
};

export const createNewSeason = (seasonData) => {
  return {
    type: actionTypes.NEW_SEASON,
    data: seasonData,
  };
};
