var getData = require('./getPriceStageAndDueDate');
module.exports = async function(issue, repo) {
  let issue_number = issue.number.toString();
  console.log('im working lv2');
  let data = await getData(issue_number, repo);
  console.log('im not working lv2')
  issue.price = data.price;
  issue.stage = data.stage;
  issue.assignee = data.assignee;
  issue.due_date = data.due_date;
  return issue;
}