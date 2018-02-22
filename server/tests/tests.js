import test from 'tape';
import api from '../api/v2/index'
import dataset from './test-dataset.json'

test('Assertions for getReposForUser([username]) method', (t) => {
  t.plan(3);
  const isArray = true;
  const expectedNumOfRepos = 12;
  api.getReposForUser('jsdev17')
  .then(res => {
    t.equal(Array.isArray(res), isArray,
    'returns an array');

    t.equal(res.length >= 1, true,
      'has at least one repository with issues');
    
    t.equal(res.length, expectedNumOfRepos,
      `this user should have ${expectedNumOfRepos} repositories. it has ${res.length}`);
  })
});

test('Searching for matching workitems in Mongo Collection...', (t) => {
  var numOfTests = dataset.repos.length;
  var username = dataset.username;
  t.plan(numOfTests);
  dataset.repos.forEach(repo => {
    api.getIssuesForRepo(username, repo.name)
    .then(issues => {
      t.equal(issues.length, repo.issues_count,
        `${repo.name} should have ${repo.issues_count}. it has ${issues.length}`)
    })
  });
})

// In this manner, we will iterate through all issues
// for all repositories, making sure that there are matches
// for them in the workitems collection.
// test('50 sample assertions', (t) => {
//   t.plan(50)
//   for (let index = 0; index < 50; index++) {
//     t.pass('this test shall pass');
//   }
// });
