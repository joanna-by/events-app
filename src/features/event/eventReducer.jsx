import { createReducer } from "../../app/common/util/reducerUtil";
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstance";

const initialState = [
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

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
  ];
};

export const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
});
