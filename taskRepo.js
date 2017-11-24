// Module pattern,
// toolbox
// Utility belt
// services to be put here
// No "newing up objects"

// This module encapsulates all the methods
var repo = function(){
  
  var get = function(id) {
    console.log('Getting task from local storage');
    return {
      name : 'A new task from storage'
    }
  }

  var save = function(id) {
    console.log('Saving task in the local storage');
  }

  return {
    get: get,
    save: save
  }

}

module.exports = repo();
