import { useState } from "react";
import { PersonalSync } from "./Forms/PersonalDetails";

function Resume() {
  const personal = PersonalSync();
  return (
    <>
      {personal[0]}
      {personal[1]}
    </>
  );
}

export default Resume;
