import React from "react";
import "./App.css"

function JobCard({ item = {}, handleApply }) {

  return (
    <div className="JobCard">

        <h3>
          <span>{item.title}</span>
        </h3>
        <div>Salary: {item.salary}</div>
        <div>Equity: {item.equity}</div>
        <button
          onClick={handleApply}
          disabled={item.state}
        >
          {item.state ? "Applied" : "Apply"}
        </button>

    </div>
  );
}

export default JobCard;
