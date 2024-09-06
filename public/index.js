var noSelection = '-';
var impaleOnOff = 'off';

const searchParams = new URLSearchParams(window.location.search);

if (searchParams.has('selection')) {

    var mapLink = searchParams.get('selection');
    var mapURL = './' + mapLink + '.html';
    
    $("#topicInformation").load(mapURL);
}

/* Functionality for menu

$(".menuButton").on ("mouseover", function(){
        
    $(this).css("background","grey");

});

$(".menuButton").on ("mouseout", function(){

    $(this).css("background","black");

});

$(".menuButton").on ("click", function(){
        
    var menuSelection = $(this).attr("id");
    
});

*/

// Functionality for main page

$("#impale").on ("mouseover", function(){

    switch (impaleOnOff) {
    
        case 'off':
    
            $("#impale").css("background","red");
            $("#impale").html("Warning! Gore");
            break;
    
        case 'on':
    
            $("#impale").css("background","red");
            $("#impale").html("Learn Something");
            break;
        }
});

$("#impale").on ("mouseout", function(){

    switch (impaleOnOff) {
    
        case 'off':
    
            $("#impale").css("background","black");
            $("#impale").html("Learn Something");
            break;
    
        case 'on':
    
            $("#impale").css("background","red");
            $("#impale").html("Learn Something");
            break;
        }

});

$("#impale").on ("click", function(){

    switch (impaleOnOff) {
    
    case 'off':

        $("#impale").css("background","red");
        $("#mainImage").attr("src","./public/images/impalement_small.png");
        impaleOnOff = 'on';
        break;

    case 'on':

        $("#impale").css("background","black");
        $("#mainImage").attr("src","./public/images/potential_impalement_small.png");
        impaleOnOff = 'off';
        break;
    }
});

$(".linkButton").on ("mouseover", function(){

    $(this).css("color","black");
    $(this).css("background","grey");
});

$(".linkButton").on ("mouseout", function(){

    $(this).css("color","white");
    $(this).css("background","black");
});

// Functionality for hexagram page

$(".mapArea").on ("mouseover", function(){
        
    var linkDisplay = $(this).attr("title");

    $("#linkDisplayButton").css("color","white");
    $("#linkDisplayButton").html(linkDisplay);
});

$(".mapArea").on ("mouseout", function(){

    $("#linkDisplayButton").html(noSelection);
    $("#linkDisplayButton").css("color","black");
});

/*
$(".mapArea").on ("click", function(){
        
    var mapLink = $(this).attr("id");
    var mapURL = './' + mapLink + '.html';

    $("#topicInformation").load(mapURL);
});
*/