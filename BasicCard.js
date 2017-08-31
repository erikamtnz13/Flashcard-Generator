var inquirer = require("inquirer");
var fs = require("fs");
var basicQuestions = require("./questions_basic.js").basicQuestions;
var count = Math.floor(Math.random()*3);

class BasicFlashcard {
    constructor(front, back) {
        //this.count = count;
        this.front = basicQuestions[count].front;
        this.back = basicQuestions[count].back;
        this.type = "basic";
        this.useCard = function() {
            back = this.back;
            //show front
            console.log("");
            console.log("Front: " + this.front);
            //ask if ready for answer
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is on the back?",
                    name: "input",
                }
            ]).then(function(response) {
                //show the result
                if (response.input === back) {
                    console.log("You are correct!");
                    //this.count += 1;
                    console.log("");
                    playAgain();
                    
                }
                else {
                    console.log("Nope.  The back was: " + back);
                    console.log("");
                    playAgain();
                }
                
            });            
        };
    }
};

var newQuestion = new BasicFlashcard();
return newQuestion.useCard();


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
            newQuestion.useCard(); 
            
        }
        else{
            return console.log("Thank You for playing!");
        }
    });
};





