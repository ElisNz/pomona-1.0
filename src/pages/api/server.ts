require('dotenv').config();
import { App, router } from './app';

const port = process.env.PORT || 3000;

App.use('/api', router);

App.listen(port, () => {
  console.log('Server is running on port: ', port);
});
