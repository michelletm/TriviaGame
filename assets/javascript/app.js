var answerscorrect = 0;
var answersmissed = 0;
var timer = 0;

const answerKey = {
    q1click: "q1a2",
    q2click: "q2a1",
    q3click: "q3a4",
    q4click: "q4a4"

}


function startGame () {

    var answerArray = [];


    // var questions = {


        
    //     q1: {
    //         answerChoices: ["q1a1", "q1a2", "q1a3", "q1a4"],
    //         correctAnswer: "q1a2"
    //     },

    //     q2: {
    //         answerChoices: ["q2a1", "q2a2", "q2a3", "q2a4"],
    //         correctAnswer: "q2a1"
    //     },

    //     q3: {
    //         answerChoices: ["q3a1", "q3a2", "q3a3", "q3a4"],
    //         correctAnswer: "q3a4"
    //     },

    //     q4: {
    //         answerChoices: ["q4a1", "q4a2", "q4a3", "q4a4"],
    //         correctAnswer: "q4a4"
    //     }
        
    // };

    //var userChoice = [questions.q1.answerChoices[""], questions.q2.answerChoices[""], questions.q3.answerChoices[""], questions.q4.answerChoices[""]];
    
    //let x = answerInput;
    //["q1a1", "q1a2", "q1a3", "q1a4", "q2a1", "q2a2", "q2a3", "q2a4", "q3a1", "q3a2", "q3a3", "q3a4", "q4a1", "q4a2", "q4a3" , "q4a4"];

    var correctAnswers = ["q1a2", "q2a1", "q3a4", "q4a4"];

    //const answerKey = {
        //q1click: "q1a2",
        //q2click: "q2a1",
        //q3click: "q3a4",
        //q4click: "q4a4"
    
    //}
   


    
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
            
} 

function restartGame () {

    answerscorrect = 0;
    answersmissed = 0;
    counter === 0;
    answerArray = [""];
    //$("#numCorrect").text("0");
    //$("#numMissed").text("0");
    $("#answerscorrect").hide();
    $("#startgame").show();
    var counter = 61;
    var x = setInterval(function () {

        counter = counter-1;
        $('#timer').html(counter);

    },1000);
}



            
$(document).ready(function() {

    $("#startBtn").click(startGame);

    $(".option").on("click", function(event) {
        console.log(this)
        //$(".option").each(function (){
            var xyz = $("input[class=option]:checked").val();
            console.log(xyz);
           
            var answerArray = [];
    
            $(".option").each(function() {

                //var answerscorrect = 0;

                if ($(this).is(":checked") === true) {

                    var q = $(this).attr("name")
                    var ans = $(this).attr("data-id")

                        if (ans == answerKey[q]) {
                            answerscorrect++;
                        }

                        else {
                            answersmissed++;
                        }

                }

                ////////START HERE
                
                //$(this).change(function() {
                        
                    //if(this.checked) {
                        //answerArray.push($(this).attr("data-id"));
                        //console.log(answerArray)}
                    //});          
                    
                    //for(let i=0; i < answerArray.length, i++;) {
                        //for(let j=0; j < correctAnswers.length, j++;) {
                            //if(answerArray[i] === correctAnswers[j]) {
                                //answerscorrect++;
                            //}
            
                            //else {
                                //answersmissed++;
                            //}
                        //}   
                    //}
                    
                //});
            });

            
        
        
        });

       
    
    $("#submitBtn").on("click", function (event) {

            $("#quizbox").hide();
            $("#answerscorrect").show();
            $("#numCorrect").text(answerscorrect);
            $("#numMissed").text(answersmissed);
                
    
            //setTimeout(restartGame, 6000);


        
        
    });

});
