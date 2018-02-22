import React from 'react';
import { Link } from 'react-router-dom';

const Repo = ({repo}) => (
  <li id={repo.id} className="repo">
    <div className="card text-center" style={styles.repo_card}>
      <div className="card-body repo-title">
        <Link to={repo.html_url} target="_blank" style={styles.repo_title}>
          <h5 className="card-title">{repo.name}</h5>
        </Link>
        <h6 className="card-subtitle mb-2 text-muted">Issues: {repo.open_issues_count}</h6>
        <p className="card-text">{repo.description}</p>
      </div>
    </div>
    <div className="card-footer text-center" style={styles.repo_card_footer}>
        <Link to={`/${repo.owner.login}/${repo.name}/issues`}
          className="card-link" style={styles.repo_view_issues}
        >
          View Issues
        </Link>
    </div>
  </li>
);

const styles = {
  repo_card: {
    width: '18rem',
    padding: '10px',
    maxHeight: '135px',
    minHeight: '135px',
    fontSize: '14px'
  },
  repo_title: {
    textDecoration: 'none',
  },
  repo_card_footer: {
    background: '#222'
  },
  repo_view_issues: {
    color: '#eee'
  }
}
 // truncate: {
  //   fontSize: '12px',
  //   width: '100%',
  //   whiteSpace: 'nowrap',
  //   overflow: 'hidden',
  //   textOverflow: 'ellipsis'
  // }

export default Repo;