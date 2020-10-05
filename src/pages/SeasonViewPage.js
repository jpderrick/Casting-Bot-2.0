import React, { useState, useEffect } from "react";
import { withStyles, List, LinearProgress, Button } from "@material-ui/core";
import { actionTypes } from "../redux/actions/actionTypes";
import PlayListItem from "../components/PlayListItem";
import SeasonPageHeader from "../components/SeasonPageHeader";
import { connect } from "react-redux";
import { setPlaysData, setPlaysFailed } from "../redux/actions/actionCreators";
import LoadingBar from "../components/LoadingBar";
import GenericError from "../components/GenericError";
const styles = (theme) => ({
  playList: { marginTop: theme.spacing() },
});

const SeasonViewPage = ({
  classes,
  setGetPlays,
  loadingPlays,
  failedLoadingPlays,
  playsData,
  setPlaysLoadFailed,
  setAllPlaysData,
  ...props
}) => {
  const getAllPlays = () => {
    setGetPlays();
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => {
        if (response.status !== 200) {
          setPlaysLoadFailed(response.status);
          return;
        }
        response.json().then((plays) => {
          console.log(plays);
          setAllPlaysData(plays.all);
        });
      })
      .catch((err) => {
        setPlaysLoadFailed(err + "");
      });
  };
  useEffect(() => {
    getAllPlays();
  }, []);
  return (
    <div>
      {loadingPlays && <LoadingBar />}
      {failedLoadingPlays && <GenericError message={playsData} />}
      {!loadingPlays && !failedLoadingPlays && (
        <div>
          <SeasonPageHeader />

          <List className={classes.playList}>
            {playsData.map((play, index) => {
              return <PlayListItem key={index} data={play} />;
            })}
          </List>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { GET_PLAYS_LOADING, GET_PLAYS_FAIL, PLAYS_DATA } = state;
  return {
    loadingPlays: GET_PLAYS_LOADING,
    failedLoadingPlays: GET_PLAYS_FAIL,
    playsData: PLAYS_DATA,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setGetPlays: () => dispatch({ type: actionTypes.GET_PLAYS_LOADING }),
    setPlaysLoadFailed: (error) => dispatch(setPlaysFailed(error)),
    setAllPlaysData: (data) => dispatch(setPlaysData(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SeasonViewPage));
