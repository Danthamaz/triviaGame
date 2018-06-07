$(document).ready(function () {
    var questionCounter = 0;
    var correctCounter = 0;
    var incorrectCounter = 0;
    var correct = 0;
    var incorrect = 0;
    var secondsLeft = 20;
    var intervalId;

    // Hide all content in mainDiv until start button is pushed
    $(".mainDiv").hide();
    $("#fixed-div-correct").hide()
    $("#fixed-div-wrong").hide()
    $("#gameOver").hide();
    $(".activeTimer").hide();
    // Function below is performed when start button is clicked:
    $(".startButton").on("click", function () {
        // console.log("yes!")
        $(".startButton").hide();
        // $("section").css({
        //     "background-color": "#00FF00",
        //     "border": "2px",
        //     "border-style": "solid",
        //     "border-color": "#BF0A30",
        // });
        $(".mainDiv").show();
        startGame();
    });

    // Question & answer arrays, indexes match each other for easy access
    var questionArray = [
        "What is the northeastern most state of the USA?",
        "Where is the lowest point of the western hemisphere?",
        "What divides Alaska from the rest of the USA?",
        "The Missouri joins the Mississippi just north of which city?",
        "On which Hawaiian island is Honolulu?",
        "Which is the only US state to have been an independent republic?",
        "Which New York island was originally called Gibbet Island?",
        "Where is Sears Tower?"
    ];
    var answerArray = [
        ["Maine", "New Hampshire", "Vermont", "Wisconsin"],
        ["Salton Trough", "Death Valley", "Turfan Depression", "Dead Sea Depression"],
        ["Ontario", "British Columbia", "Alberta", "Saskatchewan"],
        ["Chicago", "St. Louis", "Indianapolis", "Omaha"],
        ["Hawaii", "Maui", "Nihoa", "Oahu"],
        ["Texas", "South Carolina", "Alabama", "Arizona"],
        ["Ellis Island", "Long Island", "Rikers Island", "Hart Island"],
        ["Chicago", "Las Vegas", "San Fransisco", "New York"]
    ];
    var correctArray = [
        "Maine",
        "Death Valley",
        "British Columbia",
        "St. Louis",
        "Oahu",
        "Texas",
        "Ellis Island",
        "Chicago"
    ];

    function startGame() {
        $(".currentQuestion").html("<h1>" + questionArray[questionCounter] + "</h1>");
        $("#optionBtnOneText").text(answerArray[questionCounter][0]);
        $("#optionBtnTwoText").text(answerArray[questionCounter][1]);
        $("#optionBtnThreeText").text(answerArray[questionCounter][2]);
        $("#optionBtnFourText").text(answerArray[questionCounter][3]);
        questionCounter = 0;
        correctCounter = 0;
        incorrectCounter = 0;
        startCountdown();
    }

    function nextQuestion() {
        showMain();
        startCountdown();
        if (questionCounter > 6) {
            endGame();
        } else {
            $(".currentQuestion").html("<h1>" + questionArray[questionCounter] + "</h1>");
            $("#optionBtnOneText").text(answerArray[questionCounter][0]);
            $("#optionBtnTwoText").text(answerArray[questionCounter][1]);
            $("#optionBtnThreeText").text(answerArray[questionCounter][2]);
            $("#optionBtnFourText").text(answerArray[questionCounter][3]);
            startCountdown();
        };
    };

    function endGame() {
        console.log("Done");
        hideMain();
        $("#guessesCorrect").append(correct);
        $("#guessesIncorrect").append(incorrect);
        $("#gameOver").show();
        $(".activeTimer").hide();
        stop();
    }

    function correctAnswer() {
        hideMain();
        showCorrect();
        $(".activeTimer").hide();
        correct++;
    };

    function incorrectAnswer() {
        hideMain();
        showWrong();
        $(".activeTimer").hide();
        incorrect++;
    };

    function hideMeme() {
        $("#fixed-div-correct").hide();
        $("#fixed-div-wrong").hide();
    };

    function showCorrect() {
        $("#fixed-div-correct").show();
        setTimeout(hideMeme, 2000);
        setTimeout(nextQuestion, 2000);
    };

    function showWrong() {
        $("#fixed-div-wrong").show();
        setTimeout(hideMeme, 2000);
        setTimeout(nextQuestion, 2000);
    };

    function hideMain() {
        // way to hide content
        $(".currentQuestion").hide();
        $(".optionBtn").hide();
    }

    function showMain() {
        // way to show content
        $(".currentQuestion").show();
        $(".optionBtn").show();
    };

    function startCountdown() {
        // 20 second timer for questions
        secondsLeft = 20;
        $(".activeTimer").show();
        $(".activeTimer").html("<h2>" + secondsLeft + " seconds remaining.</h2>");
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
        secondsLeft--;
        $(".activeTimer").html("<h2>" + secondsLeft + " seconds remaining.</h2>");

        if (secondsLeft === 0) {
            stop();
            incorrectAnswer();
            questionCounter++;
        };
    };

    function stop() {
        clearInterval(intervalId);
    };

    // Four click functions to respond to user input.. Need to find a way to combine into less code
    $("#optionBtnOneText").click(function () {
        if ((answerArray[questionCounter][0]) == correctArray[questionCounter]) {
            //console.log('correct');
            correctAnswer();
        } else {
            //console.log("wrong!");
            incorrectAnswer();
        };
        questionCounter++;
    });
    $("#optionBtnTwoText").click(function () {
        if ((answerArray[questionCounter][1]) == correctArray[questionCounter]) {
            //console.log('correct');
            correctAnswer();
        } else {
            //console.log("wrong!");
            incorrectAnswer();
        };
        questionCounter++;
    });
    $("#optionBtnThreeText").click(function () {
        if ((answerArray[questionCounter][2]) == correctArray[questionCounter]) {
            //console.log('correct');
            correctAnswer();
        } else {
            //console.log("wrong!");
            incorrectAnswer();
        };
        questionCounter++;
    });
    $("#optionBtnFourText").click(function () {
        if ((answerArray[questionCounter][3]) == correctArray[questionCounter]) {
            //console.log('correct');
            correctAnswer();
        } else {
            //console.log("wrong!");
            incorrectAnswer();
        };
        questionCounter++;
    });
});