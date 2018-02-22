var getData = require('./getPriceStageAndDueDate');
module.exports = async function(issue, repo) {
  let issue_number = issue.number.toString();
  let data = await getData(issue_number, repo);
  issue.price = data.price;
  issue.stage = data.stage;
  issue.due_date = data.due_date;
  return issue;
}