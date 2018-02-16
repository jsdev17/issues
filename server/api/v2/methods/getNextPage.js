var GitHubAPI = require('github');
var github = new GitHubAPI();
require('dotenv').load();

github.authenticate({
  type: 'oauth',
  token: process.env.TOKEN
});

module.exports = async function (specs, next) {
  var nextPage;
  // Determine whether to fetch next page of repos or issues
  console.log(`fetching ${specs.type}...`);
  if(specs.type === 'repos') {
    nextPage = await github.repos.getForUser({
      username: specs.user,
      per_page: specs.per_page,
      page: next
    });
  } else {
      nextPage = await github.issues.getForRepo({
        owner: specs.user,
        repo: specs.repo,
        state: 'open',
        per_page: specs.per_page,
        page: next
      });
  }
  return nextPage.data;
}