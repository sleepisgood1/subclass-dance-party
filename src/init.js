$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    // var $profilePhoto = $('<img class="profile-photo">');
    // var photoSource = 'assets/' + 'PepeDancer.gif';
    // $profilePhoto.


    $('body').append(dancer.$node);
  });

  $('.addLineUpButton').on('click', function(event) {
    // for (let )
    Dancer.prototype.lineUp();
  });
  // $('.addPepeButton').on('click', function(event) {

  //   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

  //   // get the maker function for the kind of dancer we're supposed to make
  //   var dancerMakerFunction = window[dancerMakerFunctionName];

  //   // make a dancer with a random position

  //   var dancer = new dancerMakerFunction(
  //     $("body").height() * Math.random(),
  //     $("body").width() * Math.random(),
  //     Math.random() * 1000
  //   );
  //   $('body').append(dancer.$node);
  //   $(dancer.$node).hover(makeBigger, returnToOriginalSize);

  //   window.dancers.push(dancer);

  // });


  $(document).scroll(function(event) {

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName1 = "NotADancer";
    console.log(dancerMakerFunctionName1);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction1 = window[dancerMakerFunctionName1];

    // make a dancer with a random position

    var dancer1 = new dancerMakerFunction1(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer1.$node);
    window.dancers.push(dancer);
  });
});


