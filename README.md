# MySlack
## MySlack is an application that integrates to Slack services to sends messages and get messages without using the Slack App.
## MySlack includes the following APIs:
### send a message:
send a message to a specific channel (in one of your slack accounts) the API requires a token to a slack app,a channel name and a message to send.
### get all messages:
returns all messages from a specific channel (in one of your slack accounts) the API requires a token to a slack app and a channel id 
### get all channels:
if you dont know the name/id of the channel you need-this api returns a list of all chnnels name and id the API requires a token to a slack app
### serch a mesage:
serch for a specific message in all channels the api returns all messages that contains the message you serched.the api requires a token to a slack app and a message.

## So how to use MySlack? 

## get started! 
If you don't have a slack account yet so please create one [here](https://slack.com/intl/en-il/get-started#/createnew).
Now in your slack account,if you don't have a slack app create one [here](https://api.slack.com/apps).
To use all MySlack APIs you need to give a few scopes to slack app.
to giva all needed scopes go to OAuth & Permissions of your app. 
the scopes you need:
Bot Token Scopes:
```chat:write``` 
```channels:history```
```channels:read```
```groups:history```
```groups:read``` 
```im:history```
```im:read```  
```mpim:history``` 
```mpim:read```
User Token Scopes:
```chat:write```
```channels:history``` 
```channels:read```
```groups:history```
```groups:read``` 
```im:history```   
```im:read```  
```mpim:history```
```mpim:read```	 
```search:read``` 
Now that you have all scopes you need,and the app is installed keep the OAuth Access Token.

##To run the app

To run the app u need to use POSTMAN.if you don't have yet,install it [here](https://www.postman.com/downloads/)
all required parameters for Api u will send through POSTMAN - params in the following way:
key:value

To send a message:
Method:POST
URL:https://slack-me.herokuapp.com/send-message
Arguments-required:
token:xoxp-your-token.
channel:channel-name
msg:your-message

click Send.
you will get a message that your message was posted.

To get all messages of a specific channel:
Method:GET
URL:https://slack-me.herokuapp.com/get-all-messages
Arguments-required:
token:xoxp-your-token.
channel:channel-id

click Send.
you will get all messages of the channel you've asked.

To search for a message in all channels:
Method:GET
URL:https://slack-me.herokuapp.com/search-message.
Arguments-required:
token:xoxp-your-token.
msg:the-message-you're-searching 

click Send
you will get all messages that containing the message you've search.

To get all channels of your Workspace:
Method:GET
URL:https://slack-me.herokuapp.com/get-all-channels
Arguments-required:
token:xoxp-your-token.

click Send
you will get a list of all chnnels name and id.

Good Luck and enjoy! 