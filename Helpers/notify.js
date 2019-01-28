
import {Platform} from 'react-native';


const notifyer = {
    // Send a push notification
    notify: (to, title, body, channel)=>{

              switch(channel){
                    case "default":
                        fetch('https://exp.host/--/api/v2/push/send', {
                          method: 'POST',
                          headers: {
                              Accept: 'application/json',
                              'Content-Type': 'application/json',
                              'accept-encoding': 'gzip, deflate',
                              'host': 'exp.host'
                          },
                          body: JSON.stringify({ 
                              to: to,
                              title: title,
                              body: body,
                              priority: "high",
                              sound:"default",
                              channelId:"default",
                          }),
                            }).then((response) => response.json())
                          .then((responseJson) => {
                                }).catch((error) => {
                                  console.log(error);
                                });
                      break;

                      case "reminders":
                          fetch('https://exp.host/--/api/v2/push/send', {
                              method: 'POST',
                              headers: {
                                  Accept: 'application/json',
                                  'Content-Type': 'application/json',
                                  'accept-encoding': 'gzip, deflate',
                                  'host': 'exp.host'
                              },
                              body: JSON.stringify({ 
                                  to: to,
                                  title: title,
                                  body: body,
                                  priority: "high",
                                  sound:"default",
                                  channelId:"reminders",
                              }),
                                }).then((response) => response.json())
                              .then((responseJson) => {

                                    }).catch((error) => {
                                      console.log(error);
                                    });
                      break;

                      case "chat-messages":
                        fetch('https://exp.host/--/api/v2/push/send', {
                              method: 'POST',
                              headers: {
                                  Accept: 'application/json',
                                  'Content-Type': 'application/json',
                                  'accept-encoding': 'gzip, deflate',
                                  'host': 'exp.host'
                              },
                              body: JSON.stringify({ 
                                  to: to,
                                  title: title,
                                  body: body,
                                  priority: "high",
                                  sound:"default",
                                  channelId:"chat-messages",
                              }),
                                }).then((response) => response.json())
                              .then((responseJson) => {

                                    }).catch((error) => {
                                      console.log(error);
                                    });
                      break;


                       default:
                         fetch('https://exp.host/--/api/v2/push/send', {
                              method: 'POST',
                              headers: {
                                  Accept: 'application/json',
                                  'Content-Type': 'application/json',
                                  'accept-encoding': 'gzip, deflate',
                                  'host': 'exp.host'
                              },
                              body: JSON.stringify({ 
                                  to: to,
                                  title: title,
                                  body: body,
                                  priority: "high",
                                  sound:"default",
                                  channelId:channel,
                              }),
                                }).then((response) => response.json())
                              .then((responseJson) => {

                                    }).catch((error) => {
                                      console.log(error);
                                    });
                      break;





              }
     },


}

export default notifyer
;