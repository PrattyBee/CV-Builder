import { useState } from "react";

function PersonalDetails({ name, email, phone, address }) {
  return (
    <div className="personal">
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h2>{phone}</h2>
      <h2>{address}</h2>
    </div>
  );
}

function PersonalDetailsForm({ name, email, phone, address, handleChange }) {
  return (
    <form className="personal-form">
      <h2>Personal Details</h2>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="First and last name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="City, Country"
          value={address}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </form>
  );
}

export { PersonalDetails, PersonalDetailsForm };
