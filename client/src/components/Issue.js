import React from 'react';
import { Link } from 'react-router-dom';

const assignBadgeType = (stage) => (
  stage === "active" ? "active" : "" ||
  stage === "open" ? "open" : "" || 
  stage === "closed" ? "closed" : ""
);
const assignBadgeClass = (stage) => (
  stage === "active" ? "badge-success" : "" ||
  stage === "open" ? "badge-primary" : "" || 
  stage === "closed" ? "badge-danger" : ""
);

const Issue = ({issue}) => (
  // OPTION 1
  <li id={issue.id} number={issue.number} className="issue">
    {/* <div>
      <button className="issue-body" type="button" data-toggle="collapse"
        data-target={`#issue${issue.number}`} aria-expanded="false" aria-controls={`issue${issue.number}`}>
        <span className={`badge ${assignBadgeClass(issue.stage)}`} style={{margin: '5px', marginRight: 'auto'}}>
          {assignBadgeType(issue.stage)}
        </span>
        <span className="issue-title">{issue.title}</span>
        <span className="price">{`$${issue.price}`}</span>
      </button>
    </div>
    <div className="collapse" id={`issue${issue.number}`}>
      <div className="" style={{maxWidth: '85%', padding: '5px', backgroundColor: '#eee'}}>
        <p className="due-date">Due Date: {issue.due_date}</p>
        {issue.stage === 'active' ? <p>Assigned to: [DevName]</p> : ''}
        <Link to={issue.html_url} target="_blank">
        <p style={{fontSize: '12px', display: 'inline-block'}}>View on GitHub</p>
        </Link>
      </div>
    </div> */}

    <div className='card' style={{width: '18rem', padding: '10px', background: '#eee'}}> 
      <div className='card-body'>
        <h5 className='card-title' style={{fontSize: '17px'}}>{issue.title}</h5>
        <h6 className='card-subtitle mb-2 price' style={{fontSize: '14px'}}>{`$${issue.price}`}</h6>
        <p className='card-text'
          style={{fontSize: '14px'}}
        >
          {issue.stage === 'active' ? <p>Assigned to: [DevName]</p> : ''}
        </p>
      </div>
      <div className='card-footer text-center' style={{fontSize: '12px', background: 'none'}}>
        <Link to={issue.html_url} target="_blank">
          <span className="">View on GitHub</span>
        </Link>
      </div>
    </div>
  </li>
);

export default Issue;