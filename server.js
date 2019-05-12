const axios = require('axios');
const fs = require('fs');

const testUrls = [
    'https://www.google.com/',
    'https://www.facebook.com/',
    'https://www.github.com/',
    'https://www.twitter.com/',
    'https://www.linkedin.com/',
    'https://www.youtube.com/',
    'https://mail.google.com/',
    'https://www.reddit.com/',
    'https://www.chess.com/',
    'https://www.lichess.org/'
]

testUrls.forEach((url, index) => {
    axios.get(url)
    .then(html => {
        fs.writeFile('./html/HTML' +index +'.html', html.data, (err) =>{
            if (err) throw err;
            console.log('HTML saved!');
        })
    })
    .catch(err => {
        console.log(err);
    })
})
