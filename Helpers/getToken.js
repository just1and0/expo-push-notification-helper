
import {Platform} from 'react-native';


const getTokener = {
     // get expo token
    getToken: async ()=>{
       const token = await Expo.Notifications.getExpoPushTokenAsync();
       return token;
    },

}

export default getTokener;