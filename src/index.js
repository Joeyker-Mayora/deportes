
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './App/Store';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSBne8YVGX1eGEwcRKJZgWf_UF-zu32fQ",
  authDomain: "coderhouse-deportes-icommerce.firebaseapp.com",
  projectId: "coderhouse-deportes-icommerce",
  storageBucket: "coderhouse-deportes-icommerce.appspot.com",
  messagingSenderId: "491115703640",
  appId: "1:491115703640:web:0876bc1463e900df92c92d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

