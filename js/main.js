const SmoothScroll = require('smooth-scroll');
const Typed = require('typed.js');
const clickHandler = require('click-handler');

// Add class when raptor link is clicked.
clickHandler.register('raptor', function(e) {
  const raptorClasses = document.getElementById('raptor').classList;
  raptorClasses.add('bounce');
  document.getElementById('raptor').classList.add('bounce');
  window.setTimeout(function() {
    raptorClasses.remove('bounce');
  }, 1000);
  e.preventDefault();
});

// Add smooth scrolling to all links with data-scroll.
new SmoothScroll('a[data-scroll]');

// Type out pills.
const keywords = new Typed('.typed', {
  stringsElement: '#keywords',
  typeSpeed: 20,
});
keywords.stop();

window.setTimeout(function() {
  keywords.start();
}, 1000);
