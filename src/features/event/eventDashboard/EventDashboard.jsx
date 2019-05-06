import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../eventList/EventList";
import EventForm from "../eventForm/EventForm";

const eventsDashboard = [
  {
    id: "1",
    title: "Trip to the Solidarity Museum",
    date: "2019-06-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus.",
    city: "Gdańsk, Poland",
    venue: "Solidarity Museum, Stoczniowa, Gdańsk",
    hostedBy: "Kuba",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/32.jpg",
    attendees: [
      {
        id: "a",
        name: "Zbychu",
        photoURL: "https://randomuser.me/api/portraits/men/5.jpg"
      },
      {
        id: "b",
        name: "Ania",
        photoURL: "https://randomuser.me/api/portraits/women/17.jpg"
      },
      {
        id: "c",
        name: "Ala",
        photoURL: "https://randomuser.me/api/portraits/men/15.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Evening in the Irish Pub",
    date: "2019-06-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus.",
    city: "Gdańsk, Poland",
    venue: "Irish Pub, Piwna, Gdańsk",
    hostedBy: "Zuza",
    hostPhotoURL: "https://randomuser.me/api/portraits/women/31.jpg",
    attendees: [
      {
        id: "b",
        name: "Ala",
        photoURL: "https://randomuser.me/api/portraits/women/15.jpg"
      },
      {
        id: "a",
        name: "Bartek",
        photoURL: "https://randomuser.me/api/portraits/men/27.jpg"
      },
      {
        id: "c",
        name: "Aniela",
        photoURL: "https://randomuser.me/api/portraits/women/43.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: eventsDashboard,
    isOpen: false,
    selectedEvent: null
  };

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    });
  };

  handleOpenEvent = eventToOpen => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = Math.random();
    newEvent.hostPhotoURL = "/assets/user.png";
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    });
  };

  handleDeleteEvent = eventId => () => {
    const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    this.setState({
      events: updatedEvents
    });
  };

  render() {
    const { selectedEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            onEventOpen={this.handleOpenEvent}
            events={this.state.events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>
            <Button
              onClick={this.handleFormOpen}
              color="blue"
              content="Create Event"
            />
            {this.state.isOpen && (
              <EventForm
                updateEvent={this.handleUpdateEvent}
                selectedEvent={selectedEvent}
                createEvent={this.handleCreateEvent}
                handleCancel={this.handleCancel}
              />
            )}
          </h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
