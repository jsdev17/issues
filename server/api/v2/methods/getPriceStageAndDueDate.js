var mongoose = require('mongoose');
var moment = require('moment');
mongoose.connect('mongodb://localhost/classdb');
mongoose.Promise = global.Promise;
var db = mongoose.connection,
    Schema = mongoose.Schema;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('mongodb connected.'));
var WorkItem = mongoose.model('WorkItem', new Schema({}));

module.exports = async function (issue_number) {
  var workItem = await WorkItem.findOne({itemId: issue_number}).lean();
  return {
    price: workItem.price,
    stage: workItem.stage,
    due_date: moment(workItem.dueDate).format("MMMM Do, YYYY")
  };
}


