var PepeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // $(this.$node).hover({makeBigger});
  $(this.$profilePhoto).hover({makeBigger});
};

PepeDancer.prototype = Object.create(Dancer.prototype);
PepeDancer.prototype.constructor = PepeDancer;
// console.log(PepeDancer);

// PepeDancer.prototype.step = function() {
//   BlinkyDancer.prototype.step.call(this);
//   this.$node.toggle();
// };

var makeBigger = function() {
  $(this).css({height: '+=25% !important', width: '+=25% !important'});
};
var returnToOriginalSize = function () {
  $(this).css({height: '', width: '', });
};

// var dancingGIF = function() {
//   var img = document.createElement('img');
//   <a href="//imgur.com/a/MbdZp21"></a>
// }