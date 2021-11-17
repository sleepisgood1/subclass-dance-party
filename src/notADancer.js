var NotADancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.name = 'NotADancer';
};

NotADancer.prototype = Object.create(BlinkyDancer.prototype);
NotADancer.prototype.constructor = NotADancer;

NotADancer.prototype.step = function() {
  BlinkyDancer.prototype.step.call(this);
  this.$node.toggle();
};