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
       $("#successlist").append("<div id=\"sucldiv\"> <dt>" +hrefs+ "</dt></div> <div id=\"sstate\"> <span id=\"sucspan\">  Success  </span> </div>")
      } 
      else if (!error && response.statusCode != 200) {
        const failhref = hrefs;
        console.log(hrefs, " Failure");
        $("#successlist").append("<div id=\"faildiv\"><dt>" +hrefs+ "</dt></div> <div id=\"fstate\"> <span id=\"failspan\">  Failure  </span> </div>")
      }
    });
  }

// console.log(storedlink);

