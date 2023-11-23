// Set the site where the videos are located.

var siteURL = "https://www.youtube.com/embed/"

// Set the ids of each video which will be appended to the siteURL variable.

var purposeID = "xiQY-qcHz4M?si=Mq9eh3Nu834QJD1f";
var evilID = "7HlSkc3G4ig?si=o-1AtSQMiCrZqjek";
var meritID = "TI9HBpyGzaI?si=vbDLoW_p5BqRqEBi";
var divisionID = "2011gm8b8yI";
var timeID = "OxkkpbUmyoI";

// Click function for all divs with typeWriterButton class.

$(".typeWriterButton").on ("click", function(){
        
    var videoName = $(this).attr("id");

    // Reset the highlighted button.

    $(".typeWriterButton").removeClass("typeWriterButtonHighlight");

    // Change the src of the iframe for the video selected from the typeWriterButton.

    switch (videoName) {
        case "purpose":
            $("#videoFrame").attr("src", siteURL + purposeID);
            $(this).addClass("typeWriterButtonHighlight");
            $("#topicInformation").load('./public/rhinoceros.html');
            break;
        case "evil":
            $("#videoFrame").attr("src", siteURL + evilID);
            $(this).addClass("typeWriterButtonHighlight");
            $("#topicInformation").load('./public/gargoyle.html');
            break;
        case "merit":
            $("#videoFrame").attr("src", siteURL + meritID);
            $(this).addClass("typeWriterButtonHighlight");
            $("#topicInformation").load('./public/whitesavior.html');
            break;
        case "division":
            $("#videoFrame").attr("src", siteURL + divisionID);
            $(this).addClass("typeWriterButtonHighlight");
            $("#topicInformation").load('./public/other.html');
            break;
        case "time":
            $("#videoFrame").attr("src", siteURL + timeID);
            $(this).addClass("typeWriterButtonHighlight");
            $("#topicInformation").load('./public/deeptime.html');
            break;
        default:
            break;
    }
    
});