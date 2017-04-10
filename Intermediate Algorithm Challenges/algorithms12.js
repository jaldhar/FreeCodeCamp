// Spinal Tap Case

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-z])_*([A-Z])/g, '$1 $2');
  str = str.replace(/ /g, '-');
  return str.toLowerCase();
}

spinalCase('The_Andy_Griffith_Show');

