const request = require("request");
const cheerio = require("cheerio");

let urllink = sessionStorage.getItem("userlink");
console.log(urllink);
request(
  urllink,
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const linkObjects = $("#readme > article").children().find("a");
      const links = [];
      linkObjects.each((index, element) => {
        links.push({
          // text: $(element).text(),
          href: $(element).attr("href"),
        });
      });
      const len = links.length;
      //   console.log(len);
      // console.log(links);
      // var arrayLength = myStringArray.length;
      // for (let i = 0; i < len; i++) {
      //   // console.log("loop running")
      //   const hrefs = links[i].href.replace(/\s\s+/g, "");
      //   request(hrefs, (error, response, html) => {
      //     if (!error && response.statusCode == 200) {
      //       console.log(hrefs, " Success");
      //     } else if (!error && response.statusCode != 200) {
      //       console.log(hrefs, " Failure");
      //     }
      //   });
      // }
      
       for (let i = 0; i < len; i++) {
        // console.log("loop running")
        const hrefs = links[i].href.replace(/\s\s+/g, "");
        request(hrefs, (error, response, html) => {
          if (!error && response.statusCode == 200) {
            // console.log(hrefs, " Success");
          } else if (!error && response.statusCode != 200) {
            // console.log(hrefs, " Failure");
          }
        });
      }
      // console.log(links);
      sessionStorage.setItem("all_link", JSON.stringify(links));
      
    }
  }
);
sessionStorage.removeItem(urllink);