$(function() {
    const dictionary = [
        { en: "always", uk: "завжди" },
        { en: "apple", uk: "яблуко" },
        { en: "book", uk: "книга" },
        { en: "cat", uk: "кіт" },
        { en: "dog", uk: "собака" },
        { en: "house", uk: "будинок" },
        { en: "water", uk: "вода" },
        { en: "sun", uk: "сонце" },
        { en: "friend", uk: "друг" },
        { en: "school", uk: "школа" }
    ];

    let currentIndex = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let shuffledWords = [];

    function initQuiz() {
        shuffledWords = [...dictionary].sort(() => 0.5 - Math.random());
        currentIndex = 0;
        correctCount = 0;
        incorrectCount = 0;
        updateCard();
    }

    function updateCard() {
        $("#wordText").text(shuffledWords[currentIndex].en);
        $("#stepIndicator").text((currentIndex + 1) + "/" + shuffledWords.length);
        $("#userAnswer").val("");
        updateStats();
    }

    function updateStats() {
        $("#correctCount").text(correctCount);
        $("#incorrectCount").text(incorrectCount);
    }

    function checkAnswer() {
        let userVal = $("#userAnswer").val().trim().toLowerCase();
        if (userVal === "") {
            return;
        }

        let correctVal = shuffledWords[currentIndex].uk.toLowerCase();

        if (userVal === correctVal) {
            correctCount++;
        } else {
            incorrectCount++;
        }
        updateStats();

        if (currentIndex < shuffledWords.length - 1) {
            currentIndex++;
            updateCard();
        } else {
            showModal();
        }
    }

    function showModal() {
        let level = "";
        let total = shuffledWords.length;
        let percent = (correctCount / total) * 100;

        if (percent >= 80) {
            level = "Високий рівень (Advanced)";
        } else if (percent >= 50) {
            level = "Середній рівень (Intermediate)";
        } else {
            level = "Початковий рівень (Beginner)";
        }

        $("#modalText").html("Вірно: " + correctCount + " з " + total + "<br>Рівень знань: <b>" + level + "</b>");
        $("#modal").css("display", "flex");
    }

    initQuiz();

    $("#wordCard, #nextBtn").click(function() {
        checkAnswer();
    });

    $("#prevBtn").click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCard();
        }
    });

    $("#userAnswer").keypress(function(event) {
        if (event.which === 13) {
            checkAnswer();
        }
    });

    $("#statBtn").click(function() {
        showModal();
    });

    $("#closeModal").click(function() {
        $("#modal").css("display", "none");
        initQuiz();
    });
});$(function() {
    const dictionary = [
        { en: "always", uk: "завжди" },
        { en: "apple", uk: "яблуко" },
        { en: "book", uk: "книга" },
        { en: "cat", uk: "кіт" },
        { en: "dog", uk: "собака" },
        { en: "house", uk: "будинок" },
        { en: "water", uk: "вода" },
        { en: "sun", uk: "сонце" },
        { en: "friend", uk: "друг" },
        { en: "school", uk: "школа" }
    ];

    let currentIndex = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let shuffledWords = [];

    function initQuiz() {
        shuffledWords = [...dictionary].sort(() => 0.5 - Math.random());
        currentIndex = 0;
        correctCount = 0;
        incorrectCount = 0;
        updateCard();
    }

    function updateCard() {
        $("#wordText").text(shuffledWords[currentIndex].en);
        $("#stepIndicator").text((currentIndex + 1) + "/" + shuffledWords.length);
        $("#userAnswer").val("");
        updateStats();
    }

    function updateStats() {
        $("#correctCount").text(correctCount);
        $("#incorrectCount").text(incorrectCount);
    }

    function checkAnswer() {
        let userVal = $("#userAnswer").val().trim().toLowerCase();
        if (userVal === "") {
            return;
        }

        let correctVal = shuffledWords[currentIndex].uk.toLowerCase();

        if (userVal === correctVal) {
            correctCount++;
        } else {
            incorrectCount++;
        }
        updateStats();

        if (currentIndex < shuffledWords.length - 1) {
            currentIndex++;
            updateCard();
        } else {
            showModal();
        }
    }

    function showModal() {
        let level = "";
        let total = shuffledWords.length;
        let percent = (correctCount / total) * 100;

        if (percent >= 80) {
            level = "Високий рівень (Advanced)";
        } else if (percent >= 50) {
            level = "Середній рівень (Intermediate)";
        } else {
            level = "Початковий рівень (Beginner)";
        }

        $("#modalText").html("Вірно: " + correctCount + " з " + total + "<br>Рівень знань: <b>" + level + "</b>");
        $("#modal").css("display", "flex");
    }

    initQuiz();

    $("#wordCard, #nextBtn").click(function() {
        checkAnswer();
    });

    $("#prevBtn").click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCard();
        }
    });

    $("#userAnswer").keypress(function(event) {
        if (event.which === 13) {
            checkAnswer();
        }
    });

    $("#statBtn").click(function() {
        showModal();
    });

    $("#closeModal").click(function() {
        $("#modal").css("display", "none");
        initQuiz();
    });
});