describe('PepeDancer', function() {

  var pepeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pepeDancer = new PepeDancer(10, 20, timeBetweenSteps);
    // addDancerButtonSuccessSpy = sinon.spy();
    // $(document).on('.addDancerButton', addDancerButtonSuccessSpy);
  });

  it('should have a jQuery $node object', function() {
    expect(pepeDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pepeDancer, 'step');
      expect(pepeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pepeDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pepeDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('lineUp', function() {
    it('should line up dancers upon LineEmUp click', function () {
      sinon.spy(pepeDancer, 'lineUp');
      expect(window.dancers[0].$node.css.left).to.be.equal('20px');
    });
  });

  describe('buttonClick', function() {
    it('should add dancers on click', function () {
      $('.addDancerButton').on('click');

      // $('.addDancerButton').click();
      expect(window.dancers.length).to.be.greaterThan(0);
    });
  });


});