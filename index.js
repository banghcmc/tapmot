
const app = require(express)(); const io = require('socket.io')(server)
const server = require('http').Server(app).listen(process.env.PORT || 3000, () => console.log('server started'));

app.get('/',  (req, res) => { res.render('urlfileName'); });

io.on('connection', (socket) => {
            socket.emit('news', { hello: 'world' });
            socket.on('my other event', function (data) { console.log(data); });
});
