const eventEmitter = require('events');

const shoutEvent = new eventEmitter();

// This will listen to this event
shoutEvent.on('echoPoint', (data)=>{
    console.log("Custom Event recieved : ", data);
})

shoutEvent.emit('echoPoint',
    {message : "Shouting name on echo point"}
)