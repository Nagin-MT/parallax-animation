import React from "react";
import { IoIosAdd } from "react-icons/io";

const Course = ({ name, activeID, id, setActiveID }) => {
  return (
    <div
      className={`course-stick text-white border-4 p-4 border-primary relative ${
        activeID === id ? "active" : ""
      }`}
    >
      <p className="font-varela">{name}</p>

      <button
        className="flex view-button"
        onClick={() => setActiveID((prev) => (prev === id ? null : id))}
      >
        <IoIosAdd />
      </button>
    </div>
  );
};

export default Course;
