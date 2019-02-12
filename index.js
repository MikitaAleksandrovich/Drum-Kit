
// Store the number of drum's buttons into variable 

var numberOfDrumButtons = document.querySelectorAll('.drum').length;



// Using for loop loop over each drum and call here call future sound and animate functions when clicked the drum

for (var i = 0; i < numberOfDrumButtons; i ++) {

    document.querySelectorAll('.drum')[i].addEventListener('click', function () {

        // Select THIS of each querySelectorAll('.drum')[i] to use it in functions when clicked
        var buttonInnerHTML = this.innerHTML;

        console.log('pressed');
        
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



function makeSound(key) {

  
	switch (key) {
    
	   case "w":
      
		var tom1 = new Audio("tom-1.mp3");
      
		tom1.play();
      
		break;

    
	   case "a":
      
		var tom2 = new Audio("tom-2.mp3");
      
		tom2.play();
      
		break;

    
	   case "s":
      
		var tom3 = new Audio('tom-3.mp3');
      
		tom3.play();
      
		break;

    
	   case "d":
      
		var tom4 = new Audio('tom-4.mp3');
      
		tom4.play();
      
		break;

    
	   case "j":
      
		var snare = new Audio('snare.mp3');
      
		snare.play();
      
		break;

    
	   case "k":
      
		var crash = new Audio('crash.mp3');
      
		crash.play();
      
		break;

    
	   case "l":
      
		var kick = new Audio('kick-bass.mp3');
      
		kick.play();
     
		break;


    
	   default: 
		console.log(key);

  
}
}








