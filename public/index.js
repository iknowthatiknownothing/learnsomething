function randomTopic () {

    function randomGenerator(maxValue){
        var num1 = Math.random();
        var num2 = num1 * maxValue;
        var random1 = Math.floor(num2) + 1;
        return random1;
    }
    
    var randomTopicNum = randomGenerator(5);
    
    if(randomTopicNum === 1) {
    
        window.location="./public/rhinoceros.html";
    
    }
    else if (randomTopicNum === 2) {
    
        window.location="./public/gargoyle.html";
    
    }
    else if (randomTopicNum === 3) {
    
        window.location="./public/other.html";
    
    }
    else if (randomTopicNum === 4) {
    
        window.location="./public/deeptime.html";
    
    }
    else {
    
        window.location="./public/whitesavior.html";
    
    }
    
    }


function hoverLink (linkID) {

    $("#" + linkID).hover(function(){
            
        $("#" + linkID).attr("src", "./public/images/" + linkID + "_desc.jpg");
        
        }, function(){
    
        $("#" + linkID).attr("src", "./public/images/" + linkID + ".jpg");
    
    });
        
};