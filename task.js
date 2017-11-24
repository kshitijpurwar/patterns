// Learning design patterns
const me = {
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
me.sayMyName = "lol";
console.log(Object.keys(me));
