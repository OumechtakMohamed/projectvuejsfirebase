

import { firebase } from '@firebase/app'


var firebaseConfig = {
    apiKey: "AIzaSyCQrFEJMyGmBx_CzXraGwmgl7MXx-yyTEU",
    authDomain: "myprojectvuejs-b4b4a.firebaseapp.com",
    projectId: "myprojectvuejs-b4b4a",
    storageBucket: "myprojectvuejs-b4b4a.appspot.com",
    messagingSenderId: "287359647169",
    appId: "1:287359647169:web:aa455a47890d3a6bf6c340",
    measurementId: "G-DD1JP88BVL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export default firebase