(function () {
    console.log("***************GDPR***************")
    window.onload = function(){
        console.log("Window onload")
        __tcfapi('addEventListener', 2, function(tcData, success) {
            if (success) {
                if (tcData.gdprApplies) {
                    if (tcData.eventStatus == 'useractioncomplete' || tcData.eventStatus == 'tcloaded') {
                        console.log(tcData)
                    }
                } else {
                    console.log("No Success")
                }
            }
        });
    }
    
    function checkConcent(){
        window.__tcfapi('getTCData', 2, (tcData, success) => {
            if(success) {
              console.log(tcData)
            } else {
                console.log("cant get any tcData")
            }
        });
    }



    console.log("***************GDPR***************")
}());
