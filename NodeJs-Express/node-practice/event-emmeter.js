const EventEmiter=require("events")
// listener
const myEmitter= new EventEmiter();
myEmitter.on("birthday",()=>{
    console.log("happy birthday to you");
    
})
myEmitter.on("birthday",(gift)=>{
    console.log(`i will send a ${gift}`);
    
})
myEmitter.emit("birthday","bike")