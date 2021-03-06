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
      ($("body").height() * Math.random()) + 200,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    console.log(window.dancers);

    var $profilePhoto = $('<img class="profile-photo">');
    var photoSource = 'assets/' + dancerMakerFunctionName + '.gif';
    $profilePhoto.attr('src', photoSource);
    (dancer.$node).append($profilePhoto);

    $('body').append(dancer.$node);
  });

  $('.addLineUpButton').on('click', function(event) {
    Dancer.prototype.lineUp();
  });



  $(document).scroll(function(event) {

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = 'NotADancer';

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(dancerMakerFunction);

    // make a dancer with a random position
    var dancer1 = new dancerMakerFunction(
      ($("body").height() * Math.random()) + 200,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer1);

    var $profilePhoto = $('<img class="profile-photo">');
    var photoSource = 'assets/' + dancerMakerFunctionName + '.gif';
    $profilePhoto.attr('src', photoSource);
    (dancer1.$node).append($profilePhoto);
    $('body').append(dancer1.$node);
  });



  $('.addInteractButton').on('click', function(event) {
    Dancer.prototype.interact();
  });
});


