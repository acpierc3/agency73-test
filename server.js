const express = require ('express');
const cors = require('cors');
const http = require('http');
const axios = require('axios');
const fs = require('fs');
const bodyParser = require('body-parser');

// const testUrls = [
//     'https://www.google.com/',
//     'https://www.facebook.com/',
//     'https://www.github.com/',
//     'https://www.twitter.com/',
//     'https://www.linkedin.com/',
//     'https://www.youtube.com/',
//     'https://mail.google.com/',
//     'https://www.reddit.com/',
//     'https://www.chess.com/',
//     'https://www.lichess.org/'
// ]


const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const scrapeHTML = (req, res) => {
    const urls = Object.values(req.body).filter(url => {
        return url != "";
    });
    urls.forEach((url, index) => {
        if(url) {
            axios.get(url)
            .then(html => {
                fs.writeFile('./html/HTML' +index +'.html', html.data, (err) =>{
                    if (err) throw err;
                    console.log('HTML saved!');
                })
            })
            .catch(err => {
                console.log("Error: URL not found");
                res.status(400).json("Error: URL"+index +"not found");
            })
        }
    })
    res.json("Request successful");
}

app.get('/', (req, res)=>{
  res.json("App is Working!");
})

app.put('/', (req, res)=>{
    scrapeHTML(req, res);
})

app.listen(5000, ()=> {
	console.log('app is running on port ' +(5000))
});