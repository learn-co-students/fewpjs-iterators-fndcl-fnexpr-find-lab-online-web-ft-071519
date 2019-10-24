const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
let newarray= array.find(function(s){return s.result==="W"})
if (newarray){

 return newarray.year
}else {
  return newarray
  
}
}