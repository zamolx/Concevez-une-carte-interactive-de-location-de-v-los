var mapContainer = document.getElementById('map-container');

var showHidde = {
    showForm: function() {
        document.getElementById('form').style.display = "block";
        document.getElementById('reserver').style.display = "block";
        document.getElementById('annulerF').style.display = "block";
        document.getElementById('prenom').style.display = "block";
        document.getElementById('nom').style.display = "block";
        document.getElementById('lPrenom').style.display = "block";
        document.getElementById('lNom').style.display = "block";
    },
    hiddenSignature: function() {
        document.getElementById('signature').style.display = 'none';
        if (window.screen.width <= 768 && window.screen.height <= 2000) { mapContainer.style.height = "300px"; }
    },
    hiddenForm: function() {
        document.getElementById('form').style.display = "none";
        if (window.screen.width <= 768 && window.screen.height <= 2000) { mapContainer.style.height = "300px"; }
    },
    afterReservation : function() {
        document.getElementById('chronometre').style.display='block';
        document.getElementById('no_res').style.display='none';
    }
}
// counter
var timer = {
    deadline : 1200,
    now: 0,
    counter: "",
    clock : function() {
        this.counter = setInterval( function() {
            time.now ++;
            time.secondes = Math.floor((time.deadline - time.now)%60);
            sessionStorage.setItem('secondes', time.secondes);
            time.minutes = Math.floor((time.deadline - time.now)/60);
            sessionStorage.setItem('minutes', time.minutes);
            if (time.now === time.deadline) {
                time.clearClock();
                sessionStorage.clear();
                document.getElementById('chronometre').style.display='none';
                document.getElementById('no_res').style.display='block';
            }
            document.getElementById('adress').textContent = sessionStorage.getItem('adress');
            document.getElementById('minutes').textContent = sessionStorage.getItem('minutes');
            document.getElementById('secondes').textContent = sessionStorage.getItem('secondes');
        },1000);
    },
    clearClock : function() {
        clearInterval(this.counter);
        this.now = 0;
    },
    refreshEcran : function() {
        document.getElementById('chronometre').style.display = 'block';
        document.getElementById('no_res').style.display = 'none';
        time.deadline = parseInt(sessionStorage.getItem('minutes')*60) + parseInt(sessionStorage.getItem('secondes'));
        time.clock();
    }
}
// localStorage
var storage = {
    populateStorage: function(nom, prenom) {
        this.nom = nom.value;
        this.prenom = prenom.value;
        this.storageNomPrenom();
    },
    storageNomPrenom: function() {
        localStorage.setItem('nom', this.nom);
        localStorage.setItem('prenom', this.prenom);
    }
}

function classPhone() {
    if (window.screen.width <= 768 && window.screen.height <= 2000) { mapContainer.style.height = "600px"; }
};

function displaySignature() {
    document.getElementById('form').style.display = "none";
    document.getElementById('signature').style.display = "block";
   
};

function setValue() {
    var currentNom = localStorage.getItem('nom');
    var currentPrenom = localStorage.getItem('prenom');
    document.querySelector('#nom').value = currentNom;
    document.querySelector('#prenom').value = currentPrenom;
}
