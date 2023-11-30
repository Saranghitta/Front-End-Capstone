import React, { useState } from "react";
import "./BookingForm.css"

function BookingForm({ availableTimes, updateAvailableTimes, updateTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [party, setParty] = useState("");
  const [occasion, setOccasion] = useState("none");

  const clearForm = () => {
    setDate("");
    setTime("");
    setParty("");
    setOccasion("none");
  };

  const isFormValid = () => {
    return date && time && party;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation Successful!");
    clearForm();

    const newAvailableTimes = [...availableTimes, "New Time"];
    updateAvailableTimes(newAvailableTimes);
  };

  return (
    <div className="form-container">
      <h1 className="form-header">Let us know about your reservation</h1>
      <form onSubmit={handleSubmit} className="form-input">
      <label htmlFor="res-date" aria-label="Choose date">Choose date</label>
            <input
            type="date"
            id="res-date"
            className="form-date"
            value={date}
            onChange={(e) => {
                setDate(e.target.value);
                updateTimes(e.target.value);
            }}
            required
            />
            <label htmlFor="res-time" aria-label="Choose time">Choose time</label>
            <select id="res-time " className="form-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>
            <label htmlFor="guests" aria-label="Number of guests">Number of guests</label>
            <input type="number" className="form-party" placeholder="1" min="1" max="10" id="guests"  value={party} onChange={(e) => setParty(e.target.value)} required/>
            <label htmlFor="occasion" aria-label="Occasion">Occasion</label>
            <select id="occasion" className="form-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="none">None</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
            <input className="form-submit" type="submit" value="Make Your reservation" aria-label="Submit Reservation" disabled={!isFormValid()}/>
      </form>
    </div>
  );
}

export default BookingForm;

export function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }