# Node and express js fundamental 
- js k invent kora hoisilo browser e run korar jonno ,node js asche js k serverside e run korar jonno asche .node js holo ekta run time -
- Node.js Module
- Operating System Module(os)
- File System Module (fs)
- Path Module (path)
- HTTP Module (http)
- URL Module (url)
- Utilities Module (util)
# why node.js is popular
- we can use javascript on server side
- Build higly scalable backend application
- it is single threaded ,event driven and works non blocking I/O
- PerFect building data intensive ,streaming application
# what is event driven?(upcomming)
# Node.js arcitucture
- V8 engine -node.js er runtime is based on V8 Engine written in c++ & javascript. without v8 nodejs would never understand Javascript code. 
- v8 is the most important dependencies of Node Js

- Libuv
- Libuv is an open source library written on c++ which focuses on asynchronous I/O and gives node access to Computer OS,File Systems,Networking,etc

- Libuv implements 2 important parts of Node JS 
- Event Loop
  - Executes Callback functions
  - Network i/o
- Thread Pool 
  - CPU intensive Task 
  - File Access 
  - File Compression 
  - Cryptography 



# Module 
- a module is an isolated and resuable block of code that has its own scope
- amra jodi kono ekta block of code k isolate kore rakhte pari jate kore se globaly access na hoi ,jate kore seta k poroborti te reuse korte pari and tar jodi nijesso ekta context ba scop takhe take bola hoi modle .
- IIFE er por Modular System ta ase 
# Common js - esm Module (react er sathe import syntex)
-commonjs -require export/module.export.js
-esm -import -export default.mjs
-Module System -
-Local Modules(we create)
- Built in modules (come with node.js)
-Third party modules (created by others )
 
 #  Node js process
 - Single Threaded  ->  
 async e hole - single Threaded -> Thread pool 

 # Event Driven Architecture 
 - node js build kora hoise etar upor base kore 
 - Event Emitter -> Event Listener -> CallBack 
 - 

 # Stream and Buffer 
 - buffer - it is used to process a data pieace by peace which is called buffer 
   - it is better in terms off user experience 
   - Needs short memory storage as it do not complete whole process at once 

- striming korle memory o kom lage amader -
1- Readable Stream
2- writeable Stream
3-Duplex stream 
4- transform stream 