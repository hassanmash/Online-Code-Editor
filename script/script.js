
function BtnRun() {
    // console.log("1");
    import('./app.js')
        .then(module => {
            module.run();
            // console.log("2");
        })
        .catch(err => {
            alert("There was some error runing your code!")
        });
    // console.log("4");
}

function themeChange() {
    import('./app.js')
        .then(module => {
            module.changeFunc();
        })
        .catch(err => {
            console.log("There is some error in page.");
            console.log("Will get to you soon!");
        })
}

var clickcount = 5;
var valid = true;
function easteregg() {
    if(valid) {
        clickcount -= 1;
        if(!clickcount){
            console.log("You have found the easter egg!");
            valid = false;
            var EEelem = document.getElementById("easteregg");
            var p = document.createElement("p");
            p.textContent = "Made with ♥ HASSAN MASHMOOM";
            EEelem.appendChild(p);
            EEelem.classList.remove("egghide");
            EEelem.classList.add("showegg");
        }
    }
    else{
        console.log("Don't play again!")
    }
}