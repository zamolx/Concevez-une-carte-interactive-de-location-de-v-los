var detailsStation = {
    Init: function(data) {
        this.adressStation = data.name;
        this.placesTotal = data.bike_stands;
        this.dispoPlaces = data.available_bikes;
        this.CurrentStation();
        if (this.dispoPlaces > 0) {
            document.getElementById('reserver').style.display = "inline-block";
            document.getElementById('annulerF').style.display = "inline-block";
        } else { document.getElementById('reserver').style.display = "none"; }
    },
    CurrentStation: function() {
        document.getElementById("adressStation").textContent = this.adressStation; // add name of station on formulaire
        document.getElementById("placesTotal").textContent = this.placesTotal + " " + "places total";
        document.getElementById("dispoPlaces").textContent = this.dispoPlaces + " " + "velos disponibles";
        showHidde.showForm();
    }
}