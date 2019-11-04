const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(teamArr) {
  let winningTeam = teamArr.find(team => team.result === "W")
  if (winningTeam !== undefined) {
    return winningTeam.year
  }
     
}