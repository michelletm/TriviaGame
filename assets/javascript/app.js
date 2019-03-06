
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
        
        theBoris: {
            answerChoices: ["q1a1", "q1a2", "q1a3", "q1a4"],
            correctAnswer: "q1a2"
        },

        theNos: {
            answerChoices: ["q2a1", "q2a2", "q2a3", "q2a4"],
            correctAnswer: "q2a1"
        },

        theDrac: {
            answerChoices: ["q3a1", "q3a2", "q3a3", "q3a4"],
            correctAnswer: "q3a4"
        },

        theBride: {
            answerChoices: ["q4a1", "q4a2", "q4a3", "q4a4"],
            correctAnswer: "q4a4"
        }
        
    };

    var userChoice = [questions.theBoris.answerChoices[""], questions.theNos.answerChoices[""], questions.theDrac.answerChoices[""], questions.theBride.answerChoices[""]];
    
    //let x = answerInput;
    //["q1a1", "q1a2", "q1a3", "q1a4", "q2a1", "q2a2", "q2a3", "q2a4", "q3a1", "q3a2", "q3a3", "q3a4", "q4a1", "q4a2", "q4a3" , "q4a4"];

    let answerInput = userChoice;


    


    //var countdown = 
    
    //var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $("#startgame").hide();
    $("#quizbox").show();
    //$("#minsSeconds").text("seconds");

        var counter = 61;
            var x = setInterval(function () {

            counter = counter-1;
            $('#timer').html(counter);

            if(x === 0) {
                $("#answerscorrect").show();
            }

            },1000);
            
            
            


    $(".option").on("click", function(event) {
        console.log(this)
        $(".option").each(function (){
            userChoice[this] = answerInput;
            answerArray.push(answerInput);
            console.log(answerInput)
            
            //$(this).val("data-id");
            //console.log()
            
            //answerArray.push();
            //console.log(answerArray);
            //if(answerInput === correctAnswer) {
                //answerscorrect++;

            //}
            
            //else {
                //answersmissed++;
            //}


        
        });

        
        //push.answerArray 
    });
    
    $("#submitBtn").on("click", function(event) {
        $("#quizbox").hide();
       $("#answerscorrect").show();
            //if()
    });
    
    

}