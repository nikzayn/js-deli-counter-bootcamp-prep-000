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
function nowServing (katzDeliLine) { 
  var customer = katzDeliLine.shift();
    if(katzDeliLine.length===0) {
    return 'There is nobody waiting to be served!'; 
}
   else{   return "The line is currently: 1. Ada, 2. Grace" + customer + "." ;
     
   }return customer;
   }
   