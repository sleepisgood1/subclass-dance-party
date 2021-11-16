describe('NotADancer', function() {

  var notADancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    notADancer = new NotADancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(notADancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(notADancer.$node, 'toggle');
    notADancer.step();
    expect(notADancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(notADancer, 'step');
      expect(notADancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(notADancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(notADancer.step.callCount).to.be.equal(2);
    });
  });

  describe('scroll', function() {
    it('should add NotADancers on scroll', function() {
      sinon.spy(notADancer, 'scroll');
      expect(window.dancers.indexOf('NotADancer')).to.be.equal(-1);
      $(document).scroll();
      expect(window.dancers.indexOf('NoADancer')).to.be.greaterThan(-1);
    });
  });

});
