var number = getNumber();
var statusShowAxes = true;

var rotateStatus = false;

function getRotateStatus() {
    return rotateStatus;
}

function fnStartRotate() {
    rotateStatus = true;
}

function fnStopRotate() {
    rotateStatus = false;
}

// Fonction permettant d'obtenir le statut de l'affichage des axes
function getAxesStatus() {
    return statusShowAxes;
}

// Fonction permettant de cacher les axes
function hideAxes() {
    statusShowAxes = false;
}

// Fonction permettant d'afficher les axes
function showAxes() {
    statusShowAxes = true;
}

// Fonction permettant de changer le status de statusShowAxes
function checkAxes(value) {
    if(value)
        showAxes();
    else
        hideAxes();
}


function clearAll() {
    for(var x = 0;x < number;x++) {
        for(var y = 0;y < number;y++) {
            for(var z = 0;z < number;z++) {
                leds[x][y][z].turnOff();
            }
        }
    }
}