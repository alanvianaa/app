import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase"

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyDgwGk9MWvHGSzYTEQmjv1m8HVromHF07E",
  authDomain: "fazenda-api.firebaseapp.com",
  databaseURL: "https://fazenda-api.firebaseio.com",
  projectId: "fazenda-api",
  storageBucket: "fazenda-api.appspot.com",
  messagingSenderId: "359112140889",
  appId: "1:359112140889:web:efccea9e63a334017c6948",
  measurementId: "G-WGR1H2NPZJ"
};

firebase.initializeApp(firebaseConfig);

var ui = new firebase.auth.AuthUI(firebase.auth());
    var uiConfig = {
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'https://alanviana.com'
  };
    ui.start('#firebaseui-auth-container', uiConfig);

let app = '';
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});