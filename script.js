(function () {
    console.log("***************GDPR***************")
    window.onload = function(){
        console.log("Window onload")
        const callback = (tcData, success) => {
            if(success && tcData.eventStatus === 'tcloaded') {
              // do something with tcData.tcString
              console.log(tcData)
            } else {
              // do something else
            }
        }
          
        __tcfapi('addEventListener', 2, callback);
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
