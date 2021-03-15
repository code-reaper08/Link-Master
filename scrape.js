const request = require("request");
const cheerio = require("cheerio");
$(document).ready(function(){
request(
  "https://cors-anywhere.herokuapp.com/https://github.com/code-reaper08/MarkdownAssistant/blob/main/README.md",
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
      for (let i = 0; i < len; i++) {
        // console.log("loop running")
        const hrefs = links[i].href.replace(/\s\s+/g, "");
        request(hrefs, (error, response, html) => {
          if (!error && response.statusCode == 200) {
            console.log(hrefs, " Success");
            const div = $("#url");
            div.text("hello");
          } else if (!error && response.statusCode != 200) {
            console.log(hrefs, " Failure");
          }
        });
      }
    }
  }
);

});​ 