import React from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import EventDashboard from "../../features/event/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/navBar/NavBar";
import PeopleDashboard from "../../features/user/peopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/userDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/settings/SettingsDashboard";
import EventForm from "../../features/event/eventForm/EventForm";
import EventDetailedPage from "../../features/event/eventDetailed/EventDetailedPage";
import HomePage from "../../features/home/HomePage";
import TestComponent from "../../features/testarea/TestComponent";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>

      <Route
        path="/(.+)"
        render={() => (
          <div>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path="/events" component={EventDashboard} />
                <Route path="/test" component={TestComponent} />
                <Route path="/event/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Switch>
            </Container>
          </div>
        )}
      />
    </div>
  );
}

export default App;
