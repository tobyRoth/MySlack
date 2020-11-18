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

//add message
app.post('/add-message', async(req, res) => {
    try{
        
        apiToken =req.query.token;
        if(!apiToken)
            return res.send({'status':'failed, token is requierd'})
        slack = new Slack(apiToken);
        var channel=req.query.channel;
        if(!channel)
            return res.send({'status':'failed, channel is required'})
        var msg=req.query.msg;
        if(!msg)
            return res.send({'status':'failed, messege is required'})
        Functions.addMessage(channel,msg).then(function(result){
            if(!result.ok)
                return res.send({'status':result});
            res.send({"u just posted a message":result.message.text});
        });
    }
    catch(error){
        console.error(error);    
    }
});
//get all messages from a specific channel
app.get('/get-all-messages', async(req, res) => {
    try{
        apiToken =req.query.token;
        if(!apiToken)
            return res.send({'status':'failed, token is required'});
        slack = new Slack(apiToken);
        var channel=req.query.channel;
        if(!channel)
            return res.send({'status':'failed, channel is required'})
        Functions.getAllMessages(channel).then(function(result){
            if(!result)
                return res.send({'status':'failed, token or channel not found'});
            let messagesList=Functions.resMessages(result);
            res.send({"all your messages":messagesList});
        });
    }
    catch(error){
        console.log(console.error());
    }    
});
//get all channels(name and id)
app.get('/get-all-channels', async(req, res) => {
    try{
        apiToken =req.query.token;
        if(!apiToken)
            return res.send({'status':'failed, token is required'});
        slack = new Slack(apiToken);
        Functions.getAllChannels().then(function(result){
        if(!result.ok)
            return res.send({'status':result});
            let conversations=Functions.resChannels(result.channels);
        res.send({'all channels:':conversations});
        });
    }
    catch(error){
        console.error(error);
    }    
});
//search for a message in all channels
app.get('/search-message', async(req, res) => {
    try{
        apiToken =req.query.token;
        if(!apiToken)
            return res.send({'status':'failed, token is required'});
        slack = new Slack(apiToken);
        var msg=req.query.msg;
        if(!msg)
            return res.send({'status':'failed, messege is required'});
        Functions.searchMessage(msg).then(function(result){
        console.log(result)
        if(!result.ok)
            return res.send({'status':result});
        let matches=Functions.resMatches(result.messages); 
        if(matches.length>0)             
            res.send({'messages found':matches});
        res.send('no matches messages found:(');
        });
    }
    catch(error){
        console.log(console.error);
    }    
});
app.get('*', function(req, res){
    res.status(404).send('page was not found:(');
  });

