// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition();
  // window.dancers.push(this);
};

Dancer.prototype.lineUp = function() {
  for (let i = 0; i < window.dancers.length; i++) {
    // window.dancers[i].$node = $('<span class="dancer line"></span>');
    window.dancers[i].$node.css({
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      'margin': '0 5px',
      'left': '20px',
      // 'position': 'relative',
      // 'justify-content': 'space-between',
      // 'display': 'inline-block',
      // 'margin': '0'
      // 'width': 'center',
      // 'border': '5px'
      // 'margin-right': 'auto',
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
    console.log('x, y:', x, y);
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
        neighbors.push(window.dancers[j]);
      }
    }
    for (let k = 0; k < neighbors.length; k++) {
      var originalx = neighbors[k].left
      var originaly = neighbors[k].top
      neighbors[k].left = x
      neighbors[k].top = y
      window.dancers[i].left = originalx
      window.dancers[i].top = originaly
      neighbors[k].$nodes.css({

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

