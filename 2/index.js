import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  app.listen(process.env.PORT, (PORT) =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);