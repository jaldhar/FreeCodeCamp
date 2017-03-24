// Title Case a Sentence

function titleCase(str) {
  var words = str.split(/\s+/);
  return words.map(function(word){
    var titleCased = word.split('');
    for (var i = 0; i < titleCased.length; i++) {
      if (i === 0) {
        titleCased[i] = titleCased[i].toUpperCase();
      } else {
        titleCased[i] = titleCased[i].toLowerCase();        
      }
    }
    return titleCased.join('');
  }).join(' ');
}

titleCase("I'm a little tea pot");

