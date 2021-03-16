const request = require("request");
let storedlink = JSON.parse(localStorage.getItem("all_link"));

const link = document.createElement('h1');
const body = document.querySelector('body');

const len = storedlink.length;
// console.log(len);

for (let i = 0; i < len; i++) {
    // console.log("loop running")
    const hrefs = storedlink[i].href.replace(/\s\s+/g, "");
    request(hrefs, (error, response, html) => {
      if (!error && response.statusCode == 200) {
        console.log(hrefs, " Success");
        body.append(link);
        link.innerHTML = hrefs;
      } else if (!error && response.statusCode != 200) {
        console.log(hrefs, " Failure");
      }
    });
  }

// console.log(storedlink);

