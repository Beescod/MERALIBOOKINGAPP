import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css"; // Import the CSS file

const SpaForm = () => {
  const [provision, setProvision] = useState("");
  const [chosenService, setChosenService] = useState("");
  const [bookingDate, setBookingDate] = useState(null);

  const provisionOptions = [
    "Les Massages",
    "La Coiffure",
    "L'Onglerie",
    "Les Soins du Visage",
    "L'Ésthetique",
    "Le Laser",
  ];
  
  const services = {
    "Les Massages": ["Swedish", "Deep Tissue", "Hot Stone"],
    "La Coiffure": ["Cut", "Coloring", "Styling"],
    "L'Onglerie": ["Basic Manicure", "Gel Nails", "Nail Art"],
    "Les Soins du Visage": ["Anti-aging", "Hydrating", "Brightening"],
    "L'Ésthetique": ["Waxing", "Threading", "Tinting"],
    "Le Laser": ["Hair Removal", "Skin Rejuvenation", "Scar Treatment"],
  };

  const handleProvisionChange = (e) => {
    setProvision(e.target.value);
    setChosenService("");
  };

  return (
    <form className="spa-form">
      <div className="form-group">
        <label className="form-label">Provision *</label>
        <select
          className="form-input"
          value={provision}
          onChange={handleProvisionChange}
        >
          <option value="">Select a provision</option>
          {provisionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {provision && (
        <div className="form-group">
          <label className="form-label">Choose your {provision} *</label>
          <select
            className="form-input"
            value={chosenService}
            onChange={(e) => setChosenService(e.target.value)}
          >
            <option value="">Select a service</option>
            {services[provision].map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="form-group">
        <label className="form-label">Booking date *</label>
        <DatePicker
          className="form-input"
          selected={bookingDate}
          onChange={(date) => setBookingDate(date)}
          dateFormat="yyyy/MM/dd"
          placeholderText="Select a date"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Title *</label>
        <select className="form-input">
          <option value="">Select Title</option>
          <option value="Miss">Miss</option>
          <option value="Madam">Madam</option>
          <option value="Mr">Mr</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Name *</label>
        <input
          className="form-input"
          type="text"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Forename *</label>
        <input
          className="form-input"
          type="text"
          placeholder="Enter your forename"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">E-mail *</label>
        <input
          className="form-input"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Rewrite the email address *</label>
        <input
          className="form-input"
          type="email"
          placeholder="Confirm your email"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Are you a resident of the hotel? *</label>
        <select className="form-input">
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Observations</label>
        <textarea
          className="form-textarea"
          placeholder="Write your observations here"
        ></textarea>
      </div>

      <div className="form-group form-checkbox">
        <input type="checkbox" required />{" "}
        <label>
          J'ai read and j'accept{" "}
          <a href="/legal-notices" target="_blank" className="form-link">
            legal notices
          </a>{" "}
          in particular the mention relating to the protection of personal data.
        </label>
      </div>

      <button type="submit" className="form-button">
        Send My Request
      </button>
    </form>
  );
};

export default SpaForm;
