!addcom !falljoke

$(eval
  var query = '$(query)';
  var touser = '$(touser)';
  if (query=="") {
    var name = touser;
  } else {
    var name = query;
  }
  name = name.replace(/^[a-z]/, name.charAt(0).toUpperCase()).slice(0,30);
  var regex_vowel = /[aeiouyAEIOUY]/g;
  var nameyell = name.replace(regex_vowel,'$&$&$&').toUpperCase();
  name.concat(", what's wrong? etalAwk ",name,"?! ",nameyell,"!! etalMad")
)


/*

$(eval
var name = '$(touser)'
var regex_vowel = /[aeiouy]/
var last_vowel = name.lastIndexOf(name.match(regex_vowel).pop())
var nameyell =
)

*/
