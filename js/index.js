var time= Object.create(timer); // decompte
var slider = Object.create(Slider); // slider
slider.init(slides);
// refresh
window.addEventListener('load', function() {
    
    if (sessionStorage.adress != null) {
        time.refreshEcran();
    }
});
// hidde ham button
var checkBox = document.getElementById("toggle");
var x = window.matchMedia("(max-width: 768px)");

function hiddeMenu() {
    document.querySelector('.menu').style.display = 'none';
    checkBox.checked = false;
}

function verifyWidth(x) {

    if (x.matches) {
        document.querySelector(".menu").style.display = "none";
        document.getElementById('toggle').addEventListener('click', hideShowMenu);

        function hideShowMenu() {
            var text = document.querySelector(".menu");
            if (checkBox.checked == true) {
                text.style.display = "block";
            } else {
                text.style.display = "none";
            }
        }
        document.getElementById('first').addEventListener('click', hiddeMenu);
    } else {
        document.querySelector(".menu").style.display = "block";
        document.getElementById('first').removeEventListener('click', hiddeMenu, false)
    }
}

verifyWidth(x) //
x.addListener(verifyWidth);
// map
var modClassChro = document.getElementById('chronometre');
ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Marseille&apiKey=c7f7a4ef5aaeddc706213a979b437bfb0ba1ea10", function(reponse) {
    var stations = JSON.parse(reponse);
    stations.forEach(function(item) {
        var marker = L.marker([item.position.lat, item.position.lng]).on('click', reservation).addTo(map);
        markerClusters.addLayer(marker);
        map.addLayer(markerClusters);
        function reservation() {
            mapLeaf.createMarker(item);
            showHidde.hiddenSignature();
            detailsStation.Init(item);
            setValue();
            classPhone();
            marker.bindPopup(mapLeaf.createPopup(item)).openPopup();
        }
    })
})
// click button fermer,Annuler
document.getElementById('annuler').addEventListener('click',
    function() {
        showHidde.hiddenSignature();
        Signature.clearCanvas();
    });
document.getElementById('annulerF').addEventListener('click', function() { showHidde.hiddenForm() });
// click button reserver
var nom = document.querySelector('#nom');
var prenom = document.querySelector('#prenom');
document.getElementById('reserver').addEventListener('click', function() {
    if ((nom.value === "") || (prenom.value === "")) {
        alert('Nom et prenom obligatoire');
    } else {
        Signature.init();
        displaySignature();
    }
});
// click button erase
document.getElementById('erase').addEventListener('click', function() {
    Signature.clearCanvas();
    Signature.init();
});
// click button submit 

document.getElementById('submit').addEventListener('click', function() {
    if (Signature.valid === true) {
        sessionStorage.setItem('adress', document.querySelector("#adressStation").textContent);
        Signature.clearCanvas();
        showHidde.hiddenSignature();
        showHidde.afterReservation();
        storage.populateStorage(nom, prenom);
        time.clearClock();
        time.deadline = 1200;
        time.clock();
    } else {
        alert("Veuillez signer avant de valider la reservation.");
    }
})
// drawing signature
var canvas = document.getElementById("canvas");
canvas.addEventListener("mousedown", function(e) {
    Signature.onDraw();
});
canvas.addEventListener("mousemove", function(e) {
    Signature.getMousePos(e);
});
canvas.addEventListener("mouseup", function(e) {
    Signature.offDraw();
    Signature.valid = true;
});

canvas.addEventListener("touchstart", function(e) {
    Signature.onDraw();
});

canvas.addEventListener("touchmove", function(e) {
    e.preventDefault();
    Signature.getTouchPos(e);;
});
canvas.addEventListener("touchend", function(e) {
    e.preventDefault();
    Signature.offDraw();
    Signature.valid = true;
});