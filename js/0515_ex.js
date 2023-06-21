function calc() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var sum;

    sum = parseInt(x) + parseInt(y);
    document.getElementById("sum").value=sum;
}

function func() {
    e = document.getElementById("test");
    e.style.color="red";
}

var computerNumber = 53;
var nGuesses = 0;

function guess() {
    var result="";

    num = parseInt(document.getElementById("user").value);

    if(num == computerNumber) {
        result = "성공입니다.";
        nGuesses=0;
    } else if(num < computerNumber) {
        result = "낮습니다.";
        nGuesses++;
    } else {
        result="높습니다.";
        nGuesses++;
    }

    document.getElementById("result").value=result;
    document.getElementById("guesses").value=nGuesses;
    return true;
}

