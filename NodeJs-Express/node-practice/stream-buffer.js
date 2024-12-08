const http = require('http')
// creating a server using raw node.js
const server=http.createServer()
//listener
server.on('request',(req,res)=>{
    console.log(req.url,req.method);
    res.end('hellow from world !')
    
})
server.listen(5001,()=>{
    console.log(`server is listing on port 5001`);
    
})