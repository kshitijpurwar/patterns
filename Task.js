// Constructor pattern

var Task = function(name){
  this.name = name;
  this.done = false;
  // Functions are recreated each time so we will use prototypes
  this.do = function(){
    this.done = true;
    console.log('Completing task - ' + this.name);
  }
  this.save = function(){
    console.log('Saving task ' + this.name);
  }
}

// No inheritance or copying thus better
// Prototype pattern

// This method is not being repeated - so more efficient
Task.prototype.update = function(name) {
  this.name = name;
  console.log(this);
  console.log('Name changed ', this.name);
}

module.exports = Task;
