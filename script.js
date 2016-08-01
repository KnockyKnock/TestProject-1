$(document).ready(function () {
    $('.top-menu button').click(function () {
        $(".top-menu .header-menu").toggleClass("hide");
        $(this).toggleClass("active");
        console.log("click!");
    });
});