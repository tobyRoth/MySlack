const express = require('express');
const Functions = require('./Functions');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

var Slack = require('slack-node');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port);

//---routing---//

//send message
app.post('/send-message', async(req, res) => {
        apiToken =req.query.token;
        if(!apiToken)
            return res.send({'status':'failed', 'message':'token is requierd'})
        let channel=req.query.channel;
        if(!channel)
            return res.send({'status':'failed','message':'channel is required'})
        let msg=req.query.msg;
        if(!msg)
            return res.send({'status':'failed','message':'messege is required'})  
        slack = new Slack(apiToken);
        Functions.sendMessage(channel,msg).then(function(result){
            if(!result.ok)
                return res.send({'status':result});
            res.send({"u just posted a message":result.message.text});
        }).catch(function(err){
            res.send({'error occured':err})
        });
});
//get all messages from a specific channel
app.get('/get-all-messages', async(req, res) => {
        apiToken =req.query.token;
        if(!apiToken)
            return res.send({'status':'failed', 'message':'token is requierd'});
        let channel=req.query.channel;
        if(!channel)
            return res.send({'status':'failed','message':'channel is required'})
        slack = new Slack(apiToken);
        Functions.getAllMessages(channel).then(function(result){
            if(!result.ok)
                return res.send({'status':'failed','message':result.error});
            res.send({"messages":Functions.mapMessages(result.messages)});
        }).catch(function(err){
            res.send({'error occured':err})
        });
});

//search for a message in all channels
app.get('/search-message', async(req, res) => {
        apiToken =req.query.token;
        if(!apiToken)
            return res.send({'status':'failed','message':'token is required'});
        let msg=req.query.msg;
        if(!msg)
            return res.send({'status':'failed','message':'messege is required'});
        slack = new Slack(apiToken);
        Functions.searchMessage(msg).then(function(result){
        if(!result.ok)
            return res.send({'status':result});
            if(result.messages.matches.length<1)  
                return res.send('no matches messages found:(');           
            res.send({'messages found':Functions.mapMatches(result.messages)});
        }).catch(function(err){
            res.send({'error occured':err})
        });
});

//get all channels(name and id)
app.get('/get-all-channels', async(req, res) => {
        apiToken =req.query.token;
        if(!apiToken)
            return res.send({'status':'failed','message':'token is required'});
        slack = new Slack(apiToken);
        Functions.getAllChannels().then(function(result){
            if(!result.ok)
                return res.send({'status':result});
            res.send({'all channels:':Functions.mapChannels(result.channels)});
        }).catch(function(err){
            res.send({'error occured':err})
        });  
});
// for any other route
app.get('*', function(req, res){
    res.status(404).send('page was not found:(');
  });

