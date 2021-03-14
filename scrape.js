const request = require('request');
const cheerio = require('cheerio');

request('https://github.com/code-reaper08/Know-ASCII/blob/main/README.md', (error,response,html) =>{
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        const linkObjects = $('#readme > article').children().find('a');
        const links = [];
        linkObjects.each((index, element) => {
            links.push({
              // text: $(element).text(), 
              href: $(element).attr('href'),
            });
          });
          const len = links.length;
        //   console.log(len);
          // console.log(links);
          // var arrayLength = myStringArray.length;
          for (let i = 0; i <len ; i++) {
              // console.log("loop running")
              const hrefs = links[i].href;
              request(hrefs,(error,response,html) => {
                if(!error && response.statusCode == 200) {
                  console.log(hrefs,' Success');
                }
                else if(!error && response.statusCode != 200) {
                  console.log(hrefs,' Failure');
                }
              })
}
    }
});
































// const request = require('request');
// const cheerio = require('cheerio');

// request('https://github.com/code-reaper08/Know-ASCII/blob/main/README.md', (error,response,html) =>{
//     if(!error && response.statusCode == 200) {
//         const $ = cheerio.load(html);

//         //const readmebox = $('#readme > article');
//         $('#readme > article').each((i,el) => {
//             const item = $(el).text();
//             const link = $(el).find('a').attr('href');
//             console.log(item);
//             // console.log(link);
//         })

//         //console.log(readmebox.find('a').attr('href'));
//         // console.log(reponame.text());
//         // const repofiles = reponame.find('a').attr('href');
//         // console.log(repofiles);
     
//     }

// });
