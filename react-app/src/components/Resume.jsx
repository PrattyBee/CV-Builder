import EducationSync from "./Forms/Education";
import { PersonalSync } from "./Forms/PersonalDetails";

function Resume() {
  return (
    <>
      <PersonalSync />
      <EducationSync />
    </>
  );
}

export default Resume;
