function hideFile() {
    console.log('%c Digital Minds, Challenge hidden.', 'font-size: 20px; color: green; font-weight: bold;');
}

window.trustMachine = function (test) {
    if (test == null) {
        console.log("%cError : missing argument : maybe the  movies's release year!! :)", "color:#cc0000; font-size:20px");
    } else if (test != "2018") {
        console.log("%cError : Param must be equal to 2018 :)", "color:#cc0000; font-size:20px");
    } else {
        console.log("%c↓", "color:#fce526; font-size:25px");
        console.log("%cfile:///C:/Users/hp/Desktop/DM2.0/trusttheballot.html", "color:#cc0000; font-size:20px");
    }
}
window.exMachina= function (test) {
    if (test == null) {
        console.log("%cError : missing argument : maybe the movies's release year!! :)", "color:#cc0000; font-size:20px");
    } else if (test != "2018") {
        console.log("%cError : Param must be equal to 2018 :)", "color:#cc0000; font-size:20px");
    } else {
        console.log("%c↓", "color:#fce526; font-size:25px");
        console.log("%cfile:///C:/Users/hp/Desktop/DM2.0/aichallenge.html", "color:#cc0000; font-size:20px");
    }
}
window.socialNetwork = function (test) {
    if (test == null) {
        console.log("%cError : missing argument : maybe the  movies's release year!! :)", "color:#cc0000; font-size:20px");
    } else if (test != "2013") {
        console.log("%cError : Param must be equal to 2013 :)", "color:#cc0000; font-size:20px");
    } else {
        console.log("%c↓", "color:#fce526; font-size:25px");
        console.log("%cfile:///C:/Users/hp/Desktop/DM2.0/wolfofwallstreet.html", "color:#cc0000; font-size:20px");
    }
}
hideFile();
function showAlert(a) {
    const modal = document.getElementById("myModal");
    modal.style.display = (modal.style.display === "none" || modal.style.display === "") ? "flex" : "none";

    var b

    if (a === 1) {
        b = "trustMachine()";
    } else if (a === 2) {
        b = "exMachina()";
    }else  {
        b = "socialNetwork()";
    }

    console.log('%cExecute ' + b + ' to reveal it.', 'font-size: 20px; color: green; font-weight: bold;');
}
function closeChallenge() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function confirmChallenge() {

    closeChallenge();
}

