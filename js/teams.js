//   nic, bob, jes, jul, jon, yak, cat, kels, bra, howl, mark
$(function(){
  let inputNames = $('#inputNames').val();
  let inputNums = $('#inputNums').val();



});

// let inputNames = prompt('team names')
    inputNames = inputNames.split(', ')
    inputNames = shuffle(inputNames);
// let inputNums = prompt('number of teams')

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


function teamRandomizer(names, teamCount) {
  var team = {};
  var teamCounter = 0;

  for (var i = 0; i < names.length; ++i) {
    if (!team["Team" + teamCounter]) {
        team["Team" + teamCounter] = [];
    }
    team["Team" + teamCounter].push(names[i]);
    if (++teamCounter == teamCount) {
        teamCounter = 0;
    }
  }
  return team;
}

teamRandomizer(inputNames, inputNums)
