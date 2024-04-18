const express = require('express');
import bodyParser from 'body-parser';
import axios from 'axios';
const App = express();
const router = express.Router();
import fs from 'fs';

App.use(bodyParser.json({ limit: '50mb' }));
App.use('/upload', bodyParser.raw({ limit: '50mb', type: 'multipart/form-data'}));

router.get('/ping', (req, res) => {
  res.send('Pong');
});

router.get('/languages', async(req, res) => {
  try {
    const request = await axios.get(`${process.env.EXTERNAL_API_BASE_PATH}/${process.env.EXTERNAL_API_LANG_PATH}?api-key=${process.env.API_KEY}`);
    res.send(request.data);
  } catch (error) {
    res.send(error);
  }
});

router.post('/upload/single', async(req, res) => {

  const { base64img } = req.body;

  const imgBlob = new Blob([fs.readFileSync('image.png')]);

  // fs.writeFileSync('image.png', base64img, 'base64');
  
  const form = new FormData();
  form.append('images', imgBlob);
  console.log(form);

  try {
    const response = await axios.postForm('https://my-api.plantnet.org/v2/identify/all?include-related-images=false&no-reject=false&lang=en&api-key=2b10UwUsHR7aRinBcWZerBCF9O', 
      form
    );

    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
  
});

export { App, router };
