import React from 'react';

const FilterBy = (props) => (
  <div className="btn-group d-flex justify-content-center"
    role="group" aria-label="Basic example"
    style={{marginBottom: '10px'}}
  >
    <button type="button" className="btn btn-secondary">Open</button>
    <button type="button" className="btn btn-secondary">Assigned</button>
    <button type="button" className="btn btn-secondary">Closed</button>
  </div>
);

export default FilterBy;