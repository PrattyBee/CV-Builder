import { useState } from "react";

const [personal, setPersonal] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
});

const [show, setShow] = useState(false);

function PersonalDetails() {
  return (
    <div className="resume-personal">
      <h1>{personal.name}</h1>
      <h2>{personal.email}</h2>
      <h2>{personal.phone}</h2>
      <h2>{personal.address}</h2>
    </div>
  );
}

function PersonalDetailsForm() {
  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First and last name"
          value={personal.name}
          required
          onChange={(e) => setPersonal({ ...personal, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          value={personal.email}
          required
          onChange={(e) => setPersonal({ ...personal, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter phone number"
          value={personal.phone}
          required
          onChange={(e) => setPersonal({ ...personal, phone: e.target.value })}
        />
      </div>
    </form>
  );
}

export { PersonalDetailsForm, PersonalDetails };
