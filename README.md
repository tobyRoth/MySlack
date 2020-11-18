# MySlack
MySlack is an application that integrates to Slack services to sends messages and get messages without using the Slack App.\
MySlack is running on [Heroku](https://www.heroku.com/) server: https://slack-me.herokuapp.com/
#### MySlack includes the following APIs:
[Send Message](https://github.com/tobyRoth/MySlack/blob/master/README.md#send-message)\
[Get Messages](https://github.com/tobyRoth/MySlack/blob/master/README.md#get-messages) \
[Search Mesage](https://github.com/tobyRoth/MySlack/blob/master/README.md#search-message) \
[Get Channels]() 


## So how to use MySlack? 

## Let's get started! 
If you don't have a slack account yet, create one [here](https://slack.com/intl/en-il/get-started#/createnew).\
Now in your slack account, if you don't have a slack app create one [here](https://api.slack.com/apps).<br />
To use all MySlack APIs you need to give a few scopes to slack app. \
to giva all needed scopes go to OAuth & Permissions of your app. \
the scopes you need:
### Bot Token Scopes:
```chat:write``` \
 ```channels:history```\
 ```channels:read```\
 ```groups:history```\
 ```groups:read``` \
 ```im:history``` \
 ```im:read``` \ 
 ```mpim:history``` \ 
 ```mpim:read``` \
### User Token Scopes:
```chat:write``` \
```channels:history``` \
```channels:read``` \
```groups:history``` \
```groups:read``` \
```im:history```  \
```im:read```<br />
```mpim:history```<br />
```mpim:read```	<br />
```search:read``` 
#### Now that you have all scopes you need,and the app is installed keep the OAuth Access Token.

## To use the app 

For convenient and easy communication We suggest to use [PostMan](https://www.postman.com/). if you don't have it yet, install [here](https://www.postman.com/downloads/)\

## APIs

### Send Message:
send a message to a specific channel in one of your slack accounts. the API requires a token to a slack app , a channel name and a message to send.
#### Method:POST
#### URL: https://slack-me.herokuapp.com/send-message
#### Arguments-required:
**token**:xoxp-your-token.\
**channel**:channel name (if you don't know the name you can use Get Channels)
**msg**:your message 

### Get Messages:
returns all messages from a specific channel in one of your slack accounts the API requires a token to a slack app and a channel id 
#### Method:GET
#### URL: https://slack-me.herokuapp.com/get-all-messages
#### Required Arguments:
**token**:xoxp-your-token.\ 
**channel**:channel-id (if you don't know the id you can use Get Channels)\

### Search Message:
search for a specific message in all channels. the API returns all messages that contains the message you serched. the api requires a token to a slack app and a message.
#### Method:GET
#### URL: https://slack-me.herokuapp.com/search-message.
#### Required Arguments :
**token**:xoxp-your-token.<br />
**msg**:the-message-you're-searching

### Get Channels:
the API returns a list of all Workspace's chnnels name and id. the API requires a token to a slack app. \
 
#### Method:GET
#### URL: https://slack-me.herokuapp.com/get-all-channels
#### Required Arguments :
**token**:xoxp-your-token.\

### Good Luck and enjoy! 
