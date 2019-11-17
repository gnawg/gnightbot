!addcom !falljoke

$(eval
  var name = '$(touser)'.replace(/^[a-z]/, '$(touser)'.charAt(0).toUpperCase());
  var regex_vowel = /[aeiouy]/g;
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
