    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
    
let sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    console.log(window.scrollY);
    console.log(window.innerHeight);
    // half way through the image 
    sliderImages.forEach(sliderImage => {
            console.log(sliderImage.height);
       let slideInAt =  (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        console.log(slideInAt);
        // bottom of the image
        let imageBottom = sliderImage.offsetTop + sliderImage.height;
        let isHalfShown = slideInAt > sliderImage.offsetTop;
        let isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('active');
        }else{
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));