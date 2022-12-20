console.log("Tribble-Webviewer is starting!")

const express = require('express')
const app = express()
const port = 3000
const publicDir = app.use(express.static('public'))
var cheerio = require('cheerio'); // Basically jQuery for node.js
const axios = require('axios').default;
const rp = require('request-promise');
const url = 'https://www.pointless.com';
const urlplusstyle = url + "style.css";
const urlImages = [
    "https://www.pointless.com/images/pointless.jpg",
    "https://www.pointless.com/images/button5.jpg"
]


app.get('/', (req, res) => {
    app.use('/static', express.static('public'))
})

async function getCssTest() {
    try {
      const response = await axios.get(urlplusstyle);
      res.send(response)
    } catch (error) {
      console.error(error);
    }
}

async function getImagesTest() {
    try {
        const response = await axios.get([urlImages[0], urlImages[1]])
            .then(res.send(response[0]))
            .then(res.send(response[1]))
    } catch (error) {
        console.error(error)
    }
}

app.get('/test', (req, res) => {
    axios.get(url)
        .then(({ data }) => res.send(data))
        .finally(console.log("Finished"))
        
})


app.listen(port, () => {
  console.log(`Tribble-Pro is listening on port ${port}`)
})