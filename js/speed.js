let speed =30 ;
let distance = 0;
for (let time = 1; time <= 96; time++) {

    if (time % 10 === 0) {
        if(speed < 120){
            speed *= 2;
        } 
    }
    distance += speed;
    
    console.log("Time: " + time + " minutes, Speed: " + speed + " km/h" );
}
distance = distance / 60;
console.log("Distance traveled: " + distance.toFixed(2) + " km");
