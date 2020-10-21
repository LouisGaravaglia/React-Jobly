import React from "react";

function JobCard({ item = {}, handleApply }) {

  return (
    <div className="Card card">
      <div className="card-body">
        <h6 className="card-title d-flex justify-content-between">
          <span className="text-capitalize">{item.title}</span>
        </h6>
        <div>Salary: {item.salary}</div>
        <div>Equity: {item.equity}</div>
        <button
          className="btn btn-danger font-weight-bold text-uppercase float-right"
          onClick={handleApply}
          disabled={item.state}
        >
          {item.state ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;
