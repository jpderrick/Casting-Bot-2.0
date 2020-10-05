import { TrendingUpTwoTone } from "@material-ui/icons";
import { actionTypes } from "../actions/actionTypes";

const initState = {
  GET_PLAYS_LOADING: true,
  GET_PLAYS_FAIL: false,
  PLAYS_DATA: null,
};

export const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLAYS_FAIL:
      return {
        ...state,
        GET_PLAYS_LOADING: false,
        GET_PLAYS_FAIL: true,
        PLAYS_DATA: action.data,
      };
    case actionTypes.GET_PLAYS_OK:
      return {
        ...state,
        GET_PLAYS_LOADING: false,
        PLAYS_DATA: action.data,
      };
    case actionTypes.CREATE_NEW_PLAY:
      return {
        ...state,
        PLAYS_DATA: [...state.PLAYS_DATA, action.data],
      };

    default:
      return state;
  }
};
