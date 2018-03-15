
//quiz questionsDataBase
var questionsDataBase = [
    {
        question: "How many Oscars has Daniel Day-Lewis won?",
        answers: {
            a: '0',
            b: '1',
            c: '2',
            d: '3',
        },
        correctAnswer: 'd'
    },
    {
        question: "How many solo Batman movies have been made?",
        answers: {
            a: '2',
            b: '4',
            c: '7',
            d: '9',
        },
        correctAnswer: 'c',
    },
    {
        question: "What is the highest grossing movie of all time?",
        answers: {
            a: 'Avatar',
            b: 'Jurassic World',
            c: 'Star Wars: The Force Awakens',
            d: 'Titanic',
        },
        correctAnswer: 'a',
    },
    {
        question: "Who was the highest paid actor in 2017, making a total of $68 million?",
        answers: {
            a: 'Dwayne "The Rock" Johnson',
            b: 'Mark Wahlberg',
            c: 'Vin Diesel',
            d: 'Adam Sandler',
        },
        correctAnswer: 'b',
    },
    {
        question: "What is the most expensive movie ever made at a price tag of $403 million ",
        answers: {
            a: 'Titanic',
            b: 'Spider Man 3',
            c: 'Pirates of the Carribean: On Stranger Tides',
            d: 'Tangled',
        },
        correctAnswer: 'c',
    },
    {
        question: "What is the highest grossing movie franchise of all time?",
        answers: {
            a: 'Marvel Cinematic Universe',
            b: 'Star Wars',
            c: 'Harry Potter',
            d: 'James Bond',
        },
        correctAnswer: 'a',
    },
    {
        question: "What author has had the most books adapted to movies?",
        answers: {
            a: 'Nicholas Sparks',
            b: 'Stephen King',
            c: 'J.K. Rowling',
            d: 'John Grisham',
        },
        correctAnswer: 'b',
    },
];

var questionsDiv = document.getElementById('questions');
var results = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startButton = document.getElementById('start');

generateQuiz(questionsDataBase, results, submitButton, startButton);

function generateQuiz(questionsDataBase, results, submitButton, startButton) {

    function showquestionsDataBase(questionsDataBase) {
        // show Q & A's
        var questions = [];
        var answers

        // input  questionsDataBase
        for (var i = 0; i < questionsDataBase.length; i++) {

            // reset answers
            answers = [];

            // assign answers to letter
            for (letter in questionsDataBase[i].answers) {

                // set up answer type
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questionsDataBase[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            questions.push(
                '<div class="questionsDataBase">' + questionsDataBase[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // list string on html
        questionsDiv.innerHTML = questions.join('');
    }


    function showResults(questionsDataBase, results) {

        // gather answer containers from our quiz
        // var answerContainers = questionsDataBase.querySelectorAll('.answers');
        console.log(questionsDataBase)
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // determine correct answers for each question
        for (var i = 0; i < questionsDataBase.length; i++) {

            userAnswer = $('input[name=question' + i + ']:checked').val();
            console.log(userAnswer)

            // if answer is correct add to correct answer
            if (userAnswer === questionsDataBase[i].correctAnswer) {
                numCorrect++;

            }

            // show number of correct answers out of total
            results.innerHTML = numCorrect + ' out of ' + questionsDataBase.length;
        }





    }


    // on submit, show results
    submitButton.onclick = function () {
        console.log("submitButton")
        showResults(questionsDataBase, results);
        submit();
    }
    startButton.onclick = function () {
        showquestionsDataBase(questionsDataBase)
        run();
        // $("#submitButtom").on("click", function () {
        //     showResults(questionsDataBase, results);
        // }
        //     $("#startButton").on("click", function () {
        //         showquestionsDataBase(questionsDataBase, run);

        //     }

    }
    //Timer for quiz


    //interval ID when we execute
    //  the "start" function

    var number = 30;
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    // $("#start").on("click", run);

    //  When the resume button gets clicked, execute the run function.
    // $("#submit").on("click", stop);
    //  Clearing the intervalId prior to setting our new intervalId 
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {
        

        //  Decrease number by one.
        number--;
        $("#show-number").html("<h2>" + number + "</h2>");
        if (number === 0) {
            submit();
        }
    }
    //  Show the number in the #show-number tag.
   
    $("#show-number").html("<h2>" + number + "</h2>");
    //  The stop function
    function submit() {

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
    }
    //  Execute the run function.


}

//Timer for quiz

//interval ID when we execute
    //  the "start" function
   // var intervalId;

   // var number = 30;

     //  When the start button gets clicked, starts the timer
   // $("#start").on("click", run);

    //  When the stop button gets clicked stops the timer
   // $("#submit").on("click", stop);

    //  Clearing the intervalId prior to setting our new intervalId 
//     function run() {
//       clearInterval(intervalId);
//       intervalId = setInterval(decrement, 1000);
//     }

//     //  The decrement function.
//     function decrement() {

// //  Decrease number by one.
// number--;
// }
// //  Show the number in the #show-number tag.
// $("#show-number").html("<h2>" + number + "</h2>");

//  //  The stop function
//     function submit() {

// //  Clears our intervalId
// //  We just pass the name of the interval
// //  to the clearInterval function.
// clearInterval(intervalId);
// }
//  //  Execute the run function.
//  run();

