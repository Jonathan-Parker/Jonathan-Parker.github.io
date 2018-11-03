function scrollText (title) {
    var scroll = document.getElementById("scroll");

   scroll.innerHTML = title;

}
setTimeout (function () {
        scrollText("Super");
    }, 1600);

    setTimeout (function () {
        scrollText("Cheesey/Corney");
    }, 1900);


    setTimeout (function () {
        scrollText("Awesome");
    }, 2300);

    setTimeout (function () {
        scrollText("Great");
    }, 2700);

    setTimeout (function () {
        scrollText("Web");
    }, 3100);