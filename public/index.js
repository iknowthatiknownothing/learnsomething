function randomTopic () {

    function randomGenerator(maxValue){
        var num1 = Math.random();
        var num2 = num1 * maxValue;
        var random1 = Math.floor(num2) + 1;
        return random1;
    }
    
    var randomTopicNum = randomGenerator(3);
    
    if(randomTopicNum === 1) {
    
        window.location="./public/rhinoceros.html";
    
    }
    else if (randomTopicNum === 2) {
    
        window.location="./public/gargoyle.html";
    
    }
    else {
    
        window.location="./public/whitesavior.html";
    
    }
    
    }