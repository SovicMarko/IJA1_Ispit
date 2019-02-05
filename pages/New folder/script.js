var input = document.getElementsByTagName('input')[0];
var kom = document.getElementById('komentar');
console.log("hej");

function PostavljanjeKomentara() {
  console.log("radi");
  kom.innerHTML += input.value;
}
