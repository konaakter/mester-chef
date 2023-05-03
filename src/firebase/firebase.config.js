// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "import.meta.env.VITE_apiKey",
  authDomain: "import.meta.env.VITE_authDomain",
  projectId: "import.meta.env.VITE_projectId",
  storageBucket: "import.meta.env.VITE_storageBucket",
  messagingSenderId: "import.meta.env.VITE_messagingSenderId",
  appId: "import.meta.env.VITE_appId"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


/*apiKey: "AIzaSyB1vw59LzB4qj4ddMy8-3zB-MiRQ7cNS-k",
  authDomain: "chef-master-53d9c.firebaseapp.com",
  projectId: "chef-master-53d9c",
  storageBucket: "chef-master-53d9c.appspot.com",
  messagingSenderId: "1000643163200",
  appId: "1:1000643163200:web:b4bf2ce74002a359f0dba5"
};*/
