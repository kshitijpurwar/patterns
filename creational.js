const Task = require('./Task');

var eat = new Task('Eat food');
var bath = new Task('Clean and bath');
var learn = new Task('Learn design patterns');
var gym = new Task('Get slim');


eat.do();
bath.save();
learn.do();
eat.update('Healthy Food')
