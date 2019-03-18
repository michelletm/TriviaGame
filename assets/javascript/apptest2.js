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

    //var answerArray = [];


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
    $(".counter").show();
    $("#quizbox1").show();
    $("#quizbox2").hide();
    $("#quizbox3").hide();
    $("#quizbox4").hide();
    

    var duration = moment.duration({
      'minutes': 3,
      "seconds": 00
    });
  
    var timestamp = new Date(0, 0, 0, 2, 10, 30);
    var interval = 1;
    var timer = setInterval(function() {
      timestamp = new Date(timestamp.getTime() + interval * 1000);

   
        duration = moment.duration(duration.asSeconds() - interval, 'seconds');
        var min = duration.minutes();
        var sec = duration.seconds();

        sec -= 1;
        if (min < 0) return clearInterval(timer);
        if (min < 10 && min.length != 2) min = '0' + min;
        if (sec < 0 && min != 0) {
            min -= 1;
            sec = 59;
        } else if (sec < 10 && sec.length != 2) sec = '0' + sec;

        $('.countdown').text(min + ':' + sec);
        if (min == 0 && sec == 0)
            clearInterval(timer);



        }, 1000);
            
} 

function restartGame () {

    answerscorrect = 0;
    answersmissed = 0;
    //counter === 0;
    answerArray = [""];
    //$("#numCorrect").text("0");
    //$("#numMissed").text("0");
    $("#answerscorrect").hide();
    $("#timeanswerscorrect").hide();
    $("#startgame").show();
    //setInterval(timer);
}



            
$(document).ready(function() {

    $(".counter").hide();
    $("#startBtn").click(startGame);

    $(".option").on("click", function(event) {
        console.log(this)
        //$(".option").each(function (){
            var xyz = $("input[class=option]:checked").val();
            console.log(xyz);
           
            //var answerArray = [];
    
            $(".option").each(function() {

                //var answerscorrect = 0;

                if ($(this).is(":checked") === true) {

                    var q = $(this).attr("name")
                    var ans = $(this).attr("data-id")

                        if (ans == answerKey[q]) {
                            answerscorrect+1;
                            console.log(answerscorrect);
                        }

                        else {
                            answersmissed+1;
                            console.log(answersmissed);
                       }               
                    
            
                };    
            });
                
    
    });

    if (min == 0 && sec == 0) {


        $("#quizbox4").hide();
        $("#timeanswerscorrect").hide();
        $("#answerscorrect").show();

        clearInterval(timer);
    }

    else {

        $("#answerscorrect").hide();
        $("#timeanswerscorrect").show();
    }
    
    $("#numCorrect").text(answerscorrect);
    $("#numMissed").text(answersmissed);

    $(".option").attr("checked", false);
    
    
    // $('.countdown').text(min + ':' + sec);
    //     if (min == 0 && sec == 0)
    //     clearInterval(timer);
    //     $("#quizbox").hide();
    //         $("#answerscorrect").show();      


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
    
       
    
        $("#submitBtn1").on("click", function (event) {
        

            $("#quizbox1").hide();
            $("#quizbox2").show();
            $("#quizbox3").hide();
            $("#quizbox4").hide();

            $("#timeanswerscorrect").hide();
            $("#answerscorrect").hide();
            // $("#numCorrect").text(answerscorrect);
            // $("#numMissed").text(answersmissed);

            var q = $(this).attr("name")
                    var ans = $(this).attr("data-id")

                        if (ans == answerKey[q]) {
                            answerscorrect+1;
                            console.log(answerscorrect);
                        }

                        else {
                            answersmissed+1;
                            console.log(answersmissed);
                       }        
    
        
        });

        $("#submitBtn2").on("click", function (event) {

            $("#quizbox1").hide();
            $("#quizbox2").hide();
            $("#quizbox3").show();
            $("#quizbox4").hide();

            $("#timeanswerscorrect").hide();
            $("#answerscorrect").hide();
            // $("#numCorrect").text(answerscorrect);
            // $("#numMissed").text(answersmissed);
                
        });

        $("#submitBtn3").on("click", function (event) {

            $("#quizbox1").hide();
            $("#quizbox2").hide();
            $("#quizbox3").hide();
            $("#quizbox4").show();

            $("#timeanswerscorrect").hide();
            $("#answerscorrect").hide();
            // $("#numCorrect").text(answerscorrect);
            // $("#numMissed").text(answersmissed);
                
        
        });

            $("#submitBtn4").on("click", function (event) {
                // var duration = moment.duration({
                //     'minutes': 3,
                //     "seconds": 00
                // });
                
                // var timestamp = new Date(0, 0, 0, 2, 10, 30);
                // var interval = 0;
                
                // var timer = setInterval(function() {
                //     timestamp = new Date(timestamp.getTime() + interval * 1000);
            
                
                //     duration = moment.duration(duration.asSeconds() - interval, 'seconds');
                //     var min = duration.minutes();
                //     var sec = duration.seconds();


                    $("#quizbox1").hide();
                    $("#quizbox2").hide();
                    $("#quizbox3").hide();
                    $("#quizbox4").hide();

                    $(".counter").hide();

                    // $('.countdown').text(min + ':' + sec);
                    
                    // if (min == 0 && sec == 0) {


                    //     $("#quizbox4").hide();
                    //     $("#timeanswerscorrect").hide();
                    //     $("#answerscorrect").show();

                    //     clearInterval(timer);
                    // }

                    // else {

                    //     $("#answerscorrect").hide();
                    //     $("#timeanswerscorrect").show();
                    // }
                    
                    // $("#numCorrect").text(answerscorrect);
                    // $("#numMissed").text(answersmissed);

                    // $(".option").attr("checked", false);

                    // //setTimeout(restartGame, 8000);
            
            });
        
