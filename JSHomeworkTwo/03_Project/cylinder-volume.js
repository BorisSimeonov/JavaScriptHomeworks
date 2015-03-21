function calcCylinderVol(array){
    var volume = (Math.PI*Math.pow(array[0], 2))*array[1];
    console.log(volume.toFixed(3))
}

var inOne = [2, 4];
var inTwo = [5, 8];
var inThree = [12, 3];
calcCylinderVol(inOne);
calcCylinderVol(inTwo);
calcCylinderVol(inThree);