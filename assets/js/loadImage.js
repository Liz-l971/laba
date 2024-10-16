document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    }
  }) 


  // const video = document.getElementById('backround-video');
    
  // video.addEventListener('canplaythrough', function() {
  //     console.log('Видео полностью загружено и готово к воспроизведению без прерываний.');
  //     document.querySelector(".banner").style.background="none"
  // });