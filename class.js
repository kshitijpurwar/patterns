// Constructor pattern
'use strict'

module.exports = class Task {
  constructor(name){
    this.name = name;
    this.done = false;
  }

  do(){
    this.done = true;
    console.log('Completing task - ' + this.name);
  }

  save(){
    console.log('Saving task ' + this.name);
  }

  update(name){
    this.name = name;
    console.log(this);
    console.log('Name changed ', this.name);
  }
}
