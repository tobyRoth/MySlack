//---functions---//

//post message
function sendMessage(channel,msg){
    return new Promise(function(resolve,reject){
         slack.api('chat.postMessage', {
         text:msg,
         channel:channel,
     }, function(err, response){
        if(err !=null) 
            reject(err);
        else
            resolve(response);
     });
 });
 }
 //get all messages
 function getAllMessages(id){
     return new Promise(function(resolve, reject){
         slack.api('conversations.history', {
            token: apiToken,
            channel:id
         },function (err, response) {
            if(err !=null) 
                reject(err);
            else
                resolve(response);
         });
     });
 } 
 //get all channels
 function getAllChannels(){
     return new Promise((function(resolve, reject){
         slack.api('conversations.list', {
            token: apiToken
         },function (err, response) {
            if(err !=null) 
                reject(err);
            else
                resolve(response);
     });
 }))
 }
 //serch massege
 function searchMessage(msg){
     return new Promise(function(resolve,reject){
        slack.api('search.messages', {
        token:apiToken,
        query:msg
      }, function(err, response){
        if(err !=null) 
            reject(err);
        else
            resolve(response);
      });
  });
 }
 //---help functions to store response data---//
 
 //all messages
 function mapMessages(messages){ 
    return messages.map(item =>  {
        let message = {}
        message['text'] = item.text
        message['user id'] = item.user
        message['time stamp']=item.ts
        return message
    });   
 } 
 
 //all channels
 function mapChannels(channels) {
    return channels.map(item =>  {
        let channel = {}
        channel['channel name'] = item.name
        channel['channel id'] = item.id
        return channel
    }); 
 } 
 //all matches messages to search
 function mapMatches(messages){
    return messages.matches.map(item =>  {
        let message = {}
        message['user name']=item.username,
        message['text'] =item.text,
        message['perma link']=item.permalink,
        message['time stamp']=item.ts
        return message
    });
    }
 module.exports = {sendMessage,getAllMessages,getAllChannels,searchMessage,mapMessages,mapMatches,mapChannels}