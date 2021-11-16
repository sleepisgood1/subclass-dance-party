var PepeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css({
    'border-color': 'blue',
    // 'background-image': "url(assets/PepeDancer.gif)"
  });
  $(this.$node).hover(makeBigger);
};

PepeDancer.prototype = Object.create(Dancer.prototype);
PepeDancer.prototype.constructor = PepeDancer;
// console.log(PepeDancer);

// PepeDancer.prototype.step = function() {
//   BlinkyDancer.prototype.step.call(this);
//   this.$node.toggle();
// };

var makeBigger = function() {
  $(this).css({height: '+=25%', width: '+=25%'});
};
var returnToOriginalSize = function () {
  $(this).css({height: '', width: '', });
};

// var dancingGIF = function() {
//   var img = document.createElement('img');
//   <a href="//imgur.com/a/MbdZp21"></a>
// }