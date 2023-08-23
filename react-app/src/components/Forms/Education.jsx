function EducationForm({ school, degree, start, end, location, handleChange }) {
  return (
    <form>
      <div>
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          name="school"
          placeholder="Eneter school / university"
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

export default EducationForm;
