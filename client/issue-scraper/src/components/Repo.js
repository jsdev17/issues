import React from 'react';
import { Link } from 'react-router-dom';

const Repo = ({repo}) => (
  <li id={repo.id} className="card text-center repo" style={{width: '25rem'}}>
    {/* <div className="card-header">
      {repo.full_name}
    </div> */}
    <div className="card-block" style={{background: "#eee"}}>
      <Link to={repo.html_url} target="_blank">
        <h4 className="card-title">{repo.name}</h4>
      </Link>
      <h6 class="card-subtitle mb-2 text-muted">Owned by: {repo.owner.login}</h6>
      <p className="card-text">{repo.description}</p>
      <Link to={`/${repo.owner.login}/${repo.name}/issues`}>
        <a href="#" className="card-link">View Issues</a>
      </Link>
    </div>
    {/*optional text-muted class ommited*/}
    <div className="card-footer" style={{background: "#222", color: "#eee"}}>
      Issues: {repo.open_issues_count}
    </div>
  </li>
);

export default Repo;