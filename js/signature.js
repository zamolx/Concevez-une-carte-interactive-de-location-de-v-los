var Signature = {

    init: function() {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.paint = false;
        this.valid = false;
    },
    redraw: function(positionX, positionY) {
        this.context.strokeStyle = "white";
        this.context.lineJoin = "round";
        this.context.lineWidth = 5;
        if (this.paint) {
            this.context.lineTo(positionX, positionY);
            this.context.stroke();
        }
    },
    onDraw: function() {
        var positionX;
        var positionY;
        this.paint = true;
        this.context.beginPath();
        this.context.moveTo(positionX, positionY);
    },
    getMousePos: function(mouseEvent) {
        var rect = this.canvas.getBoundingClientRect();
        var positionX = mouseEvent.clientX - rect.left;
        var positionY = mouseEvent.clientY - rect.top;
        this.redraw(positionX, positionY);
    },

    getTouchPos: function(touchEvent) {
        rect = this.canvas.getBoundingClientRect();
        var positionX = touchEvent.touches[0].clientX - rect.left;
        var positionY = touchEvent.touches[0].clientY - rect.top;
        this.redraw(positionX, positionY);
    },
    offDraw: function() {
        this.paint = false;
    },
    clearCanvas: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}