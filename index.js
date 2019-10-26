const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const ele = array.find(function(year){
    return year['result'] === 'W'
  })
  if (ele) {
    return ele['year']
  }
}
