const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = function(r) {
  const winningYear = r.find(game =>
      game['result'] === 'W' );
  if (winningYear) {
    return winningYear['year']
  }
};