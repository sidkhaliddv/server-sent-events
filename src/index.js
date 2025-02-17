import express from 'express';

const app = express();

app.get('/', (req, res)=>{
  res.send('Hello server events')
})

app.get('/events', (req, res)=>{
  res.setHeader('Content-Type', 'text/event-stream');
  
  sendMessageIntervals(res)
})

app.listen('9090', ()=>{
  console.log('server is listening on 9090')
})

let i=0;
const sendMessageIntervals = (res) => {
  setTimeout(()=>{
    res.write(`data: you got it ${i++} \n\n`)
    sendMessageIntervals(res)
  }, 1000)
}
