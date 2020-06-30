var i = 0;
var col = new Array("red", "green", "orange", "yellow", "blue");
function change() {
  document.body.style.backgroundColor = col[i];
  i++;

  if (i > col.length) {
    i = 0;
  }
  window.setTimeout("change()", 1000);
}
window.onload = change();

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "")
    document.getElementById("username_msg").style.display = "inline";
  else document.getElementById("username_msg").innerHTML = "";
  if (password == "")
    document.getElementById("password_msg").style.display = "inline";
  else {
    document.getElementById("password_msg").innerHTML = "";
    if (username == "Parshant Tyagi" && password == "123456") {
      document.getElementById("image").src = "image/avatar2.png";
      document.getElementById("image").style.width = "100px";
      document.getElementById("image").style.border = "10px solid #ff3030";
    } else {
      document.getElementById("password_msg").innerHTML = "Incorrect Password";
      document.getElementById("username_msg").style.display = "inline";
    }
  }
}
function changeText() {
  document.getElementById("button").innerHTML = "Next Step";
}
