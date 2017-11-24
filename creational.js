// 2 way to implement same thing
// Using a class
// const Task = require('./Class');

// Using Object & prototype
const Task = require('./Task');
const Repo = require('./taskRepo');

var eat = new Task(Repo.get(1));
var bath = new Task({name: 'Clean and bath'});
var learn = new Task({name: 'Learn design patterns'});
var gym = new Task({name: 'Get slim'});


eat.do();
bath.save();
learn.do();
eat.update('Healthy Food')
