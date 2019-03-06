
var answerscorrect = 0;
var answersmissed = 0;
var timer = 0;



$(document).ready(function() {

    $("#startBtn").click(startGame);
    //console.log(this)

    //set and start timer


});

function startGame () {

    var answerArray = [];

    var questions = {


        
        q1: {
            answerChoices: ["q1a1", "q1a2", "q1a3", "q1a4"],
            correctAnswer: "q1a2"
        },

        q2: {
            answerChoices: ["q2a1", "q2a2", "q2a3", "q2a4"],
            correctAnswer: "q2a1"
        },

        q3: {
            answerChoices: ["q3a1", "q3a2", "q3a3", "q3a4"],
            correctAnswer: "q3a4"
        },

        q4: {
            answerChoices: ["q4a1", "q4a2", "q4a3", "q4a4"],
            correctAnswer: "q4a4"
        }
        
    };

    var userChoice = [questions.q1.answerChoices[""], questions.q2.answerChoices[""], questions.q3.answerChoices[""], questions.q4.answerChoices[""]];
    
    //let x = answerInput;
    //["q1a1", "q1a2", "q1a3", "q1a4", "q2a1", "q2a2", "q2a3", "q2a4", "q3a1", "q3a2", "q3a3", "q3a4", "q4a1", "q4a2", "q4a3" , "q4a4"];

    var correctAnswers = ["q1a2", "q2a1", "q3a4", "q4a4"];


    function findCorrect () {
        for(let i=0; i<answerArray.length, i++;) {
            for(let j=0; j<correctAnswers.length, j++;) {
                if(answerArray[i] === correctAnswers[i]) {
                    answerscorrect++;
                }

                else {
                    answersmissed++;
                }
                
                $("#quizbox").hide();
       
                $("#answerscorrect").show();
                   
       
            


            }
        }
    }


    
    $("#startgame").hide();
    $("#quizbox").show();
    

        var counter = 61;
            var x = setInterval(function () {

                counter = counter-1;
                $('#timer').html(counter);

                if(counter === 0) {
                    clearInterval();
                    $("#quizbox").hide();
                    $("#answerscorrect").show();
                }

            },1000);
            
            
            


    $(".option").on("click", function(event) {
        console.log(this)
        //$(".option").each(function (){
            var xyz = $("input[class=option]:checked").val();
            console.log(xyz);
            var answerArray = [];
  
            $(".option").each(function() {
                $(this).change(function() {
                    
                    if(this.checked) {
                        answerArray.push($(this).attr("data-id"));
                        console.log(answerArray)}
                    });           
                
                    
                
                
                
                
                });




          
        
        });

        
      
    };
    
    $("#submitBtn").click(findCorrect);

        
       
        
       
