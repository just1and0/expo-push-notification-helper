# expo-push-notification-helper 
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->


[![Build Status](https://travis-ci.com/just1and0/object-to-array-convert.svg?branch=master)](https://travis-ci.com/just1and0/expo-push-notification-helper/)

[![Code Quality](https://scrutinizer-ci.com/g/just1and0/expo-push-notification-helper/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/just1and0/expo-push-notification-helper/?branch=master)

This package helps you make expo push notification for React Native  easy to use.

### Installation

Add expo-push-notification-helper to your project by executing

```sh
$  npm install expo-push-notification-helper
or
$ yarn add expo-push-notification-helper
```
You're all set!
 
 
### Usage

##### To initialize expo-push-notification-helper import the "initnotify"

```sh
//import the initnotify into your project
import { initnotify } from 'expo-push-notification-helper';

//and then use like so
         initnotify();

```
### it's advicable to do this at your top level file.

#####  can also use the callback function. Which returns true on success and false if unsuccessful.
##### this will also automatically create three channels for your app, "default", "reminders", "chat-messages" .

```sh
//import the initnotify into your project
import { initnotify } from 'expo-push-notification-helper';

//and then use like so
         initnotify().then((data)=>{
              if(data){
                //get token
              }else{
                //request for permission
              }
         });

```

#

##### To get expo token of device import the "getToken"
###### this must be used in a async/await .

```sh
//import the getToken into your project
import { initnotify, getToken } from 'expo-push-notification-helper';

//and then use like so

      initnotify().then( async(data)=>{
          if(data){
                console.log(await getToken());
            }else{
              alert('please grant this app notification permission in settings.')
            }
       
        })




```
#


##### To  create a new channel import the "newChannel"

```sh
//import the newChannel into your project 
import {  newChannel } from 'expo-push-notification-helper';

//and then use like so 
    newChannel("GroupMessage");

```
##### on default your channel will be created sound being false but you can change that by adding true as a second input

#


#### To send push notification import the "notify"

```sh


//import the notify into your project 
import { notify } from 'expo-push-notification-helper';

//and then use like so 
      notify(token, "new message", "hello there how are you doing", "default")

```

##### Not you must supply the channel."




## Props

#### all expo-push-notification-helper props

| Name | Use | callback | note |
| ------ | ------ | ------ | ------ |
| initnotify() | initialize package, this will ask for notification permission. | true, false | this will also automatically create three channels for your app, "default", "reminders", "chat-messages" .|
| getToken() | get expo token of device | null | must be called in async/await |
| newChannel(name, isSound) | create new notification channel | true, false | isSound is a boolean |
| notify( token, title, body, channel ) |  send push notification| null | without providing a channel. channel will be set to default by default |



# Contributing
Have a new feature you'd love to add to this project? Make a Send me a pull request! Just follow the [guidelines](https://github.com/just1and0/expo-push-notification-helper/blob/master/contribute.md). Thank you!




### don't forget to star, like and share :)


## Licensing
----

This project is licensed under MIT license.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/txvnt"><img src="https://avatars0.githubusercontent.com/u/43381969?v=4" width="100px;" alt=""/><br /><sub><b>Tomás Vélez Núñez</b></sub></a><br /><a href="https://github.com/just1and0/expo-push-notification-helper/commits?author=txvnt" title="Code">💻</a></td>
    <td align="center"><a href="http://www.ujjalacharya.com.np"><img src="https://avatars3.githubusercontent.com/u/19649166?v=4" width="100px;" alt=""/><br /><sub><b>Ujjal Acharya</b></sub></a><br /><a href="https://github.com/just1and0/expo-push-notification-helper/commits?author=ujjalacharya" title="Documentation">📖</a></td>
    <td align="center"><a href="https://linksnest.com/just1and0"><img src="https://avatars3.githubusercontent.com/u/17249207?v=4" width="100px;" alt=""/><br /><sub><b>Oluwatobi Shokunbi </b></sub></a><br /><a href="https://github.com/just1and0/expo-push-notification-helper/commits?author=just1and0" title="Code">💻</a> <a href="https://github.com/just1and0/expo-push-notification-helper/commits?author=just1and0" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!