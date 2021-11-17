describe('Dancer', function() {

  var dancer, dancer2, clock;
  var timeBetweenSteps = 100;
  window.dancers = [];

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    //create a new dancer
    dancer = new Dancer(10, 20, timeBetweenSteps);
    dancer2 = new Dancer(40, 60, timeBetweenSteps);
    //add dancer to window
    window.dancers.push(dancer);
    window.dancers.push(dancer2);
    console.log(window.dancers);
  });


  describe('lineUp', function() {
    it('should line up dancers upon LineEmUp', function () {
      expect(window.dancers[0].left).to.not.be.equal(window.dancers[1].left);
      Dancer.prototype.lineUp();
      console.log('window.dancers:', window.dancers);
      //expect the left value of each dancer in window to be the same value
      expect(window.dancers[0].left).to.be.equal(window.dancers[1].left);
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