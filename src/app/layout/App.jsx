import React from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/eventDashboard/EventDashboard";
import NavBar from "../../features/event/nav/navBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </div>
  );
}

export default App;
