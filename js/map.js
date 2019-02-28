var mapLeaf = {
	lat :'43.28000',
	lng : '5.38000',
	map : 'null',
	showMap : function() {
		markerClusters = L.markerClusterGroup();
		map = L.map('map').setView([this.lat, this.lng], 13);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
	},
	createMarker : function(item){
		this.lat = item.position.lat;
		this.lng = item.position.lng;
	},
	createPopup : function(item) {
		this.name = item.name;
		return this.name;
	},

}
mapLeaf.showMap();

