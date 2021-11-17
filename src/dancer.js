// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition();
};

Dancer.prototype.lineUp = function() {
  console.log(window.dancers);
  for (let i = 0; i < window.dancers.length; i++) {
    var dancer = window.dancers[i];
    dancer.left = 20;
    dancer.$node.css({
      left: dancer.left,
    });
  }
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.interact = function() {
  for (let i = 0; i < window.dancers.length; i++) {
    let neighbors = [];
    var x1 = window.dancers[i].left;
    var y1 = window.dancers[i].top;
    for (let j = 0; j < window.dancers.length; j++) {
      if (i !== j) {
        var x2 = window.dancers[j].left;
        var y2 = window.dancers[j].top;
        var x = x1 - x2;
        // console.log('x:', x);
        var y = y1 - y2;
      }
      //apply pythagroian theorum between two points
      var c = Math.sqrt((x * x) + (y * y));
      if (c < 250) {
        if (window.dancers[j].name !== 'NotADancer') {
          neighbors.push(window.dancers[j]);
        }
      }
    }
    console.log('neighbors:', neighbors);
    for (let k = 0; k < neighbors.length; k++) {
      neighbors[k].$node.css({
        'transform': 'scale(0)',
        'color': 'rgba(0,0,0,0)',
      });
    }

    //loop over one more time
      //using values of the other dancer's x -x result and y-y result, if the pythagorium therum value is less than ___, push to array
  // later using arry, set a css value to do somehting
    //find closeset distances
    // window.dancers[i].$node.css({
    // });
  }
};

