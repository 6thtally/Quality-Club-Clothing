// Hero Carousel
const slider1 = document.querySelector('#glide_1');
if (slider1) {
  new Glide(slider1, {
    type: 'carousel',
    startAt: 0,
    autoplay: 3000, // Slide every 3000ms (3 seconds)
    gap: 0,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: 'linear',
  }).mount();
}
