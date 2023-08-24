import EducationSync from "./Forms/Education";
import ExperienceSync from "./Forms/Experience";
import { useState } from "react";
import { PersonalDetails, PersonalDetailsForm } from "./Forms/PersonalDetails";

function Resume() {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  function educationChange(e) {
    const elementId = e.target.id;
    const value = e.target.value;
    if (elementId === "fullName") {
      setPersonal({ ...personal, name: value });
    } else if (elementId === "email") {
      setPersonal({ ...personal, email: value });
    } else if (elementId === "phoneNumber") {
      setPersonal({ ...personal, phone: value });
    } else if (elementId === "address") {
      setPersonal({ ...personal, address: value });
    }
  }

  return (
    <>
      <PersonalDetails
        name={personal.name}
        email={personal.email}
        phone={personal.phone}
        address={personal.address}
      />

      <PersonalDetailsForm
        name={personal.name}
        email={personal.email}
        phone={personal.phone}
        address={personal.address}
        handleChange={educationChange}
      />
      <EducationSync />
      <ExperienceSync />
    </>
  );
}

export default Resume;
