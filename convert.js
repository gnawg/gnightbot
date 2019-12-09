$(eval
var scalar = $(1);
var unit = "$(2)";
if(/^f/i.test(unit)==true){
  scalar + ` °F is ` + ((scalar-32)*(5/9)).toFixed(2) + ` °C!`
}
else if (/^c/i.test(unit)==true) {
  scalar + ` °C is ` + ((scalar*9/5)+32).toFixed(2) + ` °F!`
}
else if (/^k/i.test(unit)==true) {
  scalar + ` kg is ` + (scalar/0.4535923).toFixed(2) + ` lb!`
}
else if (/^l/i.test(unit)==true || /^p/i.test(unit)==true) {
  scalar + ` lb is ` + (scalar*0.4535923).toFixed(2) + ` kg!`
}
else{
  'Sorry, I only know Fahrenheit, Celsius, kilograms, and pounds'
}
)

$(eval
  var f = parseFloat(13);
  f + ` F is ` + ((f-32)*(5/9)).toFixed(3) + ` C!`;
)
