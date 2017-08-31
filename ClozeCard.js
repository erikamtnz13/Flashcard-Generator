
var inquirer = require("inquirer");
var fs = require("fs");
var clozeQuestions = require("./cloze_questions.js").clozeQuestions;
var count = Math.floor(Math.random()*3);


function ClozeFlashard(text, cloze){
    this.text = clozeQuestions[count].text;
    this.cloze = clozeQuestions[count].cloze;
    this.type = "cloze";
    this.returnClozeDeleted = function(){  
        var textArray = this.text.split(this.cloze);
        var clozeDeleted = textArray.join(". . .");
        return clozeDeleted;
    };
    this.useCard = function(){
        //show cloze deleted text 
        var clozeDeleted = this.returnClozeDeleted();
        var answer = this.text;
        var cloze = this.cloze;
        console.log("");
        console.log("Question: " + clozeDeleted);
        //ask if ready for answer
        inquirer.prompt([
            {
                type: "input",
                message: "Fill in the blank:",
                name: "input",
            }
        ]).then(function(response){
            //show the result
            if (response.input === cloze){
                console.log("You are correct!");
                console.log("");
                console.log("The whole sentence was: " + answer);
                playAgain();
            } else {
                console.log("Nope. The answer was: " + cloze);
                console.log("");
                console.log("The whole sentence was: " + answer);
                playAgain();
            };
            
        })
    };
}

var newGame = new ClozeFlashard();
newGame.useCard();

function playAgain(){
    
     inquirer.prompt([
         {  
             type: 'list',
             message: 'Would you like to play again?',
             choices: ['Yes','No'],
             name: "response"
     }
     ]).then(function(response){
         if (response.response === "Yes"){
             //this.count++;
             //console.log(newQuestion.count);
             newGame.useCard(); 
             
         }
         else{
             return console.log("Thank You for playing!");
         }
     });
 };