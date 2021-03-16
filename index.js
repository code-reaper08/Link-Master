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
       $("#successlist").append("<li>" +hrefs+ " <span>  Success  </span> </li>")
        
      } 
      else if (!error && response.statusCode != 200) {
        const failhref = hrefs;
        console.log(hrefs, " Failure");
        $("#successlist").append("<li>" +hrefs+ " <span>  Failure  </span> </li>")
      }
    });
  }

// console.log(storedlink);

