//---functions---//
//post message
function sendMessage(channel,msg){
    return new Promise(function(resolve,reject){
         slack.api('chat.postMessage', {
         text:msg,
         channel:channel,
     }, function(err, response){
         console.log("post!")
         console.log(response);
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
                     console.log("get!");
                     console.log('response:');
                     console.log(response.messages);
                     resolve(response.messages)
         });
     });
 } 
 //get all channels
 function getAllChannels(){
     return new Promise((function(resolve, reject){
         slack.api('conversations.list', {
             token: apiToken
         },function (err, response) {
                 console.log('list:');
                 console.log(response.ok);
                 resolve(response)
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
          resolve(response);
      });
  });
 }
 //---help functions to store response data---//
 let messagesList=[];
 //all messages
 function resMessages(result){ 
     for(var i=0;i<result.length;i++){
         messagesList.push(
             {
                 'text':result[i].text,
                 'user id':result[i].user,
                 'time stamp':result[i].ts
             }
             );
     }
     return messagesList;
         
 } 
 //all channels
 let conversations=[];
 function resChannels(channels) {
     
     for(var i=0;i<channels.length;i++)
         {
             conversations.push(
                 {
                     'channel name':channels[i].name,
                     'channel id':channels[i].id
                 }
             )   
         }
        return conversations;
 }
 let matches=[];
 //all matches messages to search
 function resMatches(messages){
         console.log(messages.matches.length);
         for(var i=0;i<messages.matches.length;i++)
         {
             matches.push(
                 {
                     'user name':messages.matches[i].username,
                     'text':messages.matches[i].text,
                     'perma link':messages.matches[i].permalink,
                     'time stamp':messages.matches[i].ts
                 }
             )   
         }
         return matches;
 }
 module.exports = { sendMessage,getAllMessages,getAllChannels,searchMessage,resMessages,resChannels,resMatches }