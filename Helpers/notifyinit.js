
import {Platform} from 'react-native';


const notifyiniter = {
    // initialize package and ask for notification permission
    initnotify: async ()=>{
           const {status} = await Expo.Permissions.askAsync(Expo.Permissions.NOTIFICATIONS);
           if (status != "granted") {
                 alert('you need to enable notification permission in settings')
                 return false;
           } else {
               Expo.Notifications.createChannelAndroidAsync('default', {
                name: 'Default',
                sound: true,
                });
                 Expo.Notifications.createChannelAndroidAsync('reminders', {
                  name: 'Reminders',
                  priority: 'max',
                  vibrate: [0, 250, 250, 250],
                  sound: true,
                });
                 Expo.Notifications.createChannelAndroidAsync('chat-messages', {
                  name: 'Chat messages',
                  sound: true,
                });
              return true;
           }
     },

}

export default notifyiniter;