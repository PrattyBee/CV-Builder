import { useState } from "react";

function EducationForm({ school, degree, start, end, location, handleChange }) {
  return (
    <form>
      <div>
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          name="school"
          placeholder="Enter school / university"
          value={school}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          name="degree"
          placeholder="Enter Degree / Field Of Study"
          value={degree}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="start">Start Date</label>
        <input
          type="date"
          id="start"
          name="start"
          placeholder="Enter Start Date"
          value={start}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="end">End Date</label>
        <input
          type="date"
          id="end"
          name="end"
          placeholder="Enter End Date"
          value={end}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </form>
  );
}

function Education({ school, degree, start, end, location }) {
  return (
    <div className="education">
      <div>
        <p>
          {start} - {end}
        </p>
        <p>{location}</p>
      </div>
      <div>
        <h3>{school}</h3>
        <p>{degree}</p>
      </div>
    </div>
  );
}

function EducationSync() {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    start: "",
    end: "",
    location: "",
  });

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
    </>
  );
}

export default EducationSync;
