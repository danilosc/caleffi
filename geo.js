
document.addEventListener("deviceready", onDeviceReady, false);

var aluno = localStorage.getItem("cpf");
var location1 = aluno + "-location";

function onDeviceReady() {

window.plugins.insomnia.keepAwake();

 document.addEventListener("backbutton", function (e) {
        e.preventDefault();
    }, false );



    function onSuccess(position) {
      


var location = localStorage.getItem(location1);
var result =  position.coords.latitude + '/' + position.coords.longitude  + 'e'  + location;
localStorage.setItem(location1, result);


}

function onError(error) {  }


var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true });


}
