const testVar = {}

function testFunc() {
  return "hi"
}


superbowlWin = (win) => {
  let result = win.find(win => win.result === "W")
  return result ? result.year : undefined
}