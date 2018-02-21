import test from 'tape';
import getReposForUser from './api/v2/methods/getReposForUser';
import getIssuesForRepo from './api/v2/methods/getIssuesForRepo';

test('Assertions for getReposForUser([param]) method', (t) => {
  const isArray = true;
  getReposForUser('jsdev17')
  .then(res => {
    t.equal(Array.isArray(res), isArray,
    'returns an array');

    t.equal(res.length >= 1, true,
      'has at least one repository with issues');
  })
  // how many repos should you expect?
  t.end();
});

test('Assertions for getIssuesForRepo([param1], [param2]) method', (t) => {
  const isArray = true;
  getIssuesForRepo('jsdev17', 'reservations')
  .then(res => {
    t.equal(Array.isArray(res), isArray,
    'returns an array');

    t.equal(res.length >= 1, true, 
      'returns at least')
  })
  t.end();
});