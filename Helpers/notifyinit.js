
import {Platform} from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const notifyiniter = {
    // initialize package and ask for notification permission
    initnotify: async ()=>{
           const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
           if (status != "granted") {
                 alert('you need to enable notification permission in settings')
                 return false;
           } else {
               Notifications.createChannelAndroidAsync('default', {
                name: 'Default',
                sound: true,
                });
                 Notifications.createChannelAndroidAsync('reminders', {
                  name: 'Reminders',
                  priority: 'max',
                  vibrate: [0, 250, 250, 250],
                  sound: true,
                });
                 Notifications.createChannelAndroidAsync('chat-messages', {
                  name: 'Chat messages',
                  sound: true,
                });
              return true;
           }
     },

}

export default notifyiniter;