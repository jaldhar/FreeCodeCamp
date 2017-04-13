// Make a Person

var Person = function(firstAndLast) {
    var names = firstAndLast.split(' ');
    var firstName =   names[0];
    var lastName =    names[1];

    this.getFirstName = function() {
                      return firstName;
                    };
    this.getLastName = function() {
                      return lastName;
                    };
    this.getFullName = function() {
                      return firstName + ' ' + lastName;
                    };
    this.setFirstName = function(first) {
                      firstName = first;
                    };
    this.setLastName =  function(last) {
                      lastName = last;
                    };
    this.setFullName =  function(firstAndLast) {
                      var names = firstAndLast.split(' ');
                      firstName = names[0];
                      lastName = names[1];
                    };
    return this;
};


var bob = new Person('Bob Ross');
bob.getFullName();

