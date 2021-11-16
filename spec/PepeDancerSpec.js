describe('PepeDancer', function() {

  var pepeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pepeDancer = new PepeDancer(10, 20, timeBetweenSteps);
    addDancerButtonSuccessSpy = sinon.spy();
    $(document).on('.addDancerButton', addDancerButtonSuccessSpy);
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
      $('.addLineUpButton').click();
      for (let i = 0; i < window.dancers.length; i++) {
        expect(window.dancers[i].$node.css.left).to.be.equal('20px');
      }
    });
  });

  describe('buttonClick', function() {
    var addDancerButtonSuccessSpy;
    beforeEach(function () {

      addDancerButtonSuccessSpy = sinon.spy();
      $(document).on('buttonClickSucess', addDancerButtonSuccessSpy);
    });

    it('should fire a buttonClickSuccess event with correct data', function() {
      $('.addDancerButton').click();

      //make sure our spy was fired once and only once
      expect(addDancerButtonSuccessSpy.callCount).to.equal(0);

      //get the data from our spy call
      var spyCall = addDancerButtonSuccessSpy.getCall(0);

      //make sure 'foo' on the data argument is set to 'bar'
      expect(spyCall.args[1].foo).to.equal(1);
    });
  });


});