import React from "react";
import EventDashboard from "../../features/event/eventDashboard/EventDashboard";
import NavBar from "../../features/event/nav/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <EventDashboard />
    </div>
  );
}

export default App;
