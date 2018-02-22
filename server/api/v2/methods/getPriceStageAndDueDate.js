var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;
var WorkItem = mongoose.model('WorkItem', new Schema({}));

module.exports = async function (issue_number, repo) {
  console.log('im working lv3');
  var workItem = await WorkItem.findOne({$and: [{itemId: issue_number},{repo: repo}]}).lean();
  console.log('im not working lv3');
  return {
    price: workItem.price,
    stage: workItem.stage,
    assignee: workItem.assignee,
    due_date: moment(workItem.dueDate).format("MMMM Do, YYYY")
  };
}
