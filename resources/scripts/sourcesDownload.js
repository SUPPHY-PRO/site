var antivirusArray = ["/resources/files/sav.zip"];
var csgoArray = ["/resources/files/csgocheats.zip"];
var epicArray = ["/resources/files/epic.zip"];
var gtaArray = ["/resources/files/gta6.zip"];
var minecraftArray = ["/resources/files/minecraft2.zip"];
var steamArray = ["/resources/files/steam.zip"];
var winArray = ["/resources/files/win12.zip"];

var materials = ["/resources/files/additions/WinKeyOFF.zip"];

var av1 = document.getElementById("av1");
var csgo1 = document.getElementById("csgo1");
var epic1 = document.getElementById("epic1");
var gta1 = document.getElementById("gta1");
var mine1 = document.getElementById("mine1");
var steam1 = document.getElementById("steam1");
var win1 = document.getElementById("win1");

var email = document.getElementById("email");
var winkeyoff = document.getElementById("winkeyoff");

av1.addEventListener("click", function () {
  downloadFile(antivirusArray[0]);
});

csgo1.addEventListener("click", function () {
  downloadFile(csgoArray[0]);
});

epic1.addEventListener("click", function () {
  downloadFile(epicArray[0]);
});

gta1.addEventListener("click", function () {
  downloadFile(gtaArray[0]);
});

mine1.addEventListener("click", function () {
  downloadFile(minecraftArray[0]);
});

steam1.addEventListener("click", function () {
  downloadFile(steamArray[0]);
});

win1.addEventListener("click", function () {
  //downloadFile(winArray[0]);
  window.open("https://disk.yandex.ru/d/OVoGpie4QwWXAA", "_blank");
});

email.addEventListener("click", function () {
  copyToClipboard("admin@supphy.ru", "Почта скопирована");
});

winkeyoff.addEventListener("click", function () {
  downloadFile(materials[0]);
});

function downloadFile(name) {
  var link = document.createElement("a");
  link.href = name;
  link.download = name.substring(name.lastIndexOf("/") + 1);
  link.click();
}

function copyToClipboard(text, alertText) {
  navigator.clipboard.writeText(text);
  alert(alertText);
}
