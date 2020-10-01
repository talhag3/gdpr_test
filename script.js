(function () {
    console.log("***************GDPR***************")
    window.onload = function(){
        console.log("Window onload")
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
