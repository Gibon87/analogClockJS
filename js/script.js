const secondsHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 12) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  // those statements eliminate "rewinding" of the clock's hands transition degrees
  if(secondsDegrees == 90){
    secondsHand.style.transition = `none`;
  }
  if(minutesDegrees == 90){
    minutesDegrees.style.transition = `none`;
  }
  if(hoursDegrees == 90){
    hoursDegrees.style.transition = `none`;
  }
}
setInterval(setDate, 1000);
