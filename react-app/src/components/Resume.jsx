import { useState } from "react";
import { PersonalDetails, PersonalDetailsForm } from "./Forms/PersonalDetails";
import { Education, EducationForm } from "./Forms/Education";
import { Experience, ExperienceForm } from "./Forms/Experience";

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

  const [experience, setExperience] = useState({
    compName: "",
    position: "",
    start: "",
    end: "",
    location: "",
    description: "",
  });

  function personalChange(e) {
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

  function educationChange(e) {
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

  function experienceChange(e) {
    const elementId = e.target.id;
    const value = e.target.value;
    if (elementId === "compName") {
      setExperience({ ...experience, compName: value });
    } else if (elementId === "position") {
      setExperience({ ...experience, position: value });
    } else if (elementId === "start") {
      setExperience({ ...experience, start: value });
    } else if (elementId === "end") {
      setExperience({ ...experience, end: value });
    } else if (elementId === "location") {
      setExperience({ ...experience, location: value });
    } else if (elementId === "description") {
      setExperience({ ...experience, description: value });
    }
  }

  return (
    <>
      <div>
        <PersonalDetails
          name={personal.name}
          email={personal.email}
          phone={personal.phone}
          address={personal.address}
        />

        <Education
          school={education.school}
          degree={education.degree}
          start={education.start}
          end={education.end}
          location={education.location}
        />

        <Experience
          compName={experience.compName}
          position={experience.position}
          start={experience.start}
          end={experience.end}
          location={experience.location}
          description={experience.description}
        />
      </div>
      <div>
        <PersonalDetailsForm
          name={personal.name}
          email={personal.email}
          phone={personal.phone}
          address={personal.address}
          handleChange={personalChange}
        />
        <EducationForm
          school={education.school}
          degree={education.degree}
          start={education.start}
          end={education.end}
          location={education.location}
          handleChange={educationChange}
        />

        <ExperienceForm
          compName={experience.compName}
          position={experience.position}
          start={experience.start}
          end={experience.end}
          location={experience.location}
          description={experience.description}
          handleChange={experienceChange}
        />
      </div>
    </>
  );
}

export default Resume;
