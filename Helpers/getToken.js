
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';


const getTokener = {
     // get expo token
    getToken: async ()=>{
       const token = await Notifications.getExpoPushTokenAsync();
       return token;
    },

}

export default getTokener;