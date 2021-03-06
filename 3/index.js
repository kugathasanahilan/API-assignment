
import 'dotenv/config';
import express from 'express';
 
const app = express();
 
let users = {
    1: {
      id: '1',
      username: 'Robin Wieruch',
    },
    2: {
      id: '2',
      username: 'Dave Davids',
    },
  };
   
  let messages = {
    1: {
      id: '1',
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: '2',
      text: 'By World',
      userId: '2',
    },
  };
 
  app.get('/users', (req, res) => {
    return res.send(Object.values(messages));
  });
   
  app.get('/users/:userId', (req, res) => {
    return res.send(messages[req.params.userId]);
  });
 
app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});
 
app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});
 
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

app.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource');
  });
   
  app.post('/users', (req, res) => {
    return res.send('POST HTTP method on user resource');
  });
   
  app.put('/users/:userId', (req, res) => {
    return res.send(
      `PUT HTTP method on user/${req.params.userId} resource`,
    );
  });
   
  app.delete('/users/:userId', (req, res) => {
    return res.send(
      `DELETE HTTP method on user/${req.params.userId} resource`,
    );
  });