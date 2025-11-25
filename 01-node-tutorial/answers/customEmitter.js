const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (message) => {
    console.log('data received');
    console.log(message);
});

customEmitter.on('surprise', (timer) => {
    setTimeout(() => {
        console.log("Happy Birthday!");
    }, timer);
})

customEmitter.emit('response', 'Count to five...');
customEmitter.emit('surprise', 5000);