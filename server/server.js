// const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'})
//     res.end('Hello Joe!')
// })

// server.listen(4000, ()=>{
//     console.log('Server running on localhost 4000');
// })


const express = require('express')
const app = express()

// app.get('/',(req,res)=>{
//     res.send('Welcome')
// })

// app.get('/about',(req,res)=>{
//     res.send('About page')
// })

// app.listen(5000,()=>{
//     console.log('Server running on http://localhost:5000');
    
// })

const users = [
    {id:1,name:'Alice'},
    {id:2,name:'Bob'}
]

app.get('/api/users',(req,res)=>{
    res.json(users)
})

app.get('/api/users/:id',(req,res)=>{
    const users = users.find(u=>u.id===parseInt(req.params.id))
    if(!user) return res.status(404).send('User not found')
        res.json(user)
})

app.listen(3000,()=>{
    console.log('Api running on localhost 3000');
})