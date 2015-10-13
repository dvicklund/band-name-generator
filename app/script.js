$(function() {

  // JQ selectors for the various form elements
  var $adjective = $('#adjective');
  var $verb = $('#verb');
  var $noun = $('#noun');

  // Generate name function on "Get random name" button click - grabs a random
  // adjective, verb, and noun, and sends them to the index.html page
  $('#generateName').click(function() {
    $.get('adjective', function(response) {
      var adjective = response.word;
      $('#adjective').text(adjective);
    });

    $.get('verb', function(response) {
      var verb = response.word;
      $('#verb').text(verb);
    });

    $.get('noun', function(response) {
      var noun = response.word;
      $('#noun').text(noun);
    });
  });

  // Submit new words on submit button click - posts new words to the server
  $('#submitWords').on('submit', function(e) {
    e.preventDefault();

    var adjective = $('input[name=adjective]').val();
    var adjPost;
    var verb = $('input[name=verb]').val();
    var verPost;
    var noun = $('input[name=noun').val();
    var nouPost;

    if(adjective) {
      adjPost = {word: adjective};
      $.post('adjective', adjPost, function(response) {
        var adjectiveRes = response.msg;
        $('#adjectiveRes').text(adjectiveRes);
      });
    }

    if(verb) {
      verPost = {word: verb};
      $.post('verb', verPost, function(response) {
        var verbRes = response.msg;
        $('#verbRes').text(verbRes);
      });
    }

    if(noun) {
      nouPost = {word: noun};
      $.post('noun', nouPost, function(response) {
        var nounRes = response.msg;
        $('#nounRes').text(nounRes);
      });
    }
  });
});