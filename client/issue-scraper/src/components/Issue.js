import React from 'react';
import { Link } from 'react-router-dom';

const Issue = ({issue}) => (
  <li id={issue.id} number={issue.number} className="issue">
    <div>
      <button className="" type="button" data-toggle="collapse"
        data-target={`#issue${issue.number}`} aria-expanded="false" aria-controls={`issue${issue.number}`}>
        <span className="issue-title">{issue.title}</span>
        <span className="price">[$$$]</span>
      </button>
    </div>
    <div className="collapse" id={`issue${issue.number}`}>
      <div className="card card-block" style={{maxWidth: '85%'}}>
        <Link to={issue.html_url} target="_blank">
          <p>Some more information and a link here</p>
        </Link>
      </div>
    </div>
  </li>
);

export default Issue;