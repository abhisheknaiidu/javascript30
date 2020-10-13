var min = 25;
var sec = "00";
var min_interval, sec_interval;
var myInterval = -1;
var maxMin = 25;

function template() {
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
}

function start() {

    if(min!==0) {
        document.getElementById("play").disabled = true;
        document.getElementById('add').disabled = true;
        document.getElementById('sub').disabled = true;

        
        min = min-1;
        sec = 59;
        
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;

        min_interval = setInterval(minTimer, 60000);
        sec_interval = setInterval(secTimer, 1000);
    }
    else {
        stop();
    }
          
}


function stop() {
    min = 25;
    sec = "00"
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    clearInterval(min_interval);
    clearInterval(sec_interval);

    document.getElementById('add').disabled = false;
    document.getElementById('sub').disabled = false;
    document.getElementById("play").disabled = false;

}

function minTimer() {
    if(min===0) {
        stop();
    }
    else {
    min = min - 1;
    document.getElementById("min").innerHTML = min;    
    }
}

function secTimer() {
    if(sec===0){
        if(min!==0) {
            sec= 59;
        }
        else {
            stop();
        }
    }
    else {
        sec = sec - 1;
    }
    document.getElementById("sec").innerHTML = sec;
    
}

function add() {
    min = min + 1;
    document.getElementById("min").innerHTML = min;
}

function sub() {
    if(min!=0) {
    min = min - 1;
    document.getElementById("min").innerHTML = min;
    }
}