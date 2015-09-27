/**
 * Created by macbook on 26.09.15.
 */
function showLogin(){
    $(".fade").css("display", "block");
    $(".fade").css("opacity","1");
    $(".login-form").css("display", "block");
};

function closeForm(){
    $(".fade").css("display", "none");
    $(".fade").css("opacity","0");
    $(".form").css("display", "none");
};

function showAddGame() {
    $(".fade").css("display", "block");
    $(".fade").css("opacity","1");
    $(".add-game-form").css("display", "block");
};

function showAddLink() {
    $(".fade").css("display", "block");
    $(".fade").css("opacity","1");
    $(".add-link-form").css("display", "block");
};