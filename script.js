(function () {
    console.log("***************GDPR***************")
    window.onload = function(){
        console.log("Window onload")
        const callback = (tcData, success) => {

            if(success && tcData.eventStatus === 'tcloaded') {
          
              // do something with tcData.tcString
          
              // remove the ourself to not get called more than once
              __tcfapi('removeEventListener', 2, (success) => {
          
                if(success) {
          
                  // oh good...
          
                }
          
              }, tcData.listenerId);
          
          
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
