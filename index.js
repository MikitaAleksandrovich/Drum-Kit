

// Store the number of drum's buttons into variable 
var numberOfDrumButtons = document.querySelectorAll('.drum').length;


// Using for loop loop over each drum and call here call future sound and animate functions when clicked the drum
for (var i = 0; i < numberOfDrumButtons; i ++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function () {

        // Select THIS of each querySelectorAll('.drum')[i] to use it in functions when clicked
        var buttonInnerHTML = this.innerHTML;

        // Call functions
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

// Call same functions when pressed drum's buttons (depending on key (w, a, s, d and etc))
document.addEventListener('keypress', function (event) {

    makeSound(event.key);
    buttonAnimation(event.key);

});



