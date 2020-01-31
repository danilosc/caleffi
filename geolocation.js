
document.addEventListener("deviceready", onDeviceReady, false);

var aluno = localStorage.getItem("cpf");
var geo1 = aluno + "-location";

function onDeviceReady() {

window.plugins.insomnia.keepAwake();
document.addEventListener("backbutton", function (e) {  e.preventDefault(); }, false );

function onSuccess(position) {

var geo2 = localStorage.getItem(geo1);
var result1 = position.coords.latitude;  if (result1 == null) { var result1 = "1"; }
var result2 = position.coords.longitude; if (result2 == null) { var result2 = "1"; }
var speed = position.coords.speed; if (speed == null) { var speed = "1"; }  

var now = new Date(Date.now());
var hours = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

var aula = localStorage.getItem("aula"); 
if (aula == null) {} else {
var result = "s"+result1+"e"+result2+"e" + hours + "e" + speed + geo2;
localStorage.setItem(geo1, result); }

}

function onError(error) {  }

var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true  });

}
