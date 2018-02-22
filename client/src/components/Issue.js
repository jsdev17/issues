import React from 'react';
import { Link } from 'react-router-dom';

const Issue = ({issue}) => (
  <li id={issue.id} number={issue.number} className="issue">
    <div className='card text-center' style={{width: '18rem', padding: '10px', background: '#eee'}}> 
      <div className='card-body'>
        <h5 className='card-title' style={{fontSize: '17px'}}>{issue.title}</h5>
        <h6 className='card-subtitle mb-2 price' style={{fontSize: '14px'}}>{`$${issue.price}`}</h6>
        <p className='card-text'
          style={{fontSize: '14px'}}
        >
          {issue.stage === 'active' ? <p>Assigned to: {issue.assignee}</p> : ''}
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