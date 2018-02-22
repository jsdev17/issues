import React from 'react';
import { Link } from 'react-router-dom';

const Issue = ({issue}) => (
  <li id={issue.id} number={issue.number} className="issue">
    <div className='card text-center' style={styles.issue_card}> 
      <div className='card-body'>
        <h5 className='card-title' style={styles.issue_title}>{issue.title}</h5>
        <h6 className='card-subtitle mb-2 price' style={styles.issue_price}>{`$${issue.price}`}</h6>
        <p className='card-text'
          style={styles.issue_assignee}
        >
          {issue.stage === 'active' ? <p>Assigned to: {issue.assignee}</p> : ''}
        </p>
        <span className='card-text text-muted' style={styles.issue_due_date}> 
          Due on: {issue.due_date}
        </span>
      </div>
      <div className='card-footer text-center' style={styles.issue_card_footer}>
        <Link to={issue.html_url} target="_blank">
          <span className="">View on GitHub</span>
        </Link>
      </div>
    </div>
  </li>
);

var styles = {
  issue_card: {
    width: '18rem',
    padding: '10px',
    background: '#eee'
  },
  issue_title: {
    fontSize: '17px'
  },
  issue_price: {
    fontSize: '14px'
  },
  issue_assignee: {
    fontSize: '14px'
  },
  issue_due_date: {
    fontSize: '12px'
  },
  issue_card_footer: {
    fontSize: '12px',
    background: 'none'
  }
}

export default Issue;