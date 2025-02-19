function calculateSleepTime(times) {
    if(!Array.isArray(times)) {
      return "Invalid"; 
    }
    let totalSec = 0;
  
    for (let i = 0; i < times.length; i++) {
      if (typeof times[i] !== 'number') {
        return "Invalid";
      }
      totalSec += times[i];
    }
    let hours = Math.floor(totalSec / 3600);
    let minutes = Math.floor((totalSec % 3600) / 60);
    let seconds = totalSec % 60;
  
    return { hour: hours, minute: minutes, second: seconds };
}
const timeArray =[100, 3800, "90" ];

console.log(calculateSleepTime(timeArray));
  