//gallery 
var slides = [
    {
        image: "img/1_14.jpg"
},
    {
        image: "img/2_14.jpg"
},
    {
        image: "img/4-1.jpg"
}
];

//Objet Slider
var Slider = {

    init: function (gallery) {
        this.currentSlide = 0;
        this.gallery = gallery;
        this.playSlider();
    },

    actualSlide: function () {
        document.getElementById("image_slider").src = this.gallery[this.currentSlide].image;
    },

    nextSlide: function () {
        this.currentSlide++;
        if (this.currentSlide > this.gallery.length - 1) {
            this.currentSlide = 0;
        };
        this.actualSlide();
    },

    previousSlide: function () {
        this.currentSlide--;
        if (this.currentSlide < 0) {
            this.currentSlide = this.gallery.length - 1;
        };
        this.actualSlide();
    },

    playSlider: function () {
        this.slideInterval = setInterval(function () {
            slider.nextSlide();
        }, 5000);
    },
    stopSlider: function () {
        clearInterval(this.slideInterval);
    }
}
// press spacebar for pause, start 
let i = 0;
function count(e) {
    i++;
    if (e.keyCode === 32) {
        if (i % 2 === 0) {
            slider.playSlider();
            e.preventDefault(); // cancel scrolling of space bar
        } else {
            slider.stopSlider();
            e.preventDefault(); // cancel scrolling of space bar
        }
    }
}
document.addEventListener('keypress', count);
// press arrow left
function left(e) {
    if (e.keyCode === 37) {
        slider.previousSlide();
        slider.stopSlider();
    }
}
document.addEventListener('keydown', left);
// press arrow right
function right(e) {
    if (e.keyCode === 39) {
        slider.stopSlider();
        slider.nextSlide();
    }
}
document.addEventListener('keydown', right);
// Arrows slider 
let next = document.getElementById('next');
let previous = document.getElementById('previous');
next.onclick = function() {
    slider.stopSlider();
    slider.nextSlide();
};
previous.onclick = function() {
    slider.stopSlider();
    slider.previousSlide();
};