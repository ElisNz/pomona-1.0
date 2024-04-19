const express = require('express');
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
import { dataURIToBlob } from '../../helpers/functions';

const App = express();
const router = express.Router();

App.use(cors());
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

  const file = dataURIToBlob(base64img);
  
  const form = new FormData();
  form.append('images', file);

  try {
    const response = await axios.postForm(`${process.env.EXTERNAL_API_BASE_PATH}/${process.env.EXTERNAL_API_IDENTIFY_PATH}?api-key=${process.env.API_KEY}`, 
      form
    );

    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
  
});

export { App, router };
