
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
