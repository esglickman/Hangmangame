var wordGuess = ["lenovo", "cheerio"];

var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;

var remainingGuess = 8;

var random = Math.floor((Math.random()*(wordGuess.length-1)));

var empty = [];

var nothing = "";

var pickWord = wordGuess[random];

var wordLength = [pickWord.length];

var fehler = 0;
//when the game starts, 8 guesses are allowed, wordUsed will be used 
//to keep track of the words used, the console should log the guessed words
function lines() {

//randomized the word getting picked
nothing= wordGuess[Math.floor(Math.random() * wordGuess.length)];

//depending on the word length, a _ will show up for each word
empty = [];
for (i=0; i <nothing.length; i++) {
	empty[i] = "_";
}
	document.getElementById("dashes").innerHTML = empty.join(" ");
	document.getElementById("wordss").innerHTML = "Press a key to start!";
	console.log(nothing);
}

lines();

//function for whenever a key is typed, it runs through the word 
/*check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  } */

//When user presses a key, it runs this function
document.onkeyup = function(lenovo) {
//determines what key was pressed
	var userGuess = event.key;

	if ((userGuess === "l") || (userGuess === "e") || (userGuess === "n") 
		|| (userGuess === "o") || (userGuess === "v") || (userGuess === "o"))  {

		document.getElementById("dashes").innerHTML = userGuess;
	//} else {
	//	remainingGuess--;
	}
	
}

document.onkeyup = function(cheerio) {
//determines what key was pressed
  var userGuess = event.key;

  if ((userGuess === "c") || (userGuess === "h") || (userGuess === "e") 
    || (userGuess === "e") || (userGuess === "r") || (userGuess === "i") || (userGuess === "o"))  {

    document.getElementById("dashes").innerHTML = userGuess;

    }

}


