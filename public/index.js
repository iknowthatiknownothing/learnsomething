var siteURL = "https://www.youtube.com/embed/"
var purposeID = "xiQY-qcHz4M?si=Mq9eh3Nu834QJD1f";
var evilID = "7HlSkc3G4ig?si=o-1AtSQMiCrZqjek";
var evilHTML = "<h3>Literary Reference</h3><ol><li><a href='https://www.amazon.com/Origin-Satan-Christians-Demonized-Heretics/dp/0679731180' target='_blank'>The Origin of Satan: How Christians Demonized Jews, Pagans, and Heretics</a> by Elaine Pagels</li><li><a href='https://youtu.be/C6zovYEZs5g?si=0Nb_Ekf7qDrX3SOT'>Satan is Real</a> by the Louvin Brothers</li></ol>"
var meritID = "TI9HBpyGzaI?si=vbDLoW_p5BqRqEBi";
var divisionID = "2011gm8b8yI";
var timeID = "OxkkpbUmyoI";

    $(".typeWriterButton").on ("click", function(){
        
        var videoName = $(this).attr("id");

        switch (videoName) {
            case "purpose":
                $("#videoFrame").attr("src", siteURL + purposeID);
                break;
            case "evil":
                $("#videoFrame").attr("src", siteURL + evilID);
                //$("#topicInformation").html (evilHTML);
                break;
            case "merit":
                $("#videoFrame").attr("src", siteURL + meritID);
                break;
            case "division":
                $("#videoFrame").attr("src", siteURL + divisionID);
                break;
            case "time":
                $("#videoFrame").attr("src", siteURL + timeID);
                break;
            default:
                break;
        }
    
    });

/*
function hoverLink (linkID) {

    $("#" + linkID).hover(function(){
            
        $("#" + linkID).attr("src", "./public/images/" + linkID + "_desc.jpg");
        
        }, function(){
    
        $("#" + linkID).attr("src", "./public/images/" + linkID + ".jpg");
    
    });
        
};
*/