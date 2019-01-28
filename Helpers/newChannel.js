
import {Platform} from 'react-native';


const newChanneler = {
    // create a new channel
    newChannel: ( name, isSound )=>{
                  switch(isSound){
                      case false:
                       if (Platform.OS === 'android') {
                          Expo.Notifications.createChannelAndroidAsync(name, {
                            name: name,
                            sound: false,
                          });
                          return true;
                        }else{
                                alert('newChannel is not supported on IOS')
                              }
                        break;

                   case true:
                       if (Platform.OS === 'android') {
                          Expo.Notifications.createChannelAndroidAsync(name, {
                            name: name,
                            sound: true,
                          });
                           return true;
                        }else{
                                alert('newChannel is not supported on IOS')
                              }
                        break;

                       default:
                             if (Platform.OS === 'android') {
                                Expo.Notifications.createChannelAndroidAsync(name, {
                                  name: name,
                                  sound: false,
                                });
                                 return true;
                              }else{
                                alert('newChannel is not supported on IOS')
                              }
                        break;

          }

    },


}

export default newChanneler;