// Convert HTML Entities


function convertHTML(str) {
  // &colon;&rpar;
  var conversions = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  var keys = Object.keys(conversions);
  for (var i = 0; i < keys.length; i++) {
    str = str.replace(new RegExp(keys[i], 'g'), conversions[keys[i]]);
  }
  return str;
}

convertHTML("Dolce & Gabbana");

