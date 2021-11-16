var NotADancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.css({
    'border-color': 'green',
    // 'background-image': `url('<iframe src="https://giphy.com/embed/s3XzZtV5d0wPS" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/fail-fun-wtf-s3XzZtV5d0wPS">via GIPHY</a></p>')`
  });
};

NotADancer.prototype = Object.create(BlinkyDancer.prototype);
NotADancer.prototype.constructor = NotADancer;

NotADancer.prototype.step = function() {
  BlinkyDancer.prototype.step.call(this);
  this.$node.toggle();
};