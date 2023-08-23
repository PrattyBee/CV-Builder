import { useState } from "react";

function ExperienceForm(compName, position, start, end, location, description) {
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
        />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter Location"
          value={position}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea name="" id="description" placeholder="Enter Description">
          {description}
        </textarea>
      </div>
    </form>
  );
}
