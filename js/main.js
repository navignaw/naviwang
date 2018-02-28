const Typed = require('typed.js');

const keywords = new Typed('.typed', {
  stringsElement: '#keywords',
  typeSpeed: 20,
});
keywords.stop();

window.setTimeout(function() {
  keywords.start();
}, 1000);
