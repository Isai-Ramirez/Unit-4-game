// declare the variables
window.onload = function () {
    var randomNumber = ""

    for (var i = 0; i < 4; i++) {

        // For each iteration, generate a new random number between 1 and 5.
        var random = Math.random() * 4 + 1;

        randomNumber = random + randomNumber;

    }
    document.getElementById("hiddenNumber").innerHTML = randomNumber;
};
$("#button-1").on("click", function () {
    var random = math.random() * 2 + 1;

    document.getElementById("number1").innerHTML = random;

});
$("#button-2").on("click", function () {
    var random = math.random() * 2 + 1;

    document.getElementById("number2").innerHTML = random;

});
$("#button-3").on("click", function () {
    var random = math.random() * 2 + 1;

    document.getElementById("number3").innerHTML = random;

});
$("#button-4").on("click", function () {
    var random = math.random() * 2 + 1;

    document.getElementById("number4").innerHTML = random;

});