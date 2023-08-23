import EducationSync from "./Forms/Education";
import ExperienceSync from "./Forms/Experience";
import { PersonalSync } from "./Forms/PersonalDetails";

function Resume() {
  return (
    <>
      <PersonalSync />
      <EducationSync />
      <ExperienceSync />
    </>
  );
}

export default Resume;
