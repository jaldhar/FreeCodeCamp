// Search and Replace

function myReplace(str, before, after) {
  var first = '';
  if (before[0].match(/[A-Z]/)) {
    first = after[0].toUpperCase();
  } else {
    first = after[0].toLowerCase();
  }
  var afterArr = after.split('');
  afterArr.splice(0, 1, first);
  after = afterArr.join('');
  str = str.replace(before, after);
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

