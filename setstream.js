// Edit a !stream command to output a countdown to  6 PM today, tomorrow, or a specified date string. Wrap up the countdown in some sassy text.
//!setstream today
//!setstream tomorrow
//or a custom, full timestamp e.g. !setstream 10 25 19 06:00:00 PM EST5EDT
//!stream will be set to ""You think I'm some kind of time servant that will tell you the next scheduled stream is in $(countdown 10 25 19 06:00:00 PM EST5EDT)

!addcom !setstream
-a=!editcom !stream
  $(eval
  var q = "$(query)";
  var date = new Date(Date.now());
  var stringdate = "";
  if (q == "today") {
    stringdate = date.toDateString().slice(4).concat(" 06:00:00 PM EST5EDT");
  }
  else if (q == "tomorrow") {
    date.setDate(date.getDate()+1);
    stringdate = date.toDateString().slice(4).concat(" 06:00:00 PM EST5EDT");
  }
  else {
    stringdate = q;
  }
"You think I'm some kind of time servant that will tell you the next scheduled stream is in $".concat(String.fromCharCode(40),"countdown ",stringdate,String.fromCharCode(41),"?");
  )

//The above eval, copy-pasted, won't actually fit in a twitch chatbox or a nightbot console.
//This Jerma-sized compact format will, though:
!addcom !setstream -a=!editcom !stream $(eval var q = "$(query)"; var d = new Date(Date.now()); var s = ""; if (q == "today") { s = d.toDateString().slice(4).concat(" 06:00:00 PM EST5EDT"); } else if (q == "tomorrow") { d.setDate(d.getDate()+1); s = d.toDateString().slice(4).concat(" 06:00:00 PM EST5EDT"); } else { s = q; }"You think I'm some kind of time servant that will tell you the next scheduled stream is in $".concat(String.fromCharCode(40),"countdown ",s,String.fromCharCode(41),"?"); )
