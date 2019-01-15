const express = require('express');
const bodyParser = require('body-parser');
const request = require('request')
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/businessData', (req, res) => {
  
  const options = {
    url: 'https://api.yelp.com/v3/businesses/search?categories=restaurants&location=sanfrancisco&limit=50',
    headers: {
      'Authorization': 'Bearer '
    }
  }
 
  const getBusinesses = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const businessData = JSON.parse(body);
      res.send(businessData)
    }
  }
 
  request(options, getBusinesses);

});

app.listen(port, () => console.log(`Listening on port ${port}`));