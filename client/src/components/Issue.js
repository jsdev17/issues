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
    <div>
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
    </div>
  </li>

  // OPTION 2
  // <div className="card" style={{maxWidth: '70%'}}>
  //   <div className="card-header" role="tab" id={`heading${issue.number}`}>
  //     <h5 className="mb-0">
  //       <a data-toggle="collapse" data-parent="#accordion" href={`#issue${issue.number}`} aria-controls={`issue${issue.number}`}>
  //         <span className="issue-title">{issue.title}</span> <span className="price">[$$$]</span>
  //       </a>
  //     </h5>
  //   </div>

  //   <div id={`issue${issue.number}`} className="collapse" role="tabpanel" aria-labelledby={`heading${issue.number}`}>
  //     <div className="card-block">
  //       <p>{issue.body}</p>
  //       <Link to={issue.html_url} target="_blank">
  //         <button>View on GitHub</button>
  //       </Link>
  //     </div>
  //   </div>
  // </div>
);

export default Issue;