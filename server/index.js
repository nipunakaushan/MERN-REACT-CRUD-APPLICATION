{/*import express from 'express';

const app = express();

app.use(express.json({ limit: "50mb" ,extended: true }));

app.listen(5000, () => console.log('Server has started on port 5000'))
*/}

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';  //import posts routes from routs falder

const app = express();


app.use(bodyParser.json({ limit: "50mb" ,extended: true }));
app.use(bodyParser.urlencoded({limit:"50mb",extended:true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://blajkwolf:xnULRyjhsr10EFB6@merncrud0.xtdle4j.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log('Server has started on port 5000')))
  .catch((error) => console.log(error.message));
  

   