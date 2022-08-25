
window.addEventListener('scroll', () => {
    let navBar = document.getElementById('nav-bar')
    let sectionGap = document.getElementById('sectionGap')

    if (window.innerWidth > 1024) {

        if (window.scrollY > 0) {
            navBar.style.background = '#fff'
            navBar.style.transition = '.5s'
            navBar.style.top = '0px'
            navBar.style.left = '0px'
            navBar.style.paddingRight = '15px'
            navBar.style.paddingLeft = '15px'
            navBar.style.position = 'fixed'
            navBar.style.zIndex = '9'
            navBar.style.width = '100%'
            navBar.style.borderTop = 'none';
            navBar.style.boxShadow = '0px 0px 10px 0px #9f9f9f';
        }else {
            navBar.style.background = 'linear-gradient(to right, #E2EAED 50%, #AFE3CD 50%)';
            navBar.style.borderTop = '1px solid #A8A8A8';
            navBar.style.transition = '.5s';
            navBar.style.top = '50px';
            navBar.style.boxShadow = 'none';
            sectionGap.style.marginTop = '90px';
        }

    }

})




var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// document.addEventListener("DOMContentLoaded", function(){
//     /////// Prevent closing from click inside dropdown
//     document.querySelectorAll('.dropdown-menu').forEach(function(element){
//         element.addEventListener('click', function (e) {
//             e.stopPropagation();
//         });
//     })
// });
// DOMContentLoaded  end

VanillaTilt.init(document.querySelector("#image-comparison-slider"), { // Tilt Effect - vanilla-tilt.js (https://micku7zu.github.io/vanilla-tilt.js/) is required for this
    max: 5, // max tilt rotation (degrees (deg))
    speed: 900, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
    scale: 1.02 // transform scale - 2 = 200%, 1.5 = 150%, etc..
});

const slider = document.querySelector("#image-comparison-slider");
const sliderImgWrapper = document.querySelector("#image-comparison-slider .img-wrapper");
const sliderHandle = document.querySelector("#image-comparison-slider .handle");

slider.addEventListener("mousemove", sliderMouseMove);
slider.addEventListener("touchmove", sliderMouseMove);

function sliderMouseMove(event) {

    if(isSliderLocked) return;

    const sliderLeftX = slider.offsetLeft;
    const sliderWidth = slider.clientWidth;
    const sliderHandleWidth = sliderHandle.clientWidth;

    let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
    if(mouseX < 0) mouseX = 0;
    else if(mouseX > sliderWidth) mouseX = sliderWidth;

    sliderImgWrapper.style.width = `${((1 - mouseX/sliderWidth) * 100).toFixed(4)}%`;
    sliderHandle.style.left = `calc(${((mouseX/sliderWidth) * 100).toFixed(4)}% - ${sliderHandleWidth/2}px)`;
}

let isSliderLocked = false;

slider.addEventListener("mousedown", sliderMouseDown);
slider.addEventListener("touchstart", sliderMouseDown);
slider.addEventListener("mouseup", sliderMouseUp);
slider.addEventListener("touchend", sliderMouseUp);
slider.addEventListener("mouseleave", sliderMouseLeave);

function sliderMouseDown(event) {
    if(isSliderLocked) isSliderLocked = false;
    sliderMouseMove(event);
}

function sliderMouseUp() {
    if(!isSliderLocked) isSliderLocked = true;
}

function sliderMouseLeave() {
    if(isSliderLocked) isSliderLocked = false;
}



// $(function(){
//     $('.dropdown').hover(function() {
//             $(this).addClass('open');
//         },
//         function() {
//             $(this).removeClass('open');
//         });
// });

// let navBar = document.querySelector('.navbar')
// navBar

