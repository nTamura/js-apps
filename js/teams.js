  $(function(){

  $( "#teamButton" ).click(function() {
    let teamOutput = $('#teamOutput');
    let inputNames = $('#inputNames').val();
    let inputNums = $('#inputNums').val();
        inputNames = inputNames.split(', ')
        inputNames = shuffle(inputNames);
        teamRandomizer(inputNames, inputNums)

    function shuffle(arr) {
      let currentIndex = arr.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
      }
      return arr;
    }

    function teamRandomizer(names, teamCount) {
      let team = {};
      let teamCounter = 0;

      for (let i=0; i<names.length; ++i) {
        if (!team["Team " + teamCounter]) {
          team["Team " + teamCounter] = [];
        }
        team["Team " + teamCounter].push(names[i]);
        if (++teamCounter == teamCount) {
          teamCounter = 0;
        }
      }

      for (let key of Object.keys(team)) {
        teamOutput.append('<h3 class="team-name">' + key + '</h3><ul>');
        for(var j = 0; j < team[key].length; j++) {
          teamOutput.append('<li>' + team[key][j] + '</li>');
          teamOutput.append('</ul>');
        }
        console.log(key, team[key]);
      }
    };


  });
});
