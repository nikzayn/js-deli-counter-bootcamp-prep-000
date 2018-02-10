var katzDeli = []
function takeANumber(katzDeliLine,newPer){
katzDeliLine.push(newPer);
var position = katzDeliLine.length;
return "Welcome, "+ newPer + ". You are number " + position + " in line.";
}
function nowServing(katzDeliLine){
  var message;
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{ 
    message = "Currently serving " + katzDeliLine.shift() + ".";
  }
  return message;
}
