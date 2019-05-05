import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../eventList/EventList";
import EventForm from "../eventForm/EventForm";

class EventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>
            <Button color="blue" content="Create Event" />
            <EventForm />
          </h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
