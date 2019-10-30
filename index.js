const testVar = {}

function testFunc() {
  return "hi"
}
function winnerFn(el){
  return el.result === "W"
}

function superbowlWin(array){
    const winner = array.find(winnerFn)
    return winner ? winner.year : undefined
}
