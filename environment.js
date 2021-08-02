import  Constants   from "expo-constants";
import { constant } from "lodash";

const ENV={

    dev:{
        apiKey: "AIzaSyAkTDxwfY6may-S0b5gInB6WH-OErtuo9A",
    authDomain: "pet-tracker-app-14462.firebaseapp.com",
    projectId: "pet-tracker-app-14462",
    storageBucket: "pet-tracker-app-14462.appspot.com",
    messagingSenderId: "493206544782",
    appId: "1:493206544782:web:0dd9c67d5c577183e204df"
    },
    production: {
        apiKey: "AIzaSyAkTDxwfY6may-S0b5gInB6WH-OErtuo9A",
    authDomain: "pet-tracker-app-14462.firebaseapp.com",
    projectId: "pet-tracker-app-14462",
    storageBucket: "pet-tracker-app-14462.appspot.com",
    messagingSenderId: "493206544782",
    appId: "1:493206544782:web:0dd9c67d5c577183e204df"
    },
};

const getEnvVars=(env=Constants.manifest.releaseChanel)=>{
    if(__DEV__)return ENV.dev;
    else if (env === "staging")return ENV.dev;
    else if (env === "production")return ENV.production;


};
export default getEnvVars;