const express = require('express')
const app = express()
const port = 3333

app.get('/' , (req,res)=>{
    res.send('Ola galera do express!!')
})

app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`)
})
