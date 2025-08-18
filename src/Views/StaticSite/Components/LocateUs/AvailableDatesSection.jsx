import React, { useState } from 'react';
import './AvailableDatesSection.scss';

// Dates Data (could come from an API)
const RETREAT_DATES = [
  { id: 1, label: "Retreat 1", range: "14th June 2025 to 15th June 2025", duration: "(1 Night, 2 Days)" },
  { id: 2, label: "Retreat 2", range: "28th June 2025 to 29th June 2025", duration: "(1 Night, 2 Days)" },
  { id: 3, label: "Retreat 3", range: "5th July 2025 to 6th July 2025", duration: "(1 Night, 2 Days)" },
  { id: 4, label: "Retreat 4", range: "12th July 2025 to 13th July 2025", duration: "(1 Night, 2 Days)" },
  { id: 5, label: "Retreat 5", range: "26th July 2025 to 27th July 2025", duration: "(1 Night, 2 Days)" },
  { id: 6, label: "Retreat 6", range: "2nd August 2025 to 3rd August 2025", duration: "(1 Night, 2 Days)" },
];

// Popup Modal
const DatesModal = ({ open, onClose, dates }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="dates-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="modal-title">Available Dates - Forest Yoga Retreat</div>
        <div className="modal-list">
          {dates.map(date => (
            <div className="modal-date-row" key={date.id}>
              <span className="date-label">{date.label} - </span>
              <span className="date-range">{date.range}</span>
              <span className="date-duration"> {date.duration}</span>
              <button className="book-btn">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AvailableDatesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const PREVIEW_COUNT = 3;

  return (
    <div className="available-dates-wrapper">
      <div className="available-dates-title">Available Dates:</div>
      <div className="available-dates-list">
        {RETREAT_DATES.slice(0, PREVIEW_COUNT).map(date => (
          <div key={date.id} className="available-date-row">
            <span className="date-label">{date.label} - </span>
            <span className="date-range">{date.range}</span>
            <span className="date-duration"> {date.duration}</span>
          </div>
        ))}
      </div>
      {RETREAT_DATES.length > PREVIEW_COUNT && (
        <button className="view-all-dates-btn" onClick={() => setModalOpen(true)}>
          View all dates
        </button>
      )}
      <DatesModal open={modalOpen} onClose={() => setModalOpen(false)} dates={RETREAT_DATES} />
    </div>
  );
};

export default AvailableDatesSection;
