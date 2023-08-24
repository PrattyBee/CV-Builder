import ExperienceSync from "./Forms/Experience";
import { useState } from "react";
import { PersonalDetails, PersonalDetailsForm } from "./Forms/PersonalDetails";
import { Education, EducationForm } from "./Forms/Education";

function Resume() {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    start: "",
    end: "",
    location: "",
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

  function handleChange(e) {
    const elementId = e.target.id;
    const value = e.target.value;
    if (elementId === "school") {
      setEducation({ ...education, school: value });
    } else if (elementId === "degree") {
      setEducation({ ...education, degree: value });
    } else if (elementId === "start") {
      setEducation({ ...education, start: value });
    } else if (elementId === "end") {
      setEducation({ ...education, end: value });
    } else if (elementId === "location") {
      setEducation({ ...education, location: value });
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
      <Education
        school={education.school}
        degree={education.degree}
        start={education.start}
        end={education.end}
        location={education.location}
      />
      <EducationForm
        school={education.school}
        degree={education.degree}
        start={education.start}
        end={education.end}
        location={education.location}
        handleChange={handleChange}
      />
      <ExperienceSync />
    </>
  );
}

export default Resume;
