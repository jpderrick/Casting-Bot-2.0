import { actionTypes } from "./actionTypes";

const setSeasonsData = (response) => {
  return {
    type: actionTypes.GET_SEASONS_DATA,
    data: response,
  };
};

const createNewSeason = (seasonData) => {
  return {
    type: actionTypes.NEW_SEASON,
    data: seasonData,
  };
};
