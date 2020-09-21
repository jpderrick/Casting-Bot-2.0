import React from "react";
import { Switch, Route } from "react-router-dom";
import SeasonsPage from "../pages/SeasonsPage";
import SeasonViewPage from "../pages/SeasonViewPage";
import SettingsPage from "../pages/SettingsPage";
import CastingMeetingPage from "../pages/CastingMeetingPage";

const AppRouting = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/seasons">
          <SeasonsPage />
        </Route>
        <Route path="/seasons/:id">
          <SeasonViewPage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/casting/:id">
          <CastingMeetingPage />
        </Route>
        <Route path="/people">
          List of people in system - just name and uni username?
        </Route>
        <Route path="/">Home</Route>
      </Switch>
    </div>
  );
};

export default AppRouting;
