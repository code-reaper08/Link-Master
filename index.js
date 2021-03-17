const request = require("request");
let storedlink = JSON.parse(localStorage.getItem("all_link"));

const body = document.querySelector('body');

const len = storedlink.length;
// console.log(len);

for (let i = 0; i < len; i++) {
    // console.log("loop running")
    const hrefs = storedlink[i].href.replace(/\s\s+/g, "");
    request(hrefs, (error, response, html) => {
      if (!error && response.statusCode == 200) {
        console.log(hrefs, " Success");
       $("#successlist").append("<div id=\"sucldiv\"> <dt>" +hrefs+ " <span id=\"sucspan\">  Success  </span> </dt></div> <br>")
        
      } 
      else if (!error && response.statusCode != 200) {
        const failhref = hrefs;
        console.log(hrefs, " Failure");
        $("#successlist").append("<div id=\"faildiv\"><dt>" +hrefs+ " <span id=\"failspan\">  Failure  </span> </dt></div> <br>")
      }
    });
  }

// console.log(storedlink);

