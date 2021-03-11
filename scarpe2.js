const request = require('request');
const cheerio = require('cheerio');

request('https://github.com/code-reaper08/Know-ASCII/blob/main/README.md', (error,response,html) =>{
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const readmebox = $('.Box mt-3 position-relative')
        console.log(readmebox.html());
        // console.log(reponame.text());
        // const repofiles = reponame.find('a').attr('href');
        // console.log(repofiles);
     
    }

});
