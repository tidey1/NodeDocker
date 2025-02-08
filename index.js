const app = require('express')()

app.get('/',(req,res)=>res.json({message:'Hello from Container'}));

const port = process.env.port||8080;

app.listen(port,()=>console.log('app listens on localhost:8080'));