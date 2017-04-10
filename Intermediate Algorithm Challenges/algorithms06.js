// Pig Latin

function translatePigLatin(str) {
  var chars = str.split('');
  var firstVowel = chars.indexOf(str.match(/[AEIOU]/i).shift());
  if (firstVowel === 0) {
    chars.push('way');
    str = chars.join('');
  } else {
    str = str.substr(firstVowel, str.length - firstVowel) +
      str.substr(0, firstVowel) +
      'ay';
  }
  return str;
}

translatePigLatin("consonant");
