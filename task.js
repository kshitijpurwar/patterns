// Learning design patterns
var me = {
  name: 'Kshitij',
  surname: 'Purwar'
}

Object.defineProperty(me, 'sayMyName',{
    value: function(){
      return 'Hi, my name is ' + this.name + ' ' + this.surname;
    },
    writable: false,
    // Making this false make hides the property when Object.keys is executed
    enumerable: false,
    configurable: true
  }
);

// Making the function writable renders this property useless
// me.sayMyName = "lol";
console.log('me keys are', Object.keys(me));

// Demo for inheritance
var meDetails = Object.create(me, {
  'sex': {
    value : 'male',
    enumerable: true,
  },
  'age': {
    value : 22,
  },
  'cell': {
    value : '9810682641',
    enumerable: true,
    writable: false
  },
  'myNumberIs': {
    value : function(){
      return this.name + '\'s Phone Number is '+ this.cell;
    }
  }
});

meDetails.cell = "lol";
console.log('meDetails Keys are ', Object.keys(meDetails));
console.log(meDetails.myNumberIs());
