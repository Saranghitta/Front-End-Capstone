import React, { useReducer } from "react";
import BookingHero from "./BookingHero";
import BookingForm, { initializeTimes } from "./BookingForm";

const INIT_TIMES = "INIT_TIMES";
const UPDATE_TIMES = "UPDATE_TIMES";

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case INIT_TIMES:
      return action.payload;
    case UPDATE_TIMES:
      return action.payload;
    default:
      return state;
  }
};

function BookingPage() {
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );

  function updateTimes(date) {
    dispatchAvailableTimes({ type: UPDATE_TIMES, payload: initializeTimes() });
  }

  return (
    <div data-testid="booking-page"> {/* Add data-testid here */}
      <BookingHero />
      <BookingForm
        availableTimes={availableTimes}
        updateAvailableTimes={(newTimes) =>
          dispatchAvailableTimes({ type: INIT_TIMES, payload: newTimes })
        }
        updateTimes={updateTimes}
      />
    </div>
  );
}

export default BookingPage;
