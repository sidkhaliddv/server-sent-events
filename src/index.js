import express from 'express';

const app = express();

app.get('/', (req, res)=>{
  res.send('Hello server events')
})

app.listen('9090', ()=>{
  console.log('server is listening on 9090')
})
