var noSelection = '-';

const searchParams = new URLSearchParams(window.location.search);

if (searchParams.has('selection')) {

    var mapLink = searchParams.get('selection');
    var mapURL = './public/' + mapLink + '.html';
    
    $("#topicInformation").load(mapURL);
}

$(".mapArea").on ("click", function(){
        
    var mapLink = $(this).attr("id");
    var mapURL = './public/' + mapLink + '.html';

    $("#topicInformation").load(mapURL);
});

$(".mapArea").on ("mouseover", function(){
        
    var linkDisplay = $(this).attr("title");

    $("#linkDisplayButton").css("color","white");
    $("#linkDisplayButton").html(linkDisplay);
});

$(".mapArea").on ("mouseout", function(){

    $("#linkDisplayButton").html(noSelection);
    $("#linkDisplayButton").css("color","black");
});