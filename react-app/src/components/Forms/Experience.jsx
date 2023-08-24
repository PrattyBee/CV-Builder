function Experience({ compName, position, start, end, location, description }) {
  return (
    <div className="experience">
      <div>
        <p>
          {start} - {end}
        </p>
        <p>{location}</p>
      </div>
      <div>
        <h3>{compName}</h3>
        <p>{position}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ExperienceForm({
  compName,
  position,
  start,
  end,
  location,
  description,
  handleChange,
}) {
  return (
    <form>
      <div>
        <label htmlFor="compName">Company Name</label>
        <input
          type="text"
          id="compName"
          name="compName"
          placeholder="Enter Company Name"
          value={compName}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="position">Position Title</label>
        <input
          type="text"
          id="position"
          name="position"
          placeholder="Enter Position Title"
          value={position}
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
          id="location"
          name="location"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name=""
          id="description"
          placeholder="Enter Description"
          onChange={(e) => handleChange(e)}
          value={description}
        ></textarea>
      </div>
    </form>
  );
}
export { Experience, ExperienceForm };
