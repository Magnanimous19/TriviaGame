
//---------------------------  Submit button function ----------------------
function check() {

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;

// ---------------------- Variable for holding amount correct ----------------
var correct = 0;

        if (question1 == "Chaser") {
          correct++;
        }
        if (question2 == "Tallahassee") {
          correct++;
        }
        if (question3 == "white") {
          correct++;
        }
        if (question4 == "Burj Khalifia") {
          correct++;
        }

document.getElementById("after_submit").style.visibility = "visible";
alert("You got " + correct + " correct.");

}


///------------------Timer Variable ----------------------------
//var number = 30;
//var intervalId;



//$("#start_quiz").on("click", start_quiz);


//---------------------------- Timer and Interval ---------------------
//function start_quiz () { 

//    clearInterval(intervalId);
//    intervalId = setInterval(start, 1000);

        //  Decrease number by one.
 ///       number--;

        //  Show the number in the #show-number tag.
//      $("show_number").html("<h2>Time Remaining: " + number + "</h2>");
    
        //  Once number hits zero...
 //       if (number === 0) {

        // stop once it hits 0
  //      clearInterval(intervalId);        
            
   //         Alert the user that time is up.
 //         alert("Time Up!");
  //      }

//}


//});





////////////////////////////count for correct and incorrect answers////////////////////////////
//var correctAnswer = 0;
//var incorrectAnswer = 0;
//var unanswered = 0;

/////////////////////////////Question Array/////////////////////////////////////
//var triviaQuestions = [
 // {   
 //   question: "Which of the following is not a Nissan car?", 
 //     answerList:  { a:"Silvia", b:"Skyline", c:"Cefiro", d:"Chaser"},
 //     answer: "d",
 // },

 // {  
  //   question: "What is the capital of Florida?", 
 //     answerList:  { a:"Tallahassee", b:"Jackson", c:"Augusta", d:"Boise"}
 //     answer: "a",
 // },

 // {   
 //   question: "Which of the following is not in the rainbow?", 
//      answerList:  { a:"red", b:"white", c:"blue", d:"green"}
 //     answer: "b",
 // },


 // {   question: "Which of the following is the tallest building in the world?", 
 //     answerList:  { a:"Burj Khalifia", b:"Lotte Tower", c:"Goldin Finance", d:"Shanghai Tower"}
 //     answer: "a",
 // },

//];

//});